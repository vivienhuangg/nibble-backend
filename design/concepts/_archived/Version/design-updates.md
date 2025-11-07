# Design Updates: Version Concept

## Status: **CONCEPT REMOVED - NOT IMPLEMENTED**

### Decision Date

November 5, 2025

### Rationale

The `Version` concept was originally designed to capture concrete modifications to recipes as immutable snapshots with optional AI assistance. However, after implementation planning and evaluation, the team decided not to implement this concept for the following reasons:

- **Complexity vs. Value:** The versioning system added significant architectural complexity that was not justified by the current product scope
- **Alternative Approach:** Recipe forking (`forkedFrom` field in Recipe) provides a simpler mechanism for tracking recipe derivations
- **AI Integration:** AI-assisted recipe modification functionality was integrated directly into the Recipe concept via `draftRecipeWithAI` and `applyDraft` actions, eliminating the need for a separate Version concept
- **Scope Reduction:** Focus shifted to core recipe management, annotation, and collaboration features

### Impact

- Recipe forking tracks recipe lineage through the `forkedFrom` field
- AI-assisted modifications apply directly to recipes rather than creating versioned snapshots
- Users can still track changes through recipe update timestamps and the `forkedFrom` relationship

### Related Concepts

- **Recipe:** Now includes AI drafting capabilities (`draftRecipeWithAI`, `applyDraft`) and recipe forking via `forkedFrom` field - see [Recipe/design-updates.md](../Recipe/design-updates.md)
- **VersionDraft:** Also removed - see [VersionDraft/design-updates.md](../VersionDraft/design-updates.md)
- **Step:** Updated to reflect removal of Version concept - see [Step/design-updates.md](../Step/design-updates.md)
- **Ingredient:** Updated to reflect removal of Version concept - see [Ingredient/design-updates.md](../Ingredient/design-updates.md)
- **Annotation:** Annotations now only apply to base Recipe objects - see [Annotation/design-updates.md](../Annotation/design-updates.md)

### Reference

- Original specification: [Version.md](Version.md) (preserved for historical reference)
