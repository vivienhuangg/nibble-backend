// These two help you declare synchronizations

// Choose whatever concepts you have
import { Annotation, Recipe, Requesting, Sessioning } from "@concepts";
import { actions, Frames, type Sync } from "@engine";

function cloneFrame(frame: Record<PropertyKey, unknown>) {
  const clone: Record<PropertyKey, unknown> = {};
  for (const key of Reflect.ownKeys(frame)) {
    clone[key as keyof typeof frame] = frame[key as keyof typeof frame];
  }
  return clone;
}

// --- Create Recipe Synchronizations ---

/**
 * Sync CreateRecipeRequest
 * When a Requesting.request for /recipes/create comes in,
 * authenticate the session to get the owner, then call Recipe.createRecipe.
 */
export const CreateRecipeRequest: Sync = ({
  request,
  session,
  owner,
  title,
  ingredients,
  steps,
  error,
}) => ({
  when: actions([
    Requesting.request,
    {
      path: "/Recipe/createRecipe",
      session,
      title,
      ingredients,
      steps,
    },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0];
    // Authenticate user session to get the owner
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: owner },
    );
    console.log(
      "🔍 CreateRecipeRequest where - frames after query:",
      frames.length,
    );
    if (frames.length > 0) {
      console.log(
        "🔍 CreateRecipeRequest where - owner value:",
        frames[0][owner],
      );
    }
    frames = frames.filter(($) => typeof $[owner] === "string");
    console.log(
      "🔍 CreateRecipeRequest where - frames after filter:",
      frames.length,
    );
    if (frames.length === 0) {
      console.log("🔍 CreateRecipeRequest where - returning error frame");
      const frameWithError = cloneFrame(originalFrame);
      frameWithError[error] = "Session invalid or expired.";
      return new Frames(frameWithError);
    }
    console.log("🔍 CreateRecipeRequest where - returning success frames");
    return frames;
  },
  then: actions([
    Recipe.createRecipe,
    {
      owner,
      title,
      ingredients,
      steps,
      description: undefined,
      forkedFrom: undefined,
    },
  ]),
});

/**
 * Sync CreateRecipeResponse
 * When a Requesting.request for /recipes/create successfully leads to Recipe.createRecipe,
 * respond to the original request with the new recipe ID.
 */
export const CreateRecipeResponse: Sync = ({ request, recipe }) => ({
  when: actions(
    [Requesting.request, { path: "/Recipe/createRecipe" }, { request }],
    [Recipe.createRecipe, {}, { recipe }],
  ),
  then: actions([Requesting.respond, { request, recipe }]),
});

/**
 * Sync CreateRecipeErrorResponse
 * When a Requesting.request for /recipes/create results in an error from Recipe.createRecipe,
 * respond to the original request with the error.
 */
export const CreateRecipeErrorResponse: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/Recipe/createRecipe" }, { request }],
    [Recipe.createRecipe, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * Sync CreateRecipeSessionErrorResponse
 * Catches session-related errors propagated from the `where` clause of `CreateRecipeRequest`.
 */
export const CreateRecipeSessionErrorResponse: Sync = ({
  request,
  error,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Recipe/createRecipe" },
    { request },
  ]),
  where: (frames) =>
    frames.filter(($) => $[error] === "Session invalid or expired."),
  then: actions([Requesting.respond, { request, error }]),
});

// ==============================================================================
// NOTE: Query syncs removed - Recipe queries are PASSTHROUGH routes
// ==============================================================================
// The following query endpoints work via passthrough (configured in passthrough.ts):
// - /api/Recipe/_getRecipeById
// - /api/Recipe/_listRecipesByOwner
// - /api/Recipe/_searchRecipesByTag
// - /api/Recipe/_getForkCount
// - /api/Recipe/_listForksOfRecipe
//
// No syncs are needed - requests go directly to the concept query methods.

// --- Delete Recipe Synchronizations ---

/**
 * Sync DeleteRecipeRequest
 * When a Requesting.request for /recipes/delete comes in,
 * authenticate session, check recipe ownership, then call Recipe.deleteRecipe.
 */
export const DeleteRecipeRequest: Sync = (
  { request, session, recipe, recipeDoc, requester }, // `recipe` is the ID to delete
) => ({
  when: actions([
    Requesting.request,
    { path: "/Recipe/deleteRecipe", recipe, session },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0];

    // 1. Authenticate user session to get the requester
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: requester },
    );
    if (frames.length === 0) {
      return new Frames({ ...originalFrame, error: "Invalid session" });
    }

    // 2. Get recipe details to check ownership
    const frameAfterRequester = frames[0]; // Capture frame after getting requester
    frames = await frames.query(
      Recipe._getRecipeById,
      { recipe },
      { recipe: recipeDoc },
    );
    if (frames.length === 0) {
      return new Frames({ ...frameAfterRequester, error: "Recipe not found" });
    }

    // 3. Filter frames where requester is the recipe owner
    frames = frames.filter(($) =>
      $[requester] === ($[recipeDoc] as any)?.owner
    );
    if (frames.length === 0) {
      // If the filter resulted in empty frames, it means unauthorized
      return new Frames({
        ...frameAfterRequester,
        error: "Unauthorized to delete this recipe",
      });
    }
    return frames;
  },
  then: actions([Recipe.deleteRecipe, { requester, recipe }]),
});

