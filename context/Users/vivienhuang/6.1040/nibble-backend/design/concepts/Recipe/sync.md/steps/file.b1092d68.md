---
timestamp: 'Wed Nov 05 2025 16:04:33 GMT-0500 (Eastern Standard Time)'
parent: '[[../20251105_160433.29b46bdd.md]]'
content_id: b1092d68855b80be813a35380936729f463cb0937c8ca969340915520498b6a4
---

# file: src/syncs/recipes.sync.ts

```typescript
import { actions, Frames, Sync } from "@engine";
import { Requesting, Sessioning, Recipe } from "@concepts"; // Assuming Sessioning exists

// --- 1. Create Recipe Synchronization ---

/**
 * sync CreateRecipeOnRequest
 *
 * **when** Requesting.request (path: "/recipes/create", session, title, ingredients, steps, description?, forkedFrom?) : (request)
 * **where** in Sessioning: user for session is u
 * **then** Recipe.createRecipe (owner: u, title, ingredients, steps, description?, forkedFrom?)
 *
 * Description: Captures an incoming request to create a recipe, resolves the user from the session,
 * and triggers the Recipe concept's createRecipe action.
 */
export const CreateRecipeOnRequest: Sync = (
  { request, session, title, ingredients, steps, description, forkedFrom, user },
) => ({
  when: actions([
    Requesting.request,
    {
      path: "/recipes/create",
      session,
      title,
      ingredients,
      steps,
      description,
      forkedFrom,
    },
    { request },
  ]),
  where: async (frames) => {
    // Resolve the user from the session
    return await frames.query(Sessioning._getUser, { session }, { user });
  },
  then: actions([
    Recipe.createRecipe,
    {
      owner: user, // Use the user resolved from the session
      title,
      ingredients,
      steps,
      description,
      forkedFrom,
    },
  ]),
});

/**
 * sync RespondToCreateRecipeSuccess
 *
 * **when** Requesting.request (path: "/recipes/create") : (request)
 *         Recipe.createRecipe () : (recipe)
 * **then** Requesting.respond (request, recipe)
 *
 * Description: Responds to the original request with the ID of the newly created recipe upon success.
 */
export const RespondToCreateRecipeSuccess: Sync = (
  { request, recipe },
) => ({
  when: actions(
    [Requesting.request, { path: "/recipes/create" }, { request }],
    [Recipe.createRecipe, {}, { recipe }],
  ),
  then: actions([Requesting.respond, { request, recipe }]),
});

/**
 * sync RespondToCreateRecipeError
 *
 * **when** Requesting.request (path: "/recipes/create") : (request)
 *         Recipe.createRecipe () : (error)
 * **then** Requesting.respond (request, error)
 *
 * Description: Responds to the original request with an error message if recipe creation fails.
 */
export const RespondToCreateRecipeError: Sync = (
  { request, error },
) => ({
  when: actions(
    [Requesting.request, { path: "/recipes/create" }, { request }],
    [Recipe.createRecipe, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- 2. Delete Recipe Synchronization ---

/**
 * sync DeleteRecipeOnRequest
 *
 * **when** Requesting.request (path: "/recipes/delete", session, recipeId) : (request)
 * **where** in Sessioning: user for session is u
 *         in Recipe: _getRecipeById (recipe: recipeId) returns r (where r.owner = u)
 * **then** Recipe.deleteRecipe (requester: u, recipe: recipeId)
 *
 * Description: Captures a request to delete a recipe, authenticates the user,
 * and authorizes by checking if the user is the recipe's owner before deleting.
 */
export const DeleteRecipeOnRequest: Sync = (
  { request, session, recipeId, user, recipeDoc },
) => ({
  when: actions([
    Requesting.request,
    { path: "/recipes/delete", session, recipeId },
    { request },
  ]),
  where: async (frames) => {
    // 1. Resolve the user from the session
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    // 2. Get the recipe document
    frames = await frames.query(Recipe._getRecipeById, { recipe: recipeId }, { recipe: recipeDoc });
    // 3. Authorize: Ensure the resolved user is the owner of the recipe
    return frames.filter(($) => $[user] === $[recipeDoc].owner);
  },
  then: actions([
    Recipe.deleteRecipe,
    { requester: user, recipe: recipeId },
  ]),
});

/**
 * sync RespondToDeleteRecipeSuccess
 *
 * **when** Requesting.request (path: "/recipes/delete") : (request)
 *         Recipe.deleteRecipe () : ()
 * **then** Requesting.respond (request, status: "success", message: "Recipe deleted successfully.")
 *
 * Description: Responds to the original request with a success message if recipe deletion is successful.
 */
export const RespondToDeleteRecipeSuccess: Sync = (
  { request },
) => ({
  when: actions(
    [Requesting.request, { path: "/recipes/delete" }, { request }],
    [Recipe.deleteRecipe, {}, {}], // Empty result for success
  ),
  then: actions([
    Requesting.respond,
    { request, status: "success", message: "Recipe deleted successfully." },
  ]),
});

/**
 * sync RespondToDeleteRecipeError
 *
 * **when** Requesting.request (path: "/recipes/delete") : (request)
 *         Recipe.deleteRecipe () : (error)
 * **then** Requesting.respond (request, error)
 *
 * Description: Responds to the original request with an error message if recipe deletion fails.
 */
export const RespondToDeleteRecipeError: Sync = (
  { request, error },
) => ({
  when: actions(
    [Requesting.request, { path: "/recipes/delete" }, { request }],
    [Recipe.deleteRecipe, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- 3. List User's Recipes Synchronization ---

/**
 * sync ListMyRecipesOnRequest
 *
 * **when** Requesting.request (path: "/recipes/my-recipes", session) : (request)
 * **where** in Sessioning: user for session is u
 *         in Recipe: _listRecipesByOwner (owner: u) returns recipeDoc
 * **then** Requesting.respond (request, recipes: [recipeDoc])
 *
 * Description: Handles a request to list all recipes owned by the current user.
 * It fetches the user from the session, queries for their recipes, and responds.
 */
export const ListMyRecipesOnRequest: Sync = (
  { request, session, user, recipeDoc, results },
) => ({
  when: actions([
    Requesting.request,
    { path: "/recipes/my-recipes", session },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0]; // Capture the original frame for response
    // 1. Resolve the user from the session
    frames = await frames.query(Sessioning._getUser, { session }, { user });

    // 2. Query for recipes owned by this user
    frames = await frames.query(
      Recipe._listRecipesByOwner,
      { owner: user },
      { recipe: recipeDoc }, // Bind each returned recipe document to 'recipeDoc'
    );

    // 3. Handle zero matches (no recipes found) gracefully
    if (frames.length === 0) {
      // If no recipes, respond with an empty array of results, but keep the original request binding.
      const response = { ...originalFrame, [results]: [] };
      return new Frames(response);
    }

    // 4. Collect all recipe documents into a single 'results' array
    return frames.collectAs([recipeDoc], results);
  },
  then: actions([Requesting.respond, { request, results }]),
});

/**
 * sync RespondToListMyRecipesError
 *
 * **when** Requesting.request (path: "/recipes/my-recipes") : (request)
 *         Sessioning._getUser () : (error) OR Recipe._listRecipesByOwner () : (error)
 * **then** Requesting.respond (request, error)
 *
 * Description: Catches errors during user session resolution or recipe listing and responds to the request.
 */
export const RespondToListMyRecipesError: Sync = (
  { request, error },
) => ({
  when: actions(
    [Requesting.request, { path: "/recipes/my-recipes" }, { request }],
    [Sessioning._getUser, {}, { error }], // Can be error from sessioning
    // Alternatively, you could have a separate sync for Recipe._listRecipesByOwner error
    // For simplicity, we'll assume a direct error from sessioning is the primary failure mode
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- 4. Get Recipe By ID Synchronization ---
/**
 * sync GetRecipeByIdOnRequest
 *
 * **when** Requesting.request (path: "/recipes/get", session?, recipeId) : (request)
 * **where** in Recipe: _getRecipeById (recipe: recipeId) returns r
 * **then** Requesting.respond (request, recipe: r)
 *
 * Description: Handles a request to retrieve a specific recipe by its ID.
 * Optionally allows a session, but doesn't require authentication for public recipes.
 */
export const GetRecipeByIdOnRequest: Sync = (
  { request, recipeId, recipeDoc },
) => ({
  when: actions([
    Requesting.request,
    { path: "/recipes/get", recipeId },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0];
    frames = await frames.query(Recipe._getRecipeById, { recipe: recipeId }, { recipe: recipeDoc });

    if (frames.length === 0) {
        // If recipe not found by _getRecipeById, it would return error, but if we query
        // directly and it returns nothing, we need to handle it.
        // However, _getRecipeById in RecipeConcept returns { error: string } if not found,
        // so this branch is only for unexpected empty frames.
        const response = { ...originalFrame, error: "Recipe not found." };
        return new Frames(response);
    }
    return frames; // _getRecipeById returns an array, but we expect only one for ID
  },
  then: actions([Requesting.respond, { request, recipe: recipeDoc }]),
});

/**
 * sync RespondToGetRecipeByIdError
 *
 * **when** Requesting.request (path: "/recipes/get") : (request)
 *         Recipe._getRecipeById () : (error)
 * **then** Requesting.respond (request, error)
 *
 * Description: Responds with an error if fetching a recipe by ID fails.
 */
export const RespondToGetRecipeByIdError: Sync = (
  { request, error },
) => ({
  when: actions(
    [Requesting.request, { path: "/recipes/get" }, { request }],
    [Recipe._getRecipeById, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});
```

