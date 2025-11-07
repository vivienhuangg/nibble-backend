---
timestamp: 'Wed Nov 05 2025 16:20:37 GMT-0500 (Eastern Standard Time)'
parent: '[[../20251105_162037.b1f13a87.md]]'
content_id: 4fc834edf7454b5d416fb7da59f9cdb61b7f45a0631eea6721ec7af739fdf61f
---

# response:

Based on the concept specification provided, the `Step` concept is defined as an "embedded data structure within Recipe," and its "lifecycle is managed by Recipe actions." This means that `Step` itself does not have its own independent actions or queries.

Synchronization files are used to define rules for how **concept actions** interact with each other or with external requests. Since the `Step` concept doesn't have any standalone actions (like `createStep`, `updateStep`, `deleteStep`), it cannot appear in the `when` or `then` clauses of a synchronization. All modifications to `Step` instances would occur indirectly via actions on the `Recipe` concept (e.g., `updateRecipeDetails` or `applyDraft`).

Therefore, it's not possible to create a `.sync.ts` file *for* the `Step` concept in isolation. Any synchronization involving steps would necessarily be triggered by or act upon the `Recipe` concept's actions.

However, I can provide an example of a synchronization that indirectly relates to steps by using the `Recipe` concept's actions that modify them.

***

**Explanation:**

If you wanted to, for example, log when a recipe's steps are updated (which would happen via `Recipe.updateRecipeDetails` or `Recipe.applyDraft`), the synchronization would target the `Recipe` concept, not `Step`.

Here's an illustrative example of a synchronization related to the `Recipe` concept, specifically for when `applyDraft` (which affects steps) is called:

```typescript
// file: src/syncs/recipe_steps.sync.ts

import { actions, Sync } from "@engine";
import { Requesting, Recipe } from "@concepts"; // Assuming RecipeConcept is available at @concepts

// This sync handles the application of an AI-generated draft,
// which updates the recipe's ingredients and steps.
export const ApplyDraftToRecipe: Sync = (
  { owner, recipeId, draftDetails, request },
) => ({
  when: actions(
    [
      Requesting.request,
      {
        path: "/Recipe/applyDraft",
        owner,
        recipe: recipeId,
        draftDetails,
      },
      { request },
    ],
  ),
  where: async (frames) => {
    // You might add additional authorization checks here if needed,
    // e.g., verifying `owner` matches the recipe's actual owner.
    // For this example, we assume Requesting.request has already validated `owner` against session.
    // However, the `applyDraft` action itself has an `owner = recipe.owner` requirement.
    return frames;
  },
  then: actions(
    [Recipe.applyDraft, { owner, recipe: recipeId, draftDetails }],
    // Assuming a successful application returns an empty object,
    // we would then respond to the original request.
    [Requesting.respond, { request, status: "success" }],
  ),
});

// This sync handles the error case for applying a draft
export const ApplyDraftToRecipeError: Sync = (
  { owner, recipeId, draftDetails, request, error },
) => ({
  when: actions(
    [
      Requesting.request,
      {
        path: "/Recipe/applyDraft",
        owner,
        recipe: recipeId,
        draftDetails,
      },
      { request },
    ],
    // Match the error return from Recipe.applyDraft
    [Recipe.applyDraft, {}, { error }],
  ),
  then: actions(
    [Requesting.respond, { request, error }],
  ),
});

// Example: A sync to notify a user when their recipe's details (including steps) are updated.
// This would need a separate Notification concept.
// For demonstration, let's assume `updateRecipeDetails` also implicitly modifies steps.
/*
import { Notification } from "@concepts"; // Assuming a Notification concept exists

export const NotifyOnRecipeUpdate: Sync = (
  { requester, recipe, newTitle, newDescription, newIngredients, newSteps, updatedRecipe },
) => ({
  when: actions(
    [
      Recipe.updateRecipeDetails,
      {
        owner: requester,
        recipe,
        newTitle,
        newDescription,
        newIngredients,
        newSteps,
      },
      // Assuming updateRecipeDetails returns the updated recipe, or a confirmation.
      // For simplicity, let's say it returns nothing explicit on success here.
      {},
    ],
  ),
  where: async (frames) => {
    // Optionally fetch more details about the recipe or user for the notification
    // frames = await frames.query(Recipe._getRecipeById, { recipe }, { updatedRecipe });
    // frames = await frames.query(User._getNotificationChannel, { user: requester }, { channel });
    return frames;
  },
  then: actions(
    // [Notification.notify, { to: requester, message: `Your recipe "${updatedRecipe.title}" was updated!` }],
    // Placeholder as Notification concept is not defined here.
    // console.log here would simulate the notification
    [
      () => console.log(
        `[Sync] User ${requester} was implicitly notified that recipe ${recipe} was updated (steps modified).`,
      ),
      {},
    ],
  ),
});
*/
```

**Key Takeaway:** Because `Step` is not a top-level concept with its own actions, it will not appear in synchronization `when` or `then` clauses directly. Synchronizations will instead interact with the `Recipe` concept's actions (`createRecipe`, `updateRecipeDetails`, `applyDraft`, `deleteRecipe`) which *manage* the embedded `Step` data.