/**
 * Sync DeleteRecipeResponse
 * Responds to a successful recipe deletion.
 */
export const DeleteRecipeResponse: Sync = ({ request }) => ({
  when: actions(
    [Requesting.request, { path: "/Recipe/deleteRecipe" }, { request }],
    [Recipe.deleteRecipe, {}, {}], // deleteRecipe action returns empty on success
  ),
  then: actions([
    Requesting.respond,
    { request },
  ]),
});

/**
 * Sync DeleteRecipeErrorResponse
 * Handles errors returned directly by the Recipe.deleteRecipe action.
 */
export const DeleteRecipeErrorResponse: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/Recipe/deleteRecipe" }, { request }],
    [Recipe.deleteRecipe, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * Sync DeleteRecipeCustomErrorResponse
 * Handles specific errors (invalid session, not found, unauthorized) propagated from `DeleteRecipeRequest`.
 */
export const DeleteRecipeCustomErrorResponse: Sync = ({ request, error }) => ({
  when: actions([Requesting.request, { path: "/Recipe/deleteRecipe" }, {
    request,
  }]),
  where: (frames) => {
    return frames.filter(
      ($) =>
        $[error] === "Invalid session" ||
        $[error] === "Recipe not found" ||
        $[error] === "Unauthorized to delete this recipe",
    );
  },
  then: actions([Requesting.respond, { request, error }]),
});

// --- Cascade Deletion of Annotations Sync ---

/**
 * Sync CascadeAnnotationDeletion
 * When a Recipe.deleteRecipe action occurs,
 * trigger Annotation.deleteByRecipe to remove all associated annotations.
 */
export const CascadeAnnotationDeletion: Sync = ({ recipe }) => ({
  when: actions(
    [Recipe.deleteRecipe, { recipe }, {}], // When a recipe is deleted
  ),
  // The Annotation.deleteByRecipe action already handles deleting all annotations
  // for a given recipe ID, so no specific 'where' clause to iterate annotations is needed here.
  then: actions([Annotation.deleteByRecipe, { recipeId: recipe }]),
});

// --- Other Recipe Actions (Examples for update, addTag, etc.) ---
// You would follow similar patterns for other actions.

/**
 * Sync UpdateRecipeDetailsRequest
 * Handles request to update recipe details, requires authentication and authorization.
 */
export const UpdateRecipeDetailsRequest: Sync = ({
  request,
  session,
  recipe,
  newTitle,
  newDescription,
  newIngredients,
  newSteps,
  recipeDoc,
  requester,
  requestDoc,
}) => {
  console.log("🔵 UpdateRecipeDetailsRequest SYNC FACTORY CALLED");
  console.log("🔵 Parameters:", {
    request,
    session,
    recipe,
    newTitle,
    newDescription,
    newIngredients,
    newSteps,
  });
  return {
    when: actions([
      Requesting.request,
      {
        path: "/Recipe/updateRecipeDetails",
        session,
        recipe,
      },
      { request },
    ]),
    where: async (frames) => {
      const originalFrame = frames[0];

      // Load the persisted request document to access the original payload
      type GetRequestByIdFn = (args: {
        request: unknown;
      }) => Promise<
        | Array<{ requestDoc: { input?: Record<string, unknown> } }>
        | Array<{ error: string }>
      >;
      const getRequestById = (Requesting as unknown as Record<string, unknown>)[
        "_getRequestById"
      ] as GetRequestByIdFn;
      frames = await frames.query(
        getRequestById,
        { request },
        { requestDoc },
      );
      if (frames.length === 0) {
        return new Frames({
          ...originalFrame,
          error: "Original request not found",
        });
      }

      const requestRecord = frames[0][requestDoc] as {
        input?: Record<string, unknown>;
      };
      const requestInput = requestRecord?.input ?? {};

      // Authenticate user session
      frames = await frames.query(
        Sessioning._getUser,
        { session },
        { user: requester },
      );
      if (frames.length === 0) {
        return new Frames({ ...originalFrame, error: "Invalid session" });
      }

      // Get recipe and check it exists
      frames = await frames.query(
        Recipe._getRecipeById,
        { recipe },
        { recipe: recipeDoc },
      );
      if (frames.length === 0) {
        return new Frames({ ...originalFrame, error: "Recipe not found" });
      }

      // Check ownership
      frames = frames.filter(($) =>
        $[requester] === ($[recipeDoc] as any)?.owner
      );
      if (frames.length === 0) {
        return new Frames({
          ...originalFrame,
          error: "Unauthorized to update this recipe",
        });
      }

      // Add optional parameters to the final frame
      const finalFrame = { ...frames[0] } as Record<PropertyKey, unknown>;
      const maybeTitle = (requestInput as { newTitle?: unknown }).newTitle;
      if (maybeTitle !== undefined) {
        finalFrame[newTitle] = maybeTitle;
      } else {
        delete finalFrame[newTitle];
      }

      const maybeDescription = (requestInput as {
        newDescription?: unknown;
      }).newDescription;
      if (maybeDescription !== undefined) {
        finalFrame[newDescription] = maybeDescription;
      } else {
        delete finalFrame[newDescription];
      }

      const maybeIngredients = (requestInput as {
        newIngredients?: unknown;
      }).newIngredients;
      if (maybeIngredients !== undefined) {
        finalFrame[newIngredients] = maybeIngredients;
      } else {
        delete finalFrame[newIngredients];
      }

      const maybeSteps = (requestInput as { newSteps?: unknown }).newSteps;
      if (maybeSteps !== undefined) {
        finalFrame[newSteps] = maybeSteps;
      } else {
        delete finalFrame[newSteps];
      }

      return new Frames(finalFrame);
    },
    then: actions([
      Recipe.updateRecipeDetails,
      {
        owner: requester,
        recipe,
        newTitle,
        newDescription,
        newIngredients,
        newSteps,
      },
    ]),
  };
};

/**
 * Sync UpdateRecipeDetailsResponse
 */
export const UpdateRecipeDetailsResponse: Sync = ({ request }) => {
  console.log(
    "🔔 UpdateRecipeDetailsResponse - Sync triggered for request:",
    request,
  );
  return {
    when: actions(
      [Requesting.request, { path: "/Recipe/updateRecipeDetails" }, {
        request,
      }],
      [Recipe.updateRecipeDetails, {}, {}], // updateRecipeDetails returns Empty on success
    ),
    then: actions([
      Requesting.respond,
      { request },
    ]),
  };
};

/**
 * Sync UpdateRecipeDetailsErrorResponse
 * Handles errors from `Recipe.updateRecipeDetails` or custom errors from `where` clause.
 */
export const UpdateRecipeDetailsErrorResponse: Sync = ({ request, error }) => {
  console.log(
    "🔔 UpdateRecipeDetailsErrorResponse - Error sync triggered:",
    error,
  );
  return {
    when: actions(
      [Requesting.request, { path: "/Recipe/updateRecipeDetails" }, {
        request,
      }],
      [Recipe.updateRecipeDetails, {}, { error }], // Direct error from action
    ),
    then: actions([Requesting.respond, { request, error }]),
  };
};

export const UpdateRecipeDetailsCustomErrorResponse: Sync = ({
  request,
  error,
}) => {
  console.log(
    "🔔 UpdateRecipeDetailsCustomErrorResponse - Custom error sync triggered:",
    error,
  );
  return {
    when: actions([
      Requesting.request,
      { path: "/Recipe/updateRecipeDetails" },
      {
        request,
      },
    ]),
    where: (frames) =>
      frames.filter(
        ($) =>
          $[error] === "Invalid session" ||
          $[error] === "Recipe not found" ||
          $[error] === "Unauthorized to update this recipe" ||
          $[error] === "Original request not found",
      ),
    then: actions([Requesting.respond, { request, error }]),
  };
};

// --- AI Draft Generation Synchronizations ---

/**
 * Sync DraftRecipeWithAIRequest
 * When a Requesting.request for /recipes/draftWithAI comes in,
 * authenticate the session to get the author, then call Recipe.draftRecipeWithAI.
 */
export const DraftRecipeWithAIRequest: Sync = ({
  request,
  session,
  recipe,
  goal,
  author,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Recipe/draftRecipeWithAI", session, recipe, goal },
    { request },
  ]),
  where: async (frames) => {
    // Authenticate user session to get the author
    const originalFrame = frames[0];
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: author },
    );
    if (frames.length === 0) {
      return new Frames({ ...originalFrame, error: "Invalid session" });
    }
    return frames;
  },
  then: actions([Recipe.draftRecipeWithAI, { author, recipe, goal }]),
});

