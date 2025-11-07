// These help you declare synchronizations and work with frames

// Import core concepts
import { Notebook, Recipe, Requesting, Sessioning } from "@concepts";
// These two help you declare synchronizations
import { actions, Frames, type Sync } from "@engine";

/**
 * Utility to check if a frame contains an 'error' key, following the convention
 * that errors are returned as `{ error: string }`.
 */
function hasErrorInFrame(frame: Record<PropertyKey, unknown>): boolean {
  return typeof frame.error === "string";
}

function cloneFrame(frame: Record<PropertyKey, unknown>) {
  const clone: Record<PropertyKey, unknown> = {};
  for (const key of Reflect.ownKeys(frame)) {
    clone[key] = frame[key as keyof typeof frame];
  }
  return clone;
}

function frameWith(
  frame: Record<PropertyKey, unknown>,
  updates: Record<PropertyKey, unknown>,
) {
  const clone = cloneFrame(frame);
  for (const key of Reflect.ownKeys(updates)) {
    clone[key] = updates[key as keyof typeof updates];
  }
  return clone;
}

// --- Synchronizations for Creating a Notebook ---

/**
 * **Create Notebook (Success Path)**
 * Handles the request to create a notebook by checking preconditions and
 * then triggering the `Notebook.createNotebook` action.
 * Only fires if the session is valid and an `owner` is successfully identified.
 */
export const CreateNotebookRequest_SuccessPath: Sync = ({
  request,
  session,
  title,
  description,
  owner,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Notebook/createNotebook", session, title, description },
    { request },
  ]),
  where: async (frames) => {
    console.log(
      "🔍 CreateNotebookRequest_SuccessPath where clause - input frames:",
      frames.length,
    );
    // 1. Get the user from the session. `Sessioning._getUser` returns { user: ID } or { error: string }.
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: owner },
    ); // Bind query result field "user" to symbol `owner`
    console.log("🔍 After query - frames:", frames.length);
    frames = frames.filter(
      ($) => $[owner] !== undefined && !hasErrorInFrame($),
    ); // Filter out error frames
    console.log(
      "🔍 After filter - frames:",
      frames.length,
      "owner defined:",
      frames.length > 0 ? frames[0][owner] !== undefined : false,
    );

    // Return only frames where a valid owner was found
    return frames;
  },
  then: actions([
    Notebook.createNotebook,
    { owner, title, description },
  ]),
});

/**
 * **Create Notebook (Precondition Error Path)**
 * Handles immediate error responses if preconditions for creating a notebook are not met
 * (e.g., invalid session, user not found).
 */
export const CreateNotebookRequest_PreconditionError: Sync = ({
  request,
  session,
  error,
  dummyUser,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Notebook/createNotebook", session },
    { request },
  ]),
  where: async (frames) => {
    const originalRequestFrame = frames[0];
    const ownerFrames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: dummyUser },
    ); // Use dummy var to check success/error

    if (ownerFrames.length === 0 || hasErrorInFrame(ownerFrames[0])) {
      // If no owner was found or an error occurred during lookup, prepare the error for response.
      const errorMessage = ownerFrames.length === 0
        ? "Session invalid or user not found."
        : ((ownerFrames[0] as any).error as string);
      const frameWithError = cloneFrame(originalRequestFrame);
      frameWithError[error] = errorMessage;
      return new Frames(frameWithError);
    }
    // If owner was successfully found, this error sync should NOT fire.
    return new Frames();
  },
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * **Create Notebook (Action Success Response)**
 * Responds to the original HTTP request after `Notebook.createNotebook` successfully completes.
 */
export const CreateNotebookResponse_Success: Sync = ({
  request,
  notebook,
}) => ({
  when: actions(
    [Requesting.request, { path: "/Notebook/createNotebook" }, { request }],
    [Notebook.createNotebook, {}, { notebook }], // Matches successful action output
  ),
  then: actions([
    Requesting.respond,
    { request, notebook }, // Respond with the ID of the new notebook
  ]),
});

/**
 * **Create Notebook (Action Error Response)**
 * Handles errors returned directly by the `Notebook.createNotebook` action.
 */
export const CreateNotebookResponse_Error: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/Notebook/createNotebook" }, { request }],
    [Notebook.createNotebook, {}, { error }], // Matches action output when an error occurs
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- Synchronizations for Inviting a Member to a Notebook ---

/**
 * **Invite Member (Success Path)**
 * Handles the request to invite a member.
 * This sync *only* triggers `Notebook.inviteMember` if all preconditions (valid session,
 * notebook existence, and current user is notebook owner) are met.
 */
