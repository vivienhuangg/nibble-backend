---
timestamp: 'Wed Nov 05 2025 16:19:13 GMT-0500 (Eastern Standard Time)'
parent: '[[../20251105_161913.a864f115.md]]'
content_id: 1778c6737ff3f3c21f99e91e9e136e75d2533d362417cd993c1af3295d3f9e0d
---

# response:

The concept design approach emphasizes modularity and clear separation of concerns. While the `Step` concept description provided suggests its lifecycle is managed by a `Recipe` concept, this can be beautifully handled using **synchronizations**.

To illustrate this, we will define a `Recipe` concept (hypothetically, for the purpose of this sync file) that will contain actions related to managing recipes and their steps. The `Step` concept itself will have actions to create, update, and delete individual step entities. Synchronizations will then bridge these two concepts, ensuring that `Step` entities are created and deleted in concert with `Recipe` actions.

For this example, we'll assume the existence of the `Requesting` concept (for API requests), a hypothetical `Sessioning` concept (for user authentication), and the `Recipe` and `Step` concepts with the following assumed structures (which would be defined in their respective `Concept.ts` files):

***

### Assumed Concept: `Recipe`

**purpose** manage the creation and modification of cooking recipes.

**state**
a set of Recipes with
an author User
a title String
a description String

**actions**
`createRecipe (author: User, title: String, description: String): (recipe: RecipeId)`
`deleteRecipe (recipe: RecipeId): ()`
`addStepToRecipe (recipe: RecipeId, description: String, notes: Optional[String], order: Number): (stepOrder: Number)`
*This action in Recipe is responsible for coordinating the creation of a Step entity.*

**queries**
(None needed for this sync example, but would typically exist)

***

### Assumed Concept: `Step`

**purpose** provide sequential instructions that guide users through the cooking process.
**principle** after defining ordered steps for a recipe, users can follow them sequentially to complete the dish.

**state**
a set of Steps with
a recipeId RecipeId
a description String
a notes Optional\[String]
a order Number

**actions**
`createStep (recipeId: RecipeId, description: String, notes: Optional[String], order: Number): (step: StepId)`
`updateStep (step: StepId, description: String, notes: Optional[String]): ()`
`deleteStep (step: StepId): ()`

**queries**
`_getStepsByRecipe (recipeId: RecipeId): (step: StepId, order: Number)`

***

Now, let's create the `src/syncs/recipe_steps.sync.ts` file to define the synchronizations.

