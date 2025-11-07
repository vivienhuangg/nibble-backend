# Design Updates: VersionDraft Concept

## Status: **CONCEPT REMOVED - NOT IMPLEMENTED**

### Decision Date
November 5, 2025

### Rationale
The `VersionDraft` concept was originally designed as a transient data structure to represent temporary, AI-generated recipe modification suggestions. However, this concept was removed along with the `Version` concept for the following reasons:

- **Dependent on Version Concept:** `VersionDraft` was designed to work in tandem with the `Version` concept; with Version removed, VersionDraft had no clear purpose
- **Simpler Alternative:** AI-generated draft functionality was integrated directly into the Recipe concept via the `draftRecipeWithAI` action, which returns draft data without requiring a separate transient concept
- **Reduced State Management:** Eliminating the transient draft storage and expiration management reduced system complexity
- **Direct Application Model:** The new approach allows users to review AI suggestions and apply them directly to recipes without intermediate draft approval workflows

### Impact
- AI recipe modification suggestions are now returned directly as structured data from `Recipe.draftRecipeWithAI`
- No transient draft storage or cleanup mechanisms needed
- Simpler user workflow: generate draft → review → apply directly to recipe

### Related Concepts
- **Recipe:** Now includes AI drafting capabilities that return draft data directly without persistent draft storage - see [Recipe/design-updates.md](../Recipe/design-updates.md)
- **Version:** Also removed - see [Version/design-updates.md](../Version/design-updates.md)
- **Step:** Updated to reflect removal of Version/VersionDraft concepts - see [Step/design-updates.md](../Step/design-updates.md)
- **Ingredient:** Updated to reflect removal of Version/VersionDraft concepts - see [Ingredient/design-updates.md](../Ingredient/design-updates.md)

### Reference
- Original specification: [VersionDraft.md](VersionDraft.md) (preserved for historical reference)