export const InviteMemberRequest_SuccessPath: Sync = ({
  request,
  session,
  notebook,
  member,
  requesterUser,
  notebookDoc,
}) => ({
  when: actions([
    Requesting.request,
    {
      path: "/Notebook/inviteMember",
      session,
      notebook,
      member,
    },
    { request },
  ]),
  where: async (frames) => {
    // 1. Get the current user from the session
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: requesterUser },
    ); // Bind to `requesterUser`
    frames = frames.filter(
      ($) => $[requesterUser] !== undefined && !hasErrorInFrame($),
    ); // Filter out error frames
    if (frames.length === 0) return new Frames(); // No valid requester, stop this path

    // 2. Get the notebook document
    frames = await frames.query(
      Notebook._getNotebookById,
      { notebook },
      { notebook: notebookDoc },
    ); // Bind to `notebookDoc`
    frames = frames.filter(
      ($) => $[notebookDoc] !== undefined && !hasErrorInFrame($),
    ); // Filter out error frames
    if (frames.length === 0) return new Frames(); // Notebook not found, stop this path

    // 3. Filter to ensure the 'requesterUser' is actually the owner of the notebook
    const ownershipFrames = frames.filter(($) =>
      $[requesterUser] === ($[notebookDoc] as any)?.owner
    );
    console.log(
      "🔍 InviteMemberRequest_SuccessPath - ownership check frames:",
      ownershipFrames.length,
    );
    if (ownershipFrames.length > 0) {
      console.log(
        "✅ InviteMemberRequest_SuccessPath - requester IS owner, will call inviteMember",
      );
    } else {
      console.log(
        "❌ InviteMemberRequest_SuccessPath - requester is NOT owner, returning empty",
      );
    }
    return ownershipFrames;
  },
  then: actions([
    Notebook.inviteMember,
    { owner: requesterUser, notebook, member },
  ]),
});

/**
 * **Invite Member (Precondition Error Path)**
 * Handles immediate error responses if preconditions for inviting a member are not met
 * (e.g., invalid session, notebook not found, or user is not the notebook owner).
 */