/**
 * Sync DraftRecipeWithAIResponse
 * When a Requesting.request for /recipes/draftWithAI successfully leads to Recipe.draftRecipeWithAI,
 * respond to the original request with the draft details.
 */
export const DraftRecipeWithAIResponse: Sync = (
  {
    request,
    draftId,
    baseRecipe,
    requester,
    goal,
    title,
    ingredients,
    steps,
    notes,
    confidence,
    created,
    expires,
  },
) => ({
  when: actions(
    [Requesting.request, { path: "/Recipe/draftRecipeWithAI" }, { request }],
    [Recipe.draftRecipeWithAI, {}, {
      draftId,
      baseRecipe,
      requester,
      goal,
      title,
      ingredients,
      steps,
      notes,
      confidence,
      created,
      expires,
    }],
  ),
  then: actions([
    Requesting.respond,
    {
      request,
      draftId,
      baseRecipe,
      requester,
      goal,
      title,
      ingredients,
      steps,
      notes,
      confidence,
      created,
      expires,
    },
  ]),
});

/**
 * Sync DraftRecipeWithAIErrorResponse
 * When a Requesting.request for /recipes/draftWithAI results in an error from Recipe.draftRecipeWithAI,
 * respond to the original request with the error.
 */
export const DraftRecipeWithAIErrorResponse: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/Recipe/draftRecipeWithAI" }, { request }],
    [Recipe.draftRecipeWithAI, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * Sync DraftRecipeWithAISessionErrorResponse
 * Catches session-related errors propagated from the `where` clause of `DraftRecipeWithAIRequest`.
 */
export const DraftRecipeWithAISessionErrorResponse: Sync = ({
  request,
  error,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Recipe/draftRecipeWithAI" },
    { request },
  ]),
  where: (frames) => frames.filter(($) => $[error] === "Invalid session"),
  then: actions([Requesting.respond, { request, error }]),
});

