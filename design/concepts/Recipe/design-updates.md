# prompt: list only contrasting major design changes from the concept spec to its implementation. this should brief and bullet-pointed. if there are no changes, state it.         


[@Recipe](Recipe.md)

[@implementation](implementation.md)

[@testing](testing.md)

[@README](../../../README.md)

[@rubric](../../background/rubric.md)

[@concept-state](../../background/detailed/concept-state.md)

[@concept-design-brief](../../background/concept-design-brief.md)

[@concept-design-overview](../../background/concept-design-overview.md)


# response:

Here are the contrasting major design changes from the `Recipe` concept specification to its implementation:

*   **Embedding of Ingredient and Step Entities:**
    *   **Concept Spec:** `Ingredient` and `Step` are defined as distinct "concepts" with their own `purpose` and `principle` (though their actions are noted as "generally managed within Recipe/Version actions"). The `Recipe` state references them as `List[Ingredient]` and `List[Step]`. This implies they *could* be independent, managed entities.
    *   **Implementation:** `Ingredient` and `Step` are implemented as *embedded interfaces* directly within the `RecipeDoc` structure, and thus stored within the `recipes` MongoDB collection. They are not managed as separate top-level collections or by dedicated `IngredientConcept`/`StepConcept` classes. This design choice prioritizes data locality within the `Recipe` document rather than separate entity management.

*   **Explicit Query Definitions:**
    *   **Concept Spec:** The `Recipe` concept specification does not explicitly define any query actions.
    *   **Implementation:** Several explicit query methods (`_getRecipeById`, `_listRecipesByOwner`, `_searchRecipesByTag`, `_getForkCount`, `_listForksOfRecipe`) are added to the `RecipeConcept` class to allow for practical data retrieval.

*   **Recipe Forking and Lineage Tracking:**
    *   **Concept Spec:** Originally, recipe versioning and modification tracking were planned to be handled by a separate `Version` concept (see [Version/design-updates.md](../Version/design-updates.md)).
    *   **Implementation:** The `Version` concept was not implemented. Instead, recipe lineage is tracked directly within the `Recipe` concept via the `forkedFrom` field, which stores the ID of the parent recipe when a recipe is forked. This provides a simpler mechanism for tracking recipe derivations without the complexity of a full versioning system.

*   **AI-Assisted Recipe Modification:**
    *   **Concept Spec:** AI-assisted recipe modification was originally planned to be handled by the `Version` and `VersionDraft` concepts, with complex approval workflows.
    *   **Implementation:** AI functionality is integrated directly into the `Recipe` concept through two new actions: `draftRecipeWithAI(author, recipe, goal)` which generates AI suggestions using Gemini API, and `applyDraft(owner, recipe, draftDetails)` which applies approved modifications directly to the recipe. This eliminates the need for separate transient draft storage and provides a more streamlined user experience.