### concept Recipe \[User]

**purpose** enable users to capture, share, and preserve cooking instructions with their community.\
**principle** after creating a recipe with ingredients and steps, users can share it with others who can view, annotate, and fork it for their own modifications while the original remains unchanged.

**state**

*   id : UUID
*   owner : User
*   title : String
*   description : Optional\[String]
*   ingredients : List\[Ingredient]
*   steps : List\[Step]
*   tags : Set\[String]
*   forkedFrom : Optional\[RecipeId] (ID of the recipe this was forked from)
*   created : DateTime
*   updated : DateTime

**actions**

*   `createRecipe(owner, title, ingredients, steps, description?, forkedFrom?) → recipe`\
    requires owner exists; title ≠ ""; ingredients and steps well-formed; if forkedFrom is provided, that recipe must exist\
    effects adds new recipe with empty tag set, sets creation/update times; optionally tracks the parent recipe if forkedFrom is provided
*   `addTag(recipe, tag)` requires recipe exists effects tag ∈ recipe.tags
*   `removeTag(recipe, tag)` requires tag ∈ recipe.tags effects tag ∉ recipe.tags
*   `deleteRecipe(requester, recipe)` requires requester = recipe.owner effects removes recipe and triggers cascade deletion of related Annotations (via sync)
*   `updateRecipeDetails(owner, recipe, newTitle?, newDescription?, newIngredients?, newSteps?)` requires owner = recipe.owner effects updates specified fields and `updated` timestamp
*   `draftRecipeWithAI(author, recipe, goal) → (draftId, baseRecipe, requester, goal, ingredients, steps, notes, confidence?, created, expires) | error`\
    requires recipe exists; goal ≠ ""; GEMINI_API_KEY is set\
    effects calls Gemini AI with the recipe data and goal; returns draft data that can be applied to modify the recipe
*   `applyDraft(owner, recipe, draftDetails) → Empty | error`\
    requires owner = recipe.owner; draft details must be well-formed\
    effects updates the recipe's ingredients and steps with the draft content; adds notes to description; updates timestamp

**queries**

*   `_getRecipeById(recipe) → recipe: RecipeDoc | error`\
    requires recipe exists\
    effects returns the full Recipe document
*   `_listRecipesByOwner(owner) → recipe: RecipeDoc[] | error`\
    requires owner exists\
    effects returns all recipes owned by the specified user
*   `_searchRecipesByTag(tag) → recipe: RecipeDoc[] | error`\
    requires tag is non-empty\
    effects returns all recipes containing the specified tag
*   `_getForkCount(recipe) → count | error`\
    requires recipe exists\
    effects returns the count of recipes that have been forked from the specified recipe
*   `_listForksOfRecipe(recipe) → recipe: RecipeDoc[] | error`\
    requires recipe exists\
    effects returns all recipes that have been forked from the specified recipe
