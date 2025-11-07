# Concept Specification Review

This document reviews all concept specifications against the guidelines from `concept-design-overview.md` and `concept-specifications.md`.

## Guidelines Summary

### Required Structure

1. **concept**: name [type parameters]
2. **purpose**: need-focused, specific, evaluable
3. **principle**: goal-focused, differentiating, archetypal scenario
4. **state**: clear data model
5. **actions**: with requires/effects clauses
6. **queries**: (optional but recommended)

### Key Principles

- **Purpose** should focus on user needs, not implementation details
- **Principle** should be a scenario showing how purpose is fulfilled (if X, then Y)
- **Type parameters** for external/polymorphic types
- **Completeness**: concepts should be self-contained

---

## Recipe [User, Ingredient, Step, Tag]

### ✓ Strengths

- Has type parameters
- State is well-defined
- Actions have requires/effects clauses
- Queries are included

### ✗ Issues

1. **Purpose**: "represent a canonical recipe owned by a user, with its core ingredients, steps, and descriptive metadata"

   - **Problem**: Implementation-focused rather than need-focused
   - **Should be**: Focus on what user need it fulfills (e.g., "capture and share cooking instructions with their community")

2. **Principle**: "a recipe is authored once and remains the stable source for annotations and versions"

   - **Problem**: Not a scenario; it's a design statement
   - **Should be**: Archetypal scenario like "after creating a recipe with ingredients and steps, others can view it, fork it for modifications, and annotate it without changing the original"
   - **Additional issue**: References "versions" which was removed

3. **Type Parameter**: Includes `Tag` but tags are just strings in the state (not external objects)

4. **Action reference**: `deleteRecipe` mentions "triggers cascade deletion of related Versions" but Version concept removed

---

## User

### ✓ Strengths

- State is well-defined
- Actions have requires/effects clauses
- Queries are included

### ✗ Issues

1. **Type Parameters**: Missing - should be `concept User` (no parameters needed as it's a foundational concept)

2. **Purpose**: "represent an individual user within the system, enabling personalization, ownership, and access control"

   - **Problem**: Implementation/technical focus, not user-need focused
   - **Should be**: "enable secure identification and authentication so users can own and control their content"

3. **Principle**: "users are the primary actors and owners of content"
   - **Problem**: Not a scenario, just a statement
   - **Should be**: "after registering with username and password, a user can login to access and manage their content across sessions"

---

## Notebook [User, Recipe]

### ✓ Strengths

- Has type parameters
- Purpose is reasonably need-focused
- State is well-defined
- Actions have requires/effects clauses
- Queries are included

### ✗ Issues

1. **Principle**: "membership defines access; shared recipes remain editable only by owners but viewable by all members"
   - **Problem**: Design statement, not a scenario
   - **Should be**: "after creating a notebook and inviting members, they can view all recipes shared to the notebook, while only the recipe owner can edit the recipe itself"

---

## Annotation [User, Recipe]

### ✓ Strengths

- Has type parameters
- Purpose is need-focused
- State is well-defined
- Actions have requires/effects clauses
- Queries are included

### ✗ Issues

1. **Principle**: "annotations enrich understanding while preserving recipe immutability"
   - **Problem**: Design statement, not a scenario
   - **Should be**: "after annotating a specific step in a recipe, others viewing the recipe can see the annotation without the original recipe being modified"

---

## Step

### ✓ Strengths

- State is clear and minimal

### ✗ Issues

1. **Type Parameters**: Missing - Step doesn't represent external objects but might benefit from clarification

2. **Purpose**: "represent a single instruction in a recipe"

   - **Problem**: Very implementation-focused
   - **Should be**: More action-oriented (though Step is primarily a data structure)

3. **Principle**: "steps guide the cooking process sequentially"

   - **Problem**: Not a scenario
   - **Should be**: "after defining steps for a recipe, they guide users through the cooking process in order"

4. **Actions**: States "(Generally managed within Recipe/Version actions)"

   - **Problem**: Violates completeness principle; references removed Version concept
   - **Should be**: Either define actual actions or clarify this is an embedded data structure

5. **Concept Nature**: This appears to be a data structure embedded in Recipe, not a full behavioral concept. Consider documenting this explicitly.

---

## Ingredient

### ✓ Strengths

- State is clear and minimal

### ✗ Issues

1. **Type Parameters**: Missing

2. **Purpose**: "represent a specific item needed for a recipe"

   - **Problem**: Implementation-focused
   - **Should be**: More need-focused (though Ingredient is primarily a data structure)

3. **Principle**: "ingredients are foundational building blocks of recipes"

   - **Problem**: Not a scenario
   - **Should be**: "after specifying ingredients with quantities, users have a clear shopping list for making the recipe"

4. **Actions**: States "(Generally managed within Recipe/Version actions)"

   - **Problem**: Violates completeness principle; references removed Version concept
   - **Should be**: Either define actual actions or clarify this is an embedded data structure

5. **Concept Nature**: This appears to be a data structure embedded in Recipe, not a full behavioral concept. Consider documenting this explicitly.

---

## Summary of Required Changes

### Critical Issues (Must Fix)

1. **All concepts**: Update principles to be archetypal scenarios (if X, then Y format)
2. **Recipe, Step, Ingredient**: Remove references to removed Version concept
3. **User**: Add or remove type parameters appropriately
4. **Step, Ingredient**: Clarify if these are full concepts or embedded data structures

### Important Issues (Should Fix)

1. **Recipe, User**: Revise purposes to be more need-focused
2. **Recipe**: Reconsider Tag as a type parameter (it's just a string)
3. **Step, Ingredient**: If these remain as concepts, define actual actions for completeness

### Documentation Consideration

Consider adding a note in concept specifications explaining which "concepts" are actually embedded data structures (Ingredient, Step) vs. full behavioral concepts with persistent state (Recipe, User, Notebook, Annotation). The guidelines suggest concepts should be behaviorally complete, but these two are intentionally incomplete as they're managed by Recipe.

---

## Recommended Action

Update all concept specifications following the format:

- **Purpose**: Focus on user needs and value
- **Principle**: Write as "after [action], then [outcome that fulfills purpose]"
- Ensure type parameters are appropriate
- For Step/Ingredient: Either make them full concepts or document them as embedded data structures