export const InviteMemberRequest_PreconditionError: Sync = ({
  request,
  session,
  notebook,
  member,
  requesterUser,
  notebookDoc,
  error,
}) => ({
  when: actions([
    Requesting.request,
    {
      path: "/Notebook/inviteMember",
      session,
      notebook,
      member,
    },
    { request },
  ]),
  where: async (frames) => {
    console.log(
      "🔍 InviteMemberRequest_PreconditionError - checking preconditions",
    );
    const originalRequestFrame = frames[0];
    let currentFrames = new Frames(originalRequestFrame); // Start with the request frame for error context

    // 1. Check user session
    currentFrames = await currentFrames.query(
      Sessioning._getUser,
      { session },
      { user: requesterUser },
    );
    if (currentFrames.length === 0 || hasErrorInFrame(currentFrames[0])) {
      return new Frames({
        ...originalRequestFrame,
        [error]: "Session invalid or user not found.",
      });
    }

    // 2. Check notebook existence
    const notebookFrames = await currentFrames.query(
      Notebook._getNotebookById,
      { notebook },
      { notebook: notebookDoc },
    );
    if (notebookFrames.length === 0 || hasErrorInFrame(notebookFrames[0])) {
      return new Frames({
        ...originalRequestFrame,
        [error]: `Notebook with ID ${String(notebook)} not found.`,
      });
    }

    // 3. Check ownership
    const ownerCheckFrames = notebookFrames.filter(
      ($) => $[requesterUser] === ($[notebookDoc] as any)?.owner,
    );
    if (ownerCheckFrames.length === 0) {
      return new Frames({
        ...originalRequestFrame,
        [error]: "Only the notebook owner can invite members.",
      });
    }

    // If all preconditions pass, this error sync should NOT fire.
    return new Frames();
  },
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * **Invite Member (Action Success Response)**
 * Responds to the original HTTP request after `Notebook.inviteMember` successfully completes.
 */
export const InviteMemberResponse_Success: Sync = ({ request }) => ({
  when: actions(
    [
      Requesting.request,
      { path: "/Notebook/inviteMember" },
      { request },
    ],
    [Notebook.inviteMember, {}, {}], // `inviteMember` returns Empty on success
  ),
  then: actions([
    Requesting.respond,
    { request, status: "Member invited successfully." },
  ]),
});

/**
 * **Invite Member (Action Error Response)**
 * Handles errors returned directly by the `Notebook.inviteMember` action.
 */
export const InviteMemberResponse_Error: Sync = ({ request, error }) => ({
  when: actions(
    [
      Requesting.request,
      { path: "/Notebook/inviteMember" },
      { request },
    ],
    [Notebook.inviteMember, {}, { error }], // Matches action output when an error occurs
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- Synchronizations for Sharing a Recipe to a Notebook ---

/**
 * **Share Recipe (Success Path)**
 * Handles the request to share a recipe into a notebook.
 * This sync *only* triggers `Notebook.shareRecipe` if all preconditions are met:
 * - Valid session
 * - Recipe exists
 * - Notebook exists
 * - Requester is either the recipe owner OR a member of the notebook
 */
export const ShareRecipeRequest_SuccessPath: Sync = ({
  request,
  session,
  recipe,
  notebook,
  sharer,
  recipeDoc,
  notebookDoc,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Notebook/shareRecipe", session, notebook, recipe },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0];

    // 1. Get the current user from the session
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: sharer },
    );
    if (frames.length === 0 || hasErrorInFrame(frames[0])) {
      return new Frames(
        frameWith(originalFrame, {
          error: "Session invalid or user not found.",
        }),
      );
    }

    // 2. Get the recipe to check ownership
    frames = await frames.query(
      Recipe._getRecipeById,
      { recipe },
      { recipe: recipeDoc },
    );
    if (frames.length === 0 || hasErrorInFrame(frames[0])) {
      return new Frames(
        frameWith(originalFrame, { error: "Recipe not found." }),
      );
    }

    // 3. Get the notebook
    frames = await frames.query(
      Notebook._getNotebookById,
      { notebook },
      { notebook: notebookDoc },
    );
    if (frames.length === 0 || hasErrorInFrame(frames[0])) {
      return new Frames(
        frameWith(originalFrame, { error: "Notebook not found." }),
      );
    }

    // 4. Check if sharer is recipe owner OR notebook member
    frames = frames.filter(
      ($) =>
        $[sharer] === ($[recipeDoc] as any)?.owner ||
        ($[notebookDoc] as any)?.members.includes($[sharer]),
    );
    if (frames.length === 0) {
      return new Frames(
        frameWith(originalFrame, {
          error:
            "Only the recipe owner or notebook members can share this recipe.",
        }),
      );
    }

    return frames;
  },
  then: actions([
    Notebook.shareRecipe,
    { sharer, recipe, notebook },
  ]),
});

/**
 * **Share Recipe (Precondition Error Path)**
 * Handles error responses if preconditions for sharing are not met.
 */
export const ShareRecipeRequest_PreconditionError: Sync = ({
  request,
  error,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Notebook/shareRecipe" },
    { request },
  ]),
  where: (frames) =>
    frames.filter(
      ($) =>
        $[error] === "Session invalid or user not found." ||
        $[error] === "Recipe not found." ||
        $[error] === "Notebook not found." ||
        $[error] ===
          "Only the recipe owner or notebook members can share this recipe.",
    ),
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * **Share Recipe (Action Success Response)**
 * Responds to the original HTTP request after `Notebook.shareRecipe` successfully completes.
 */
export const ShareRecipeResponse_Success: Sync = ({ request }) => ({
  when: actions(
    [Requesting.request, { path: "/Notebook/shareRecipe" }, { request }],
    [Notebook.shareRecipe, {}, {}], // shareRecipe returns Empty on success
  ),
  then: actions([
    Requesting.respond,
    { request, status: "Recipe shared successfully." },
  ]),
});

/**
 * **Share Recipe (Action Error Response)**
 * Handles errors returned directly by the `Notebook.shareRecipe` action.
 */
export const ShareRecipeResponse_Error: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/Notebook/shareRecipe" }, { request }],
    [Notebook.shareRecipe, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- Synchronizations for Unsharing a Recipe from a Notebook ---

/**
 * **Unshare Recipe (Success Path)**
 * Handles the request to unshare a recipe from a notebook.
 * This sync *only* triggers `Notebook.unshareRecipe` if all preconditions are met:
 * - Valid session
 * - Recipe exists
 * - Notebook exists
 * - Requester is either the recipe owner OR the notebook owner
 */
export const UnshareRecipeRequest_SuccessPath: Sync = ({
  request,
  session,
  recipe,
  notebook,
  requester,
  recipeDoc,
  notebookDoc,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Notebook/unshareRecipe", session, notebook, recipe },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0];

    // 1. Get the current user from the session
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: requester },
    );
    if (frames.length === 0 || hasErrorInFrame(frames[0])) {
      return new Frames(
        frameWith(originalFrame, {
          error: "Session invalid or user not found.",
        }),
      );
    }

    // 2. Get the recipe to check ownership
    frames = await frames.query(
      Recipe._getRecipeById,
      { recipe },
      { recipe: recipeDoc },
    );
    if (frames.length === 0 || hasErrorInFrame(frames[0])) {
      return new Frames(
        frameWith(originalFrame, { error: "Recipe not found." }),
      );
    }

    // 3. Get the notebook to check ownership
    frames = await frames.query(
      Notebook._getNotebookById,
      { notebook },
      { notebook: notebookDoc },
    );
    if (frames.length === 0 || hasErrorInFrame(frames[0])) {
      return new Frames(
        frameWith(originalFrame, { error: "Notebook not found." }),
      );
    }

    // 4. Check if requester is recipe owner OR notebook owner
    frames = frames.filter(
      ($) =>
        $[requester] === ($[recipeDoc] as any)?.owner ||
        $[requester] === ($[notebookDoc] as any)?.owner,
    );
    if (frames.length === 0) {
      return new Frames(
        frameWith(originalFrame, {
          error:
            "Only the recipe owner or notebook owner can unshare this recipe.",
        }),
      );
    }

    return frames;
  },
  then: actions([
    Notebook.unshareRecipe,
    { requester, recipe, notebook },
  ]),
});

