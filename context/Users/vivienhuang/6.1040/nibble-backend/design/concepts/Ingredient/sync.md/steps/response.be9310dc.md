---
timestamp: 'Wed Nov 05 2025 15:56:20 GMT-0500 (Eastern Standard Time)'
parent: '[[../20251105_155620.8eda179f.md]]'
content_id: be9310dcde280ffcd0e37522ae626a05360714da2e8ed2f62fa3108be040f5c3
---

# response:

The provided `Ingredient` concept specification explicitly states: "**Ingredients are embedded data structures within Recipe; their lifecycle is managed by Recipe actions**". This means the `Ingredient` concept itself does not have direct actions (like `createIngredient`, `addIngredient`, etc.) and therefore cannot be the direct subject of a `when` or `then` clause in a synchronization.

Instead, functionality related to ingredients would be exposed and managed through a "parent" concept, such as a `Recipe` concept, which holds `Ingredient` data within its state and manipulates it through its own actions.

To demonstrate how a sync file would involve `Ingredient` data, we'll assume a `Recipe` concept exists with actions and queries that handle `Ingredient` data as an embedded structure.

### Hypothetical `Recipe` Concept Overview

Let's consider a `Recipe` concept that integrates the `Ingredient` structure:

**concept** Recipe \[User]

**purpose** create, manage, and share cooking instructions.
**principle** users can create a recipe with a list of ingredients and steps, and others can view it.

**state**
a set of Recipes with
an author User
a title String
a description String
a steps set of String
a ingredients set of {name: String, quantity: String, unit: Optional\[String], notes: Optional\[String]}

