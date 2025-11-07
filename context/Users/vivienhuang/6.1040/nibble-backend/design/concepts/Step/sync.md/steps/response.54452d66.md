---
timestamp: 'Wed Nov 05 2025 16:06:43 GMT-0500 (Eastern Standard Time)'
parent: '[[../20251105_160643.46a5bf4d.md]]'
content_id: 54452d66da8311aa6616ce1cce6614008e3b03b707a738eca8fb62c0abc27eda
---

# response:

Here's an implementation of a sync file, leveraging a hypothetical `Recipe` concept that manages embedded `Step` data structures.

First, let's sketch the `Recipe` concept, as the prompt specifies `Step` is embedded within it. This helps clarify the actions and queries the syncs will interact with.

## Sketch of `src/concepts/Recipe/RecipeConcept.ts` (for context)

```typescript
// file: src/concepts/Recipe/RecipeConcept.ts
import { Collection, Db } from "npm:mongodb";
import { Empty, ID } from "@utils/types.ts";
import { freshID } from "@utils/database.ts";

// Collection prefix to avoid naming conflicts
const PREFIX = "Recipe" + ".";

// Generic type parameters
type User = ID;    // The author of the recipe
type Recipe = ID;  // The ID of a recipe document
type StepId = ID;  // The ID of an embedded step object

/**
 * The structure of an individual step within a recipe.
 * Note: `StepId` is included to uniquely identify steps within the `steps` array.
 */
interface Step {
  id: StepId;
  description: string;
  notes?: string; // Optional field
}

/**
 * The structure of a Recipe document in the database.
 * It includes an array of `Step` objects.
 */
interface RecipeDoc {
  _id: Recipe;
  author: User;
  title: string;
  description: string;
  steps: Step[]; // Embedded array of steps
}

export default class RecipeConcept {
  // MongoDB collection for recipes
  recipes: Collection<RecipeDoc>;

  constructor(private readonly db: Db) {
    this.recipes = this.db.collection(PREFIX + "recipes");
  }

  /**
   * createRecipe (author: User, title: String, description: String): (recipe: Recipe)
   *
   * @requires No recipe with the same title by the same author exists.
   * @effects Creates a new recipe with the given details and an empty steps array.
   *          Returns the ID of the new recipe.
   */
  async createRecipe(
    { author, title, description }: { author: User; title: string; description: string },
  ): Promise<{ recipe: Recipe } | { error: string }> {
    const existing = await this.recipes.findOne({ author, title });
    if (existing) {
      return { error: "Recipe with this title already exists for this author." };
    }
    const newRecipeId = freshID();
    await this.recipes.insertOne({
      _id: newRecipeId,
      author,
      title,
      description,
      steps: [], // Initialize with an empty array of steps
    });
    return { recipe: newRecipeId };
  }

  /**
   * addStep (recipe: Recipe, description: String, notes: Optional[String]): (step: StepId)
   *
   * @requires A recipe with the given `recipe` ID must exist.
   * @effects Adds a new step to the specified recipe's `steps` array.
   *          Returns the ID of the newly created step.
   */
  async addStep(
    { recipe, description, notes }: { recipe: Recipe; description: string; notes?: string },
  ): Promise<{ step: StepId } | { error: string }> {
    const newStepId = freshID();
    const result = await this.recipes.updateOne(
      { _id: recipe },
      { $push: { steps: { id: newStepId, description, notes } } },
    );
    if (result.matchedCount === 0) {
      return { error: "Recipe not found." };
    }
    return { step: newStepId };
  }

  /**
   * _getRecipe (recipe: Recipe): (title: String, description: String, steps: Step[])
   *
   * @requires A recipe with the given `recipe` ID must exist.
   * @effects Returns the title, description, and the full list of steps for the specified recipe.
   */
  async _getRecipe(
    { recipe }: { recipe: Recipe },
  ): Promise<({ title: string; description: string; steps: Step[] }[]) | { error: string }> {
    const doc = await this.recipes.findOne({ _id: recipe });
    if (!doc) {
      return { error: "Recipe not found." };
    }
    // Queries must return an array of results
    return [{ title: doc.title, description: doc.description, steps: doc.steps }];
  }

  // ... other actions like removeStep, updateStep, and other queries like _getRecipeSteps
}
```

***

## Implementing the Sync File

Now, with the `Recipe` concept and its actions defined, we can create the synchronization file (`recipe.sync.ts`). These syncs will orchestrate interactions between `Requesting`, `Sessioning`, and our new `Recipe` concept.