/**
 * **Unshare Recipe (Precondition Error Path)**
 * Handles error responses if preconditions for unsharing are not met.
 */
export const UnshareRecipeRequest_PreconditionError: Sync = ({
  request,
  error,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/notebooks/:notebookId/unshare" },
    { request },
  ]),
  where: (frames) =>
    frames.filter(
      ($) =>
        $[error] === "Session invalid or user not found." ||
        $[error] === "Recipe not found." ||
        $[error] === "Notebook not found." ||
        $[error] ===
          "Only the recipe owner or notebook owner can unshare this recipe.",
    ),
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * **Unshare Recipe (Action Success Response)**
 * Responds to the original HTTP request after `Notebook.unshareRecipe` successfully completes.
 */
export const UnshareRecipeResponse_Success: Sync = ({ request }) => ({
  when: actions(
    [
      Requesting.request,
      { path: "/Notebook/unshareRecipe" },
      { request },
    ],
    [Notebook.unshareRecipe, {}, {}],
  ),
  then: actions([
    Requesting.respond,
    { request, status: "Recipe unshared successfully." },
  ]),
});

/**
 * **Unshare Recipe (Action Error Response)**
 * Handles errors returned directly by the `Notebook.unshareRecipe` action.
 */
export const UnshareRecipeResponse_Error: Sync = ({ request, error }) => ({
  when: actions(
    [
      Requesting.request,
      { path: "/Notebook/unshareRecipe" },
      { request },
    ],
    [Notebook.unshareRecipe, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- Synchronizations for Removing a Member from a Notebook ---

/**
 * **Remove Member (Success Path)**
 * Handles the request to remove a member from a notebook.
 * This sync *only* triggers `Notebook.removeMember` if all preconditions are met:
 * - Valid session
 * - Notebook exists
 * - Current user is the notebook owner
 */
export const RemoveMemberRequest_SuccessPath: Sync = ({
  request,
  session,
  notebook,
  member,
  requesterUser,
  notebookDoc,
}) => ({
  when: actions([
    Requesting.request,
    {
      path: "/Notebook/removeMember",
      session,
      notebook,
      member,
    },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0];

    // 1. Get the current user from the session
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: requesterUser },
    );
    if (frames.length === 0 || hasErrorInFrame(frames[0])) {
      return new Frames(
        frameWith(originalFrame, {
          error: "Session invalid or user not found.",
        }),
      );
    }

    // 2. Get the notebook document
    frames = await frames.query(
      Notebook._getNotebookById,
      { notebook },
      { notebook: notebookDoc },
    );
    if (frames.length === 0 || hasErrorInFrame(frames[0])) {
      return new Frames(
        frameWith(originalFrame, { error: "Notebook not found." }),
      );
    }

    // 3. Check if requester is the notebook owner
    frames = frames.filter(($) =>
      $[requesterUser] === ($[notebookDoc] as any)?.owner
    );
    if (frames.length === 0) {
      return new Frames(
        frameWith(originalFrame, {
          error: "Only the notebook owner can remove members.",
        }),
      );
    }

    return frames;
  },
  then: actions([
    Notebook.removeMember,
    { owner: requesterUser, notebook, member },
  ]),
});

/**
 * **Remove Member (Precondition Error Path)**
 * Handles error responses if preconditions for removing a member are not met.
 */
export const RemoveMemberRequest_PreconditionError: Sync = ({
  request,
  error,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/notebooks/:notebookId/removeMember" },
    { request },
  ]),
  where: (frames) =>
    frames.filter(
      ($) =>
        $[error] === "Session invalid or user not found." ||
        $[error] === "Notebook not found." ||
        $[error] === "Only the notebook owner can remove members.",
    ),
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * **Remove Member (Action Success Response)**
 * Responds to the original HTTP request after `Notebook.removeMember` successfully completes.
 */
export const RemoveMemberResponse_Success: Sync = ({ request }) => ({
  when: actions(
    [
      Requesting.request,
      { path: "/Notebook/removeMember" },
      { request },
    ],
    [Notebook.removeMember, {}, {}],
  ),
  then: actions([
    Requesting.respond,
    { request, status: "Member removed successfully." },
  ]),
});

/**
 * **Remove Member (Action Error Response)**
 * Handles errors returned directly by the `Notebook.removeMember` action.
 */
export const RemoveMemberResponse_Error: Sync = ({ request, error }) => ({
  when: actions(
    [
      Requesting.request,
      { path: "/Notebook/removeMember" },
      { request },
    ],
    [Notebook.removeMember, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- Synchronizations for Deleting a Notebook ---

/**
 * **Delete Notebook (Success Path)**
 * Handles the request to delete a notebook.
 * This sync *only* triggers `Notebook.deleteNotebook` if all preconditions are met:
 * - Valid session
 * - Notebook exists
 * - Current user is the notebook owner
 */
export const DeleteNotebookRequest_SuccessPath: Sync = ({
  request,
  session,
  notebook,
  requesterUser,
  notebookDoc,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Notebook/deleteNotebook", session, notebook },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0];

    // 1. Get the current user from the session
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: requesterUser },
    );
    if (frames.length === 0 || hasErrorInFrame(frames[0])) {
      return new Frames(
        frameWith(originalFrame, {
          error: "Session invalid or user not found.",
        }),
      );
    }

    // 2. Get the notebook document
    frames = await frames.query(
      Notebook._getNotebookById,
      { notebook },
      { notebook: notebookDoc },
    );
    if (frames.length === 0 || hasErrorInFrame(frames[0])) {
      return new Frames(
        frameWith(originalFrame, { error: "Notebook not found." }),
      );
    }

    // 3. Check if requester is the notebook owner
    frames = frames.filter(($) =>
      $[requesterUser] === ($[notebookDoc] as any)?.owner
    );
    if (frames.length === 0) {
      return new Frames(
        frameWith(originalFrame, {
          error: "Only the notebook owner can delete the notebook.",
        }),
      );
    }

    return frames;
  },
  then: actions([
    Notebook.deleteNotebook,
    { owner: requesterUser, notebook },
  ]),
});

/**
 * **Delete Notebook (Precondition Error Path)**
 * Handles error responses if preconditions for deleting a notebook are not met.
 */
export const DeleteNotebookRequest_PreconditionError: Sync = ({
  request,
  error,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/notebooks/:notebookId/delete" },
    { request },
  ]),
  where: (frames) =>
    frames.filter(
      ($) =>
        $[error] === "Session invalid or user not found." ||
        $[error] === "Notebook not found." ||
        $[error] === "Only the notebook owner can delete the notebook.",
    ),
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * **Delete Notebook (Action Success Response)**
 * Responds to the original HTTP request after `Notebook.deleteNotebook` successfully completes.
 */
export const DeleteNotebookResponse_Success: Sync = ({ request }) => ({
  when: actions(
    [
      Requesting.request,
      { path: "/Notebook/deleteNotebook" },
      { request },
    ],
    [Notebook.deleteNotebook, {}, {}],
  ),
  then: actions([
    Requesting.respond,
    { request, status: "Notebook deleted successfully." },
  ]),
});

/**
 * **Delete Notebook (Action Error Response)**
 * Handles errors returned directly by the `Notebook.deleteNotebook` action.
 */
export const DeleteNotebookResponse_Error: Sync = ({ request, error }) => ({
  when: actions(
    [
      Requesting.request,
      { path: "/Notebook/deleteNotebook" },
      { request },
    ],
    [Notebook.deleteNotebook, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});