**To use this:**

1. **Save the `RecipeConcept.ts`** code into `src/concepts/Recipe/RecipeConcept.ts`.
2. **Save the `recipes.sync.ts`** code into `src/syncs/recipes.sync.ts`.
3. **Ensure `SessioningConcept.ts` exists** (you'll need to create a simple one if you don't have it, e.g., mapping `SessionId` to `UserId`).

   * A minimal `SessioningConcept.ts` for testing might look like this:

   ```typescript
   // src/concepts/Sessioning/SessioningConcept.ts
   import { Collection, Db } from "npm:mongodb";
   import { ID } from "@utils/types.ts";

   const PREFIX = "Sessioning" + ".";

   type SessionId = ID;
   type User = ID;

   interface SessionDoc {
     _id: SessionId;
     user: User;
     created: Date;
   }

   export default class SessioningConcept {
     sessions: Collection<SessionDoc>;

     constructor(private readonly db: Db) {
       this.sessions = this.db.collection(PREFIX + "sessions");
     }

     // A simple method to simulate logging in and getting a session
     async login({ userId }: { userId: User }): Promise<{ session: SessionId }> {
       const sessionId = "session:" + Math.random().toString(36).substring(2, 15) as SessionId;
       await this.sessions.insertOne({ _id: sessionId, user: userId, created: new Date() });
       return { session: sessionId };
     }

     /**
      * _getUser(session: SessionId): (user: User) | (error: String)
      * Requires: session exists
      * Effects: returns the user associated with the session
      */
     async _getUser(
       { session }: { session: SessionId },
     ): Promise<User[] | { error: string }> {
       const sessionDoc = await this.sessions.findOne({ _id: session });
       if (sessionDoc) {
         return [sessionDoc.user];
       }
       return { error: "Invalid or expired session." };
     }
   }
   ```
4. **Run `deno run build`** to generate updated concept imports.
5. **Run `deno run start`** to start your application server.

Now you can send HTTP requests to your server:

**Example Request to Create a Recipe:**

* **Endpoint**: `/api/recipes/create` (or `/recipes/create` if you excluded the passthrough and are using `Requesting.request` path)
* **Method**: `POST`
* **Body**:
  ```json
  {
    "session": "your_valid_session_id_here",
    "title": "Delicious Apple Pie",
    "description": "A classic apple pie recipe.",
    "ingredients": [
      {"name": "Apples", "quantity": "6 medium"},
      {"name": "Sugar", "quantity": "1 cup"},
      {"name": "Flour", "quantity": "2 cups"},
      {"name": "Butter", "quantity": "1/2 cup"}
    ],
    "steps": [
      {"order": 1, "description": "Peel and slice apples."},
      {"order": 2, "description": "Mix with sugar and spices."},
      {"order": 3, "description": "Prepare pie crust."},
      {"order": 4, "description": "Bake at 375F for 45 minutes."}
    ]
  }
  ```
  (You'll first need to call `Sessioning.login` or similar to get a `session` ID for a `user` ID you define.)

This setup provides a robust, modular, and understandable way to manage recipe functionality in your application.