```typescript
// file: src/syncs/recipe.sync.ts

// These imports provide the necessary DSL and types for synchronizations
import { actions, Sync, Frames } from "@engine";
import { ID } from "@utils/types.ts"; // For type annotations of generic IDs

// Import the concepts our syncs will interact with.
// These are assumed to be available under the @concepts alias as per deno.json.
import { Requesting, Sessioning, Recipe } from "@concepts";

// --- Syncs for Creating a Recipe ---

/**
 * @sync CreateRecipeRequest
 * @purpose Handles incoming HTTP requests to create a new recipe.
 * @when A Requesting.request action occurs with the path "/recipes/create".
 * @where A valid user session is provided, and the user's ID is retrieved.
 * @then The Recipe.createRecipe action is invoked with the validated user as author.
 */
export const CreateRecipeRequest: Sync = ({ request, title, description, session, user }) => ({
    when: actions(
        [Requesting.request, { path: "/recipes/create", title, description, session }, { request }],
    ),
    where: async (frames) => {
        // Query the Sessioning concept to get the user associated with the session.
        frames = await frames.query(Sessioning._getUser, { session }, { user });
        // If frames is empty here, it means the session was invalid or user not found.
        // A dedicated sync could handle unauthenticated requests.
        return frames;
    },
    then: actions(
        [Recipe.createRecipe, { author: user, title, description }, {}],
    ),
});

/**
 * @sync CreateRecipeResponseSuccess
 * @purpose Responds to the client when a recipe has been successfully created.
 * @when Both a Requesting.request for recipe creation and a successful Recipe.createRecipe action have occurred in the same flow.
 * @then The Requesting.respond action is invoked, returning the ID of the newly created recipe.
 */
export const CreateRecipeResponseSuccess: Sync = ({ request, recipe }) => ({
    when: actions(
        [Requesting.request, { path: "/recipes/create" }, { request }],
        [Recipe.createRecipe, {}, { recipe }], // Match successful creation (returns 'recipe')
    ),
    then: actions(
        [Requesting.respond, { request, recipe }],
    ),
});

/**
 * @sync CreateRecipeResponseError
 * @purpose Responds to the client when recipe creation fails.
 * @when Both a Requesting.request for recipe creation and a failed Recipe.createRecipe action have occurred in the same flow.
 * @then The Requesting.respond action is invoked, returning the error message.
 */
export const CreateRecipeResponseError: Sync = ({ request, error }) => ({
    when: actions(
        [Requesting.request, { path: "/recipes/create" }, { request }],
        [Recipe.createRecipe, {}, { error }], // Match failed creation (returns 'error')
    ),
    then: actions(
        [Requesting.respond, { request, error }],
    ),
});

// --- Syncs for Adding a Step to a Recipe ---

/**
 * @sync AddStepToRecipeRequest
 * @purpose Handles incoming HTTP requests to add a step to an existing recipe.
 * @when A Requesting.request action occurs with a path matching "/recipes/:recipeId/addStep".
 * @where A valid user session is provided, and the user's ID is retrieved.
 *        (An optional authorization check, e.g., user owns recipe, could be added here).
 * @then The Recipe.addStep action is invoked.
 */
export const AddStepToRecipeRequest: Sync = ({ request, recipeId, description, notes, session, user }) => ({
    when: actions(
        // The engine can extract 'recipeId' from the path parameter
        [Requesting.request, { path: `/recipes/:recipeId/addStep`, description, notes, session }, { request, recipeId }],
    ),
    where: async (frames) => {
        // Authenticate the user session
        frames = await frames.query(Sessioning._getUser, { session }, { user });
        // TODO: Add authorization check here if only the recipe author can add steps.
        // For example:
        // const originalFrame = frames[0];
        // const recipeOwnerFrames = await frames.query(Recipe._getRecipeOwner, {recipe: recipeId}, {owner: "ign"});
        // if (recipeOwnerFrames.length === 0 || recipeOwnerFrames[0].owner !== originalFrame[user]) {
        //    return new Frames({ ...originalFrame, error: "Not authorized to modify this recipe." });
        // }
        return frames;
    },
    then: actions(
        [Recipe.addStep, { recipe: recipeId, description, notes }, {}],
    ),
});

/**
 * @sync AddStepToRecipeResponseSuccess
 * @purpose Responds to the client when a step has been successfully added to a recipe.
 * @when Both a Requesting.request for adding a step and a successful Recipe.addStep action have occurred in the same flow.
 * @then The Requesting.respond action is invoked, returning the ID of the newly added step.
 */
export const AddStepToRecipeResponseSuccess: Sync = ({ request, step }) => ({
    when: actions(
        [Requesting.request, { path: `/recipes/:recipeId/addStep` }, { request }],
        [Recipe.addStep, {}, { step }], // Match successful step addition (returns 'step')
    ),
    then: actions(
        [Requesting.respond, { request, step }],
    ),
});

/**
 * @sync AddStepToRecipeResponseError
 * @purpose Responds to the client when adding a step to a recipe fails.
 * @when Both a Requesting.request for adding a step and a failed Recipe.addStep action have occurred in the same flow.
 * @then The Requesting.respond action is invoked, returning the error message.
 */
export const AddStepToRecipeResponseError: Sync = ({ request, error }) => ({
    when: actions(
        [Requesting.request, { path: `/recipes/:recipeId/addStep` }, { request }],
        [Recipe.addStep, {}, { error }], // Match failed step addition (returns 'error')
    ),
    then: actions(
        [Requesting.respond, { request, error }],
    ),
});
```