**actions**
**createRecipe** (author: User, title: String, description: String, ingredients: Array<{name: String, quantity: String, unit: Optional\[String], notes: Optional\[String]>): (recipe: Recipe)
**requires** no recipe with that title by that author exists
**effects** creates a new recipe, sets its properties including the provided ingredients, returns the new recipe

**queries**
**\_getIngredients** (recipe: Recipe): (name: String, quantity: String, unit: Optional\[String], notes: Optional\[String])
**requires** recipe exists
**effects** returns all ingredients for the given recipe

***

Now, we can implement a sync file that orchestrates interactions with this `Recipe` concept, thereby demonstrating how `Ingredient` data is handled indirectly.

We'll provide two example synchronizations:

1. **Creating a recipe from a request**, where the ingredients are part of the request's payload and passed to `Recipe.createRecipe`.
2. **Responding to a request to get a recipe's ingredients**, using `Recipe._getIngredients`.

### `src/concepts/Recipe/RecipeConcept.ts` (Assumed Implementation for Syncs)

This is a simplified version of what `RecipeConcept.ts` would look like for the syncs to import:

```typescript
import { ID } from "@utils/types.ts";
import { Collection, Db } from "npm:mongodb";
import { freshID } from "@utils/database.ts";

type User = ID;
export type RecipeID = ID;

// Type definition for an embedded ingredient, matching the Ingredient concept's state
export type IngredientData = {
  name: string;
  quantity: string;
  unit?: string;
  notes?: string;
};

// Simplified MongoDB document interface for Recipe
interface RecipeDoc {
  _id: RecipeID;
  author: User;
  title: string;
  description: string;
  steps: string[];
  ingredients: IngredientData[];
}

// Assumed RecipeConcept class for syncs to interact with
export default class RecipeConcept {
  private recipes: Collection<RecipeDoc>;
  private readonly db: Db; // Store db reference

  constructor(db: Db) { // Constructor takes Db instance
    this.db = db;
    this.recipes = this.db.collection("Recipe.recipes"); // Prefix for collection name
  }

  /**
   * createRecipe (author: User, title: String, description: String, ingredients: Array<{name: String, quantity: String, unit: Optional[String], notes: Optional[String]>): (recipe: Recipe)
   *
   * **requires** no recipe with that title by that author exists and ingredients array is not empty
   *
   * **effects** creates a new recipe, sets its properties including the provided ingredients, returns the new recipe
   */
  async createRecipe({ author, title, description, ingredients }: {
    author: User;
    title: string;
    description: string;
    ingredients: IngredientData[];
  }): Promise<{ recipe?: RecipeID; error?: string }> {
    if (!ingredients || ingredients.length === 0) {
      return { error: "Recipe must have at least one ingredient." };
    }
    const existingRecipe = await this.recipes.findOne({ author, title });
    if (existingRecipe) {
      return { error: "Recipe with this title already exists for this author." };
    }
    const newRecipeId = freshID() as RecipeID;
    await this.recipes.insertOne({
      _id: newRecipeId,
      author,
      title,
      description,
      ingredients,
      steps: [], // Simplified, steps not managed by this action
    });
    return { recipe: newRecipeId };
  }

  /**
   * _getIngredients(recipe: Recipe): (name: String, quantity: String, unit: Optional[String], notes: Optional[String])
   *
   * **requires** recipe exists
   *
   * **effects** returns all ingredients for the given recipe
   */
  async _getIngredients({ recipe: recipeId }: { recipe: RecipeID }): Promise<IngredientData[]> {
    const recipeDoc = await this.recipes.findOne({ _id: recipeId });
    return recipeDoc ? recipeDoc.ingredients : [];
  }
}
```

***

### `src/syncs/recipe_ingredient_syncs.sync.ts`

This file implements synchronizations that leverage the `Recipe` concept to manage `Ingredient` data:

```typescript
// These two help you declare synchronizations
import { actions, Sync, Frames } from "@engine";
// Import Requesting and Sessioning (common concepts)
import { Requesting, Sessioning } from "@concepts";
// Import the RecipeConcept, which manages Ingredient data
import RecipeConcept, { RecipeID, IngredientData } from "@concepts/Recipe/RecipeConcept.ts";

// Define symbols for variables to avoid stringly-typed issues and potential collisions
const request = Symbol("request");
const user = Symbol("user");
const session = Symbol("session");
const recipe = Symbol("recipe");
const title = Symbol("title");
const description = Symbol("description");
const ingredients = Symbol("ingredients"); // This will hold an array of IngredientData
const error = Symbol("error");
const recipeId = Symbol("recipeId"); // For requests targeting a specific recipe
const ingredient = Symbol("ingredient"); // For collecting individual ingredient data in queries
const results = Symbol("results"); // For collecting multiple query results


/**
 * sync CreateRecipeWithIngredients
 *
 * Handles a request to create a recipe, validating that ingredients are provided
 * and then calling the Recipe concept's createRecipe action.
 *
 * when
 * 	Requesting.request (path: "/recipes/create", session, title, description, ingredients) : (request)
 * where
 * 	in Sessioning: user for session
 * 	ingredients array is not empty
 * then
 * 	Recipe.createRecipe (author: user, title, description, ingredients)
 */
export const CreateRecipeWithIngredients: Sync = ({
  [request]: req,
  [user]: usr,
  [session]: sess,
  [title]: ttl,
  [description]: desc,
  [ingredients]: ingrs,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/recipes/create", session: sess, title: ttl, description: desc, ingredients: ingrs },
    { request: req },
  ]),
  where: async (frames) => {
    // Authenticate the user from the session
    frames = await frames.query(Sessioning._getUser, { session: sess }, { user: usr });

    // Validate that the ingredients array is not empty
    return frames.filter(($) => {
      const ingredientList = $[ingredients] as IngredientData[];
      return ingredientList && ingredientList.length > 0;
    });
  },
  then: actions([
    RecipeConcept.createRecipe,
    { author: usr, title: ttl, description: desc, ingredients: ingrs },
    { recipe: recipe }, // Capture the ID of the newly created recipe
  ]),
});


/**
 * sync RespondCreateRecipeSuccess
 *
 * Responds to the original request after a recipe has been successfully created.
 *
 * when
 * 	Requesting.request (path: "/recipes/create") : (request)
 * 	Recipe.createRecipe () : (recipe)
 * then
 * 	Requesting.respond (request, recipe: recipe)
 */
export const RespondCreateRecipeSuccess: Sync = ({
  [request]: req,
  [recipe]: rcp,
}) => ({
  when: actions(
    [Requesting.request, { path: "/recipes/create" }, { request: req }],
    [RecipeConcept.createRecipe, {}, { recipe: rcp }],
  ),
  then: actions([
    Requesting.respond,
    { request: req, recipe: rcp },
  ]),
});


/**
 * sync RespondCreateRecipeError
 *
 * Responds to the original request if the Recipe concept itself returns an error
 * (e.g., duplicate title, or internal validation).
 *
 * when
 * 	Requesting.request (path: "/recipes/create") : (request)
 * 	Recipe.createRecipe () : (error)
 * then
 * 	Requesting.respond (request, error: error)
 */
export const RespondCreateRecipeError: Sync = ({
  [request]: req,
  [error]: err,
}) => ({
  when: actions(
    [Requesting.request, { path: "/recipes/create" }, { request: req }],
    [RecipeConcept.createRecipe, {}, { error: err }],
  ),
  then: actions([
    Requesting.respond,
    { request: req, error: err },
  ]),
});


/**
 * sync RespondCreateRecipeNoIngredientsError
 *
 * Responds to the original request if the `ingredients` array was empty,
 * as caught by the 'where' clause of the CreateRecipeWithIngredients sync.
 *
 * when
 * 	Requesting.request (path: "/recipes/create", ingredients) : (request)
 * where
 * 	ingredients array is empty
 * then
 * 	Requesting.respond (request, error: "Recipe must have at least one ingredient.")
 */
export const RespondCreateRecipeNoIngredientsError: Sync = ({
  [request]: req,
  [ingredients]: ingrs,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/recipes/create", ingredients: ingrs },
    { request: req },
  ]),
  where: async (frames) => {
    // Filter to find frames where ingredients list is empty
    const originalFrame = frames[0]; // Capture original request data
    return frames.filter(($) => {
      const ingredientList = $[ingredients] as IngredientData[];
      return !ingredientList || ingredientList.length === 0;
    }).map(() => ({ // Ensure the request variable is available for the response
      [request]: originalFrame[request],
    }));
  },
  then: actions([
    Requesting.respond,
    { request: req, error: "Recipe must have at least one ingredient." },
  ]),
});


/**
 * sync GetRecipeIngredientsRequest
 *
 * Handles a request to retrieve all ingredients for a given recipe ID.
 *
 * when
 * 	Requesting.request (path: "/recipes/:recipeId/ingredients") : (request)
 * where
 * 	in Recipe: _getIngredients for recipeId
 * then
 * 	Requesting.respond (request, results: array of ingredients)
 */
export const GetRecipeIngredientsRequest: Sync = ({
  [request]: req,
  [recipeId]: rcpId, // Assuming :recipeId in path is parsed into recipeId variable
  [ingredient]: ing,
  [results]: res,
}) => ({
  when: actions([
    Requesting.request,
    { path: `/recipes/${rcpId}/ingredients` }, // Path pattern captures recipeId
    { request: req },
  ]),
  where: async (frames) => {
    // Query the Recipe concept for ingredients of the specified recipeId
    frames = await frames.query(RecipeConcept._getIngredients, { recipe: rcpId }, {
      name: ing.name, // Extract individual fields if needed, or pass the whole ingredient object
      quantity: ing.quantity,
      unit: ing.unit,
      notes: ing.notes,
    });

    // Collect all retrieved ingredients into a single 'results' array for the response
    return frames.collectAs([ing.name, ing.quantity, ing.unit, ing.notes], res);
  },
  then: actions([
    Requesting.respond,
    { request: req, results: res },
  ]),
});
```