// --- Apply Draft Synchronizations ---

/**
 * Sync ApplyDraftRequest
 * When a Requesting.request for /recipes/applyDraft comes in,
 * authenticate the session and authorize the user as the recipe owner, then call Recipe.applyDraft.
 */
export const ApplyDraftRequest: Sync = ({
  request,
  session,
  recipe,
  draftDetails,
  _owner,
  recipeDoc,
  requester,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Recipe/applyDraft", session, recipe, draftDetails },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0];

    // 1. Authenticate user session to get the requester
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: requester },
    );
    if (frames.length === 0) {
      return new Frames({ ...originalFrame, error: "Invalid session" });
    }

    // 2. Get recipe details to check ownership
    const frameAfterRequester = frames[0];
    frames = await frames.query(
      Recipe._getRecipeById,
      { recipe },
      { recipe: recipeDoc },
    );
    console.log(
      "🔍 ApplyDraftRequest - frames after recipe query:",
      frames.length,
    );
    if (frames.length > 0) {
      console.log(
        "🔍 ApplyDraftRequest - recipeDoc value:",
        frames[0][recipeDoc],
      );
      console.log(
        "🔍 ApplyDraftRequest - recipeDoc.owner:",
        (frames[0][recipeDoc] as any)?.owner,
      );
    }
    if (frames.length === 0) {
      return new Frames({ ...frameAfterRequester, error: "Recipe not found" });
    }

    // 3. Filter frames where requester is the recipe owner
    frames = frames.filter(($) =>
      $[requester] === ($[recipeDoc] as any)?.owner
    );
    if (frames.length === 0) {
      return new Frames({
        ...frameAfterRequester,
        error: "Unauthorized to apply draft to this recipe",
      });
    }

    return frames;
  },
  then: actions([
    Recipe.applyDraft,
    { owner: requester, recipe, draftDetails },
  ]),
});

/**
 * Sync ApplyDraftResponse
 * Responds to a successful draft application.
 */
export const ApplyDraftResponse: Sync = ({ request }) => ({
  when: actions(
    [Requesting.request, { path: "/Recipe/applyDraft" }, { request }],
    [Recipe.applyDraft, {}, {}], // applyDraft action returns empty on success
  ),
  then: actions([
    Requesting.respond,
    { request },
  ]),
});

/**
 * Sync ApplyDraftErrorResponse
 * Handles errors returned directly by the Recipe.applyDraft action.
 */
export const ApplyDraftErrorResponse: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/Recipe/applyDraft" }, { request }],
    [Recipe.applyDraft, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * Sync ApplyDraftCustomErrorResponse
 * Handles specific errors (invalid session, not found, unauthorized) propagated from `ApplyDraftRequest`.
 */
export const ApplyDraftCustomErrorResponse: Sync = ({ request, error }) => ({
  when: actions([
    Requesting.request,
    { path: "/Recipe/applyDraft" },
    { request },
  ]),
  where: (frames) => {
    return frames.filter(
      ($) =>
        $[error] === "Invalid session" ||
        $[error] === "Recipe not found" ||
        $[error] === "Unauthorized to apply draft to this recipe",
    );
  },
  then: actions([Requesting.respond, { request, error }]),
});
