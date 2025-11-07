---
timestamp: 'Wed Nov 05 2025 16:04:33 GMT-0500 (Eastern Standard Time)'
parent: '[[../20251105_160433.29b46bdd.md]]'
content_id: de796c3de63acb188e49a552fdc59090f6deb2af14d6bd065a60b4d593ca175f
---

# response:

Okay, let's implement a synchronization file for your `Recipe` concept. This will demonstrate how requests from users (via the `Requesting` concept) trigger actions in your `Recipe` concept, and how responses are sent back.

I'll create syncs for:

1. **Creating a recipe**: Handling the request, authentication, and calling `Recipe.createRecipe`.
2. **Responding to recipe creation**: Sending back the new recipe's ID on success, or an error.
3. **Deleting a recipe**: Handling the request, authentication/authorization (checking ownership), and calling `Recipe.deleteRecipe`.
4. **Responding to recipe deletion**: Sending back a success message or an error.
5. **Listing a user's recipes**: Handling the request, authentication, querying `Recipe._listRecipesByOwner`, and responding with the list.

**Assumptions:**

* You have a `Sessioning` concept (as implied by the "User" type parameter and common sync patterns) with a query like `_getUser(session: SessionId): (user: User)`.
* `ID` types and `Empty` are available from `@utils/types.ts`.
* The `freshID()` function from `@utils/database.ts` is used for generating new IDs within the concept implementation itself.

First, ensure your `Recipe` concept is correctly defined in a file like `src/concepts/Recipe/RecipeConcept.ts`.