```typescript
// src/syncs/recipe_steps.sync.ts

// These imports provide the core synchronization logic and helper functions.
import { actions, Sync, Frames } from "@engine";

// Assume these concepts exist. In a real project, these would be proper imports
// from their respective TypeScript files (e.g., '@concepts/Recipe/RecipeConcept.ts').
// For this example, we provide minimal placeholder definitions to allow type checking.
import { Requesting } from "@concepts"; // Requesting is a standard concept for handling API calls.

// Placeholder types for IDs
type User = string;
type RecipeId = string;
type StepId = string;

// Interface for step data often passed in requests
interface StepDataInput {
  description: string;
  notes?: string;
}

// --- Placeholder Concept Definitions (for type checking in this sync file) ---
// In a real application, these would be actual classes imported from `src/concepts/`

const Sessioning = {
  // _getUser (session: String): (user: User)
  _getUser: (_: { session: string }) => [{ user: "placeholder" as User }],
};

const Recipe = {
  // createRecipe (author: User, title: String, description: String): (recipe: RecipeId)
  createRecipe: (_: { author: User; title: string; description: string; }) => ({ recipe: "placeholder-recipe-id" as RecipeId }),
  // deleteRecipe (recipe: RecipeId): ()
  deleteRecipe: (_: { recipe: RecipeId }) => ({}),
  // addStepToRecipe (recipe: RecipeId, description: String, notes: Optional[String], order: Number): (stepOrder: Number)
  addStepToRecipe: (_: { recipe: RecipeId; description: string; notes?: string; order: number; }) => ({ stepOrder: 1 }),
};

const Step = {
  // createStep (recipeId: RecipeId, description: String, notes: Optional[String], order: Number): (step: StepId)
  createStep: (_: { recipeId: RecipeId; description: string; notes?: string; order: number; }) => ({ step: "placeholder-step-id" as StepId }),
  // deleteStep (step: StepId): ()
  deleteStep: (_: { step: StepId }) => ({}),
  // _getStepsByRecipe (recipeId: RecipeId): (step: StepId, order: Number)
  _getStepsByRecipe: (_: { recipeId: RecipeId }) => [{ step: "placeholder-step-id" as StepId, order: 1 }],
};

// --- Synchronizations ---

/**
 * Sync 1: Create Recipe from Request
 *
 * When a user makes an API request to create a recipe, and they are authenticated,
 * trigger the creation of the recipe in the `Recipe` concept.
 * This sync also captures the `steps` array from the request for subsequent syncs.
 */
export const CreateRecipeOnRequest: Sync = ({ request, author, title, description, steps, session, user }) => ({
  when: actions(
    // Match an incoming request for `/recipes/create`
    [Requesting.request, { path: "/recipes/create", author, title, description, steps, session }, { request }],
  ),
  where: async (frames) => {
    // Authenticate the user by querying the Sessioning concept
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    // Filter out frames where no user was found (i.e., unauthenticated requests)
    return frames.filter(($) => $[user] !== undefined);
  },
  then: actions(
    // If authenticated, create the recipe in the Recipe concept
    [Recipe.createRecipe, { author: user, title, description }],
  ),
});

/**
 * Sync 2: Add Steps to Recipe after Recipe Creation
 *
 * After a `Recipe.createRecipe` action successfully completes, and if the original
 * `Requesting.request` included a list of steps, this sync will iterate over those steps
 * and trigger `Recipe.addStepToRecipe` for each one.
 */
export const AddStepsToRecipeAfterCreation: Sync = ({ request, recipe, steps, stepDescription, stepNotes, order }) => ({
  when: actions(
    // Match a successful recipe creation
    [Recipe.createRecipe, {}, { recipe }],
    // Match the original request that included the steps data.
    // This connects the recipe creation to its originating request flow.
    [Requesting.request, { path: "/recipes/create", steps }, { request }],
  ),
  where: async (frames) => {
    const expandedFrames: Frames = new Frames();
    // For each frame (representing a recipe creation and its original request)
    for (const frame of frames) {
      const stepDataList: StepDataInput[] = frame[steps]; // Extract the array of step data
      if (Array.isArray(stepDataList)) {
        // Create a new frame for each step in the list, binding its details and order
        stepDataList.forEach((step, index) => {
          expandedFrames.push({
            ...frame, // Keep original frame bindings (like `recipe` and `request`)
            [stepDescription]: step.description,
            [stepNotes]: step.notes,
            [order]: index + 1, // Assign a 1-based order for the step
          });
        });
      }
    }
    return expandedFrames; // Return the new frames, one for each step
  },
  then: actions(
    // For each expanded frame, call `Recipe.addStepToRecipe`
    [Recipe.addStepToRecipe, { recipe, description: stepDescription, notes: stepNotes, order }],
  ),
});

/**
 * Sync 3: Create Step Entity when Recipe.addStepToRecipe is called
 *
 * This synchronization ensures that when the `Recipe` concept indicates a step is added
 * (via `Recipe.addStepToRecipe`), an actual `Step` entity is created and persisted
 * in the `Step` concept. This fulfills the "lifecycle managed by Recipe actions" principle
 * through synchronization.
 */
export const CreateStepOnRecipeAdd: Sync = ({ recipe, description, notes, order, stepOrder }) => ({
  when: actions(
    // Match the `addStepToRecipe` action from the Recipe concept
    [Recipe.addStepToRecipe, { recipe, description, notes, order }, { stepOrder }],
  ),
  then: actions(
    // Delegate the actual creation of the step entity to the `Step` concept
    [Step.createStep, { recipeId: recipe, description, notes, order }],
  ),
});

/**
 * Sync 4: Cascade Delete Steps on Recipe Deletion
 *
 * When a `Recipe` is deleted, this synchronization finds all associated `Step` entities
 * and triggers their deletion in the `Step` concept.
 */
export const CascadeDeleteStepsOnRecipeDeletion: Sync = ({ recipe, stepId, order }) => ({
  when: actions(
    // Match the `deleteRecipe` action from the Recipe concept
    [Recipe.deleteRecipe, { recipe }, {}],
  ),
  where: async (frames) => {
    // Query the `Step` concept to find all steps belonging to the deleted recipe
    frames = await frames.query(Step._getStepsByRecipe, { recipeId: recipe }, { step: stepId, order });
    return frames; // Each frame now represents a step to be deleted
  },
  then: actions(
    // For each found step, trigger its deletion in the `Step` concept
    [Step.deleteStep, { step: stepId }],
  ),
});

// Example of how to respond to the original request (optional, but common)
// This sync would respond with the newly created recipe ID.
export const RespondWithCreatedRecipe: Sync = ({ request, recipe }) => ({
  when: actions(
    [Requesting.request, { path: "/recipes/create" }, { request }],
    [Recipe.createRecipe, {}, { recipe }],
  ),
  then: actions(
    [Requesting.respond, { request, recipe }],
  ),
});
```