```typescript
// src/concepts/Recipe/RecipeConcept.ts
import { Collection, Db } from "npm:mongodb";
import { Empty, ID } from "@utils/types.ts";
import { freshID } from "@utils/database.ts";

const PREFIX = "Recipe" + ".";

// Generic types for this concept
type User = ID;
type RecipeId = ID; // Using ID for Recipe ID

// Define Ingredient and Step types as they would appear in the database
interface Ingredient {
  name: string;
  quantity: string; // e.g., "2 cups", "1 tbsp"
}

interface Step {
  description: string;
  order: number;
}

// Full Recipe document structure
export interface RecipeDoc {
  _id: RecipeId;
  owner: User;
  title: string;
  description?: string;
  ingredients: Ingredient[];
  steps: Step[];
  tags: string[];
  forkedFrom?: RecipeId;
  created: Date;
  updated: Date;
}

export default class RecipeConcept {
  recipes: Collection<RecipeDoc>;

  constructor(private readonly db: Db) {
    this.recipes = this.db.collection(PREFIX + "recipes");
  }

  /**
   * createRecipe(owner: User, title: String, ingredients: List<Ingredient>, steps: List<Step>, description?: String, forkedFrom?: RecipeId): (recipe: RecipeId) | (error: String)
   *
   * **requires** owner exists; title ≠ ""; ingredients and steps well-formed; if forkedFrom is provided, that recipe must exist
   * **effects** adds new recipe with empty tag set, sets creation/update times; optionally tracks the parent recipe if forkedFrom is provided; returns the new recipe's ID
   */
  async createRecipe(
    {
      owner,
      title,
      ingredients,
      steps,
      description,
      forkedFrom,
    }: {
      owner: User;
      title: string;
      ingredients: Ingredient[];
      steps: Step[];
      description?: string;
      forkedFrom?: RecipeId;
    },
  ): Promise<{ recipe: RecipeId } | { error: string }> {
    // Basic validation (more comprehensive checks would be here)
    if (!owner || !title || title.trim() === "" || !ingredients || !steps) {
      return { error: "Missing required fields: owner, title, ingredients, or steps." };
    }
    if (ingredients.length === 0 || steps.length === 0) {
        return { error: "Recipe must have at least one ingredient and one step." };
    }

    // Check if forkedFrom exists if provided (simplified, would query DB in real impl)
    if (forkedFrom) {
        const parentRecipe = await this.recipes.findOne({ _id: forkedFrom });
        if (!parentRecipe) {
            return { error: "Forked from recipe does not exist." };
        }
    }

    const newRecipeId = freshID() as RecipeId;
    const now = new Date();
    const newRecipe: RecipeDoc = {
      _id: newRecipeId,
      owner,
      title,
      description,
      ingredients,
      steps,
      tags: [], // Start with empty tags
      forkedFrom,
      created: now,
      updated: now,
    };

    try {
      await this.recipes.insertOne(newRecipe);
      return { recipe: newRecipeId };
    } catch (e) {
      console.error("Error creating recipe:", e);
      return { error: "Failed to create recipe due to database error." };
    }
  }

  /**
   * addTag(recipe: RecipeId, tag: String): Empty | (error: String)
   *
   * **requires** recipe exists
   * **effects** tag ∈ recipe.tags
   */
  async addTag({ recipe, tag }: { recipe: RecipeId; tag: string }): Promise<Empty | { error: string }> {
    if (!recipe || !tag || tag.trim() === "") {
        return { error: "Recipe ID and tag cannot be empty." };
    }
    try {
        const result = await this.recipes.updateOne(
            { _id: recipe, tags: { $ne: tag } }, // Only add if tag not already present
            { $addToSet: { tags: tag }, $set: { updated: new Date() } }
        );
        if (result.matchedCount === 0 && result.modifiedCount === 0) {
            const exists = await this.recipes.findOne({ _id: recipe });
            if (!exists) return { error: "Recipe not found." };
            return {}; // Tag already exists, no modification
        }
        return {};
    } catch (e) {
        console.error("Error adding tag:", e);
        return { error: "Failed to add tag due to database error." };
    }
  }

  /**
   * removeTag(recipe: RecipeId, tag: String): Empty | (error: String)
   *
   * **requires** tag ∈ recipe.tags
   * **effects** tag ∉ recipe.tags
   */
  async removeTag({ recipe, tag }: { recipe: RecipeId; tag: string }): Promise<Empty | { error: string }> {
    if (!recipe || !tag || tag.trim() === "") {
        return { error: "Recipe ID and tag cannot be empty." };
    }
    try {
        const result = await this.recipes.updateOne(
            { _id: recipe, tags: tag }, // Only remove if tag is present
            { $pull: { tags: tag }, $set: { updated: new Date() } }
        );
        if (result.matchedCount === 0) {
            const exists = await this.recipes.findOne({ _id: recipe });
            if (!exists) return { error: "Recipe not found." };
            // Tag not found in recipe, but recipe exists, no modification needed.
            return {};
        }
        return {};
    } catch (e) {
        console.error("Error removing tag:", e);
        return { error: "Failed to remove tag due to database error." };
    }
  }


  /**
   * deleteRecipe(requester: User, recipe: RecipeId): Empty | (error: String)
   *
   * **requires** requester = recipe.owner
   * **effects** removes recipe and triggers cascade deletion of related Annotations (via sync)
   */
  async deleteRecipe(
    { requester, recipe }: { requester: User; recipe: RecipeId },
  ): Promise<Empty | { error: string }> {
    if (!requester || !recipe) {
      return { error: "Missing required fields: requester or recipe." };
    }

    const targetRecipe = await this.recipes.findOne({ _id: recipe });
    if (!targetRecipe) {
      return { error: "Recipe not found." };
    }
    if (targetRecipe.owner !== requester) {
      return { error: "Unauthorized: Only the owner can delete this recipe." };
    }

    try {
      await this.recipes.deleteOne({ _id: recipe });
      return {}; // Empty dictionary for success
    } catch (e) {
      console.error("Error deleting recipe:", e);
      return { error: "Failed to delete recipe due to database error." };
    }
  }

  /**
   * updateRecipeDetails(owner: User, recipe: RecipeId, newTitle?: String, newDescription?: String, newIngredients?: List<Ingredient>, newSteps?: List<Step>): Empty | (error: String)
   *
   * **requires** owner = recipe.owner
   * **effects** updates specified fields and `updated` timestamp
   */
  async updateRecipeDetails(
    { owner, recipe, newTitle, newDescription, newIngredients, newSteps }: {
      owner: User;
      recipe: RecipeId;
      newTitle?: string;
      newDescription?: string;
      newIngredients?: Ingredient[];
      newSteps?: Step[];
    },
  ): Promise<Empty | { error: string }> {
    if (!owner || !recipe) {
      return { error: "Missing required fields: owner or recipe." };
    }

    const targetRecipe = await this.recipes.findOne({ _id: recipe });
    if (!targetRecipe) {
      return { error: "Recipe not found." };
    }
    if (targetRecipe.owner !== owner) {
      return { error: "Unauthorized: Only the owner can update this recipe." };
    }

    const updateFields: Partial<RecipeDoc> = { updated: new Date() };
    if (newTitle !== undefined) updateFields.title = newTitle;
    if (newDescription !== undefined) updateFields.description = newDescription;
    if (newIngredients !== undefined) updateFields.ingredients = newIngredients;
    if (newSteps !== undefined) updateFields.steps = newSteps;

    if (Object.keys(updateFields).length === 1 && updateFields.updated) {
        return { error: "No fields provided to update." };
    }

    try {
      await this.recipes.updateOne({ _id: recipe }, { $set: updateFields });
      return {};
    } catch (e) {
      console.error("Error updating recipe details:", e);
      return { error: "Failed to update recipe details due to database error." };
    }
  }

  /**
   * _getRecipeById(recipe: RecipeId): (recipe: RecipeDoc) | (error: String)
   *
   * **requires** recipe exists
   * **effects** returns the full Recipe document
   */
  async _getRecipeById(
    { recipe }: { recipe: RecipeId },
  ): Promise<RecipeDoc[] | { error: string }> {
    if (!recipe) {
      return { error: "Recipe ID cannot be empty." };
    }
    const result = await this.recipes.findOne({ _id: recipe });
    if (!result) {
      return { error: "Recipe not found." };
    }
    return [result]; // Queries return an array
  }

  /**
   * _listRecipesByOwner(owner: User): (recipe: RecipeDoc)[] | (error: String)
   *
   * **requires** owner exists
   * **effects** returns all recipes owned by the specified user
   */
  async _listRecipesByOwner(
    { owner }: { owner: User },
  ): Promise<RecipeDoc[] | { error: string }> {
    if (!owner) {
      return { error: "Owner ID cannot be empty." };
    }
    try {
      const results = await this.recipes.find({ owner }).toArray();
      return results;
    } catch (e) {
      console.error("Error listing recipes by owner:", e);
      return { error: "Failed to list recipes due to database error." };
    }
  }

  /**
   * _searchRecipesByTag(tag: String): (recipe: RecipeDoc)[] | (error: String)
   *
   * **requires** tag is non-empty
   * **effects** returns all recipes containing the specified tag
   */
  async _searchRecipesByTag(
    { tag }: { tag: string },
  ): Promise<RecipeDoc[] | { error: string }> {
    if (!tag || tag.trim() === "") {
        return { error: "Tag cannot be empty." };
    }
    try {
        const results = await this.recipes.find({ tags: tag }).toArray();
        return results;
    } catch (e) {
        console.error("Error searching recipes by tag:", e);
        return { error: "Failed to search recipes by tag due to database error." };
    }
  }

  // TODO: Implement draftRecipeWithAI and applyDraft if AI integration is desired.
  // TODO: Implement _getForkCount, _listForksOfRecipe
}
```

Now, let's create the synchronization file:
