# Synchronizations Implementation

This document summarizes the synchronizations implemented for the Nibble backend.

## Overview

All state-modifying actions are routed through the Requesting concept for proper synchronization and authorization. Read-only queries and authentication actions are passed through directly for performance.

## Route Configuration

### Included Routes (Passthrough - 15 routes)

These routes pass through directly to the concept actions:

#### User Concept

- `/api/User/registerUser` - Public action to create new user accounts
- `/api/User/login` - Public action for user authentication
- `/api/User/_getUserDetails` - Public query to get user profile information
- `/api/User/_getUserIDByUsername` - Public query to lookup user ID by username

#### Recipe Concept (Queries)

- `/api/Recipe/_getRecipeById` - Public query to view recipe details
- `/api/Recipe/_listRecipesByOwner` - Public query to browse recipes by owner
- `/api/Recipe/_searchRecipesByTag` - Public query to search recipes by tag
- `/api/Recipe/_getForkCount` - Public query to get fork statistics
- `/api/Recipe/_listForksOfRecipe` - Public query to list recipe forks

#### Annotation Concept (Queries)

- `/api/Annotation/_getAnnotationsForRecipe` - Public query to view recipe annotations
- `/api/Annotation/_getAnnotationById` - Public query to view specific annotation

#### Notebook Concept (Queries)

- `/api/Notebook/_getNotebookById` - Query to view notebook details
- `/api/Notebook/_getNotebooksByOwner` - Query to view user's owned notebooks
- `/api/Notebook/_getNotebooksWithMember` - Query to view notebooks where user is member
- `/api/Notebook/_getNotebooksContainingRecipe` - Query to find notebooks containing a recipe

### Excluded Routes (Through Requesting - 18 routes)

These routes go through the Requesting concept for synchronization:

#### User Concept (1 action)

- `/api/User/updateProfile`

#### Recipe Concept (7 actions)

- `/api/Recipe/createRecipe`
- `/api/Recipe/addTag`
- `/api/Recipe/removeTag`
- `/api/Recipe/deleteRecipe`
- `/api/Recipe/updateRecipeDetails`
- `/api/Recipe/draftRecipeWithAI`
- `/api/Recipe/applyDraft`

#### Annotation Concept (4 actions)

- `/api/Annotation/annotate`
- `/api/Annotation/editAnnotation`
- `/api/Annotation/resolveAnnotation`
- `/api/Annotation/deleteAnnotation`

#### Notebook Concept (6 actions)

- `/api/Notebook/createNotebook`
- `/api/Notebook/inviteMember`
- `/api/Notebook/removeMember`
- `/api/Notebook/shareRecipe`
- `/api/Notebook/unshareRecipe`
- `/api/Notebook/deleteNotebook`

## Synchronization Files

Synchronizations are organized by concept in separate files:

### `src/syncs/user.sync.ts`

- **UpdateProfileRequest** - Triggers User.updateProfile when request received
- **UpdateProfileResponse** - Sends response back when profile update completes

### `src/syncs/recipe.sync.ts`

- **CreateRecipeRequest/Response** - Create new recipe
- **AddTagRequest/Response** - Add tag to recipe
- **RemoveTagRequest/Response** - Remove tag from recipe
- **DeleteRecipeRequest/Response** - Delete recipe
- **UpdateRecipeDetailsRequest/Response** - Update recipe details
- **DraftRecipeWithAIRequest/Response** - Generate AI draft for recipe
- **ApplyDraftRequest/Response** - Apply AI draft to recipe

### `src/syncs/annotation.sync.ts`

- **AnnotateRequest/Response** - Create new annotation
- **EditAnnotationRequest/Response** - Edit existing annotation
- **ResolveAnnotationRequest/Response** - Mark annotation as resolved/unresolved
- **DeleteAnnotationRequest/Response** - Delete annotation

### `src/syncs/notebook.sync.ts`

- **CreateNotebookRequest/Response** - Create new notebook
- **InviteMemberRequest/Response** - Add member to notebook
- **RemoveMemberRequest/Response** - Remove member from notebook
- **ShareRecipeRequest/Response** - Share recipe in notebook
- **UnshareRecipeRequest/Response** - Remove recipe from notebook
- **DeleteNotebookRequest/Response** - Delete notebook

## How Synchronizations Work

Each excluded action has two synchronizations:

1. **Request Sync**: Listens for `Requesting.request` with the specific path and triggers the actual concept action

   ```typescript
   when: actions([
     Requesting.request,
     { path: "/Concept/action", ...params },
     { request },
   ]),
   then: actions([Concept.action, { ...params }])
   ```

2. **Response Sync**: Listens for both the request and the completed action, then triggers `Requesting.respond`
   ```typescript
   when: actions(
     [Requesting.request, { path: "/Concept/action" }, { request }],
     [Concept.action, {}, { ...outputs }],
   ),
   then: actions([Requesting.respond, { request, ...outputs }])
   ```

## Testing

When you run your frontend and interact with the backend, you should see:

- **Direct passthrough**: Query actions and auth actions execute immediately
- **Request traces**: State-modifying actions will show in the console as they go through the Requesting concept
- Action traces will appear showing the flow: `Requesting.request` → `Concept.action` → `Requesting.respond`

The server is configured with `Logging.TRACE` mode to show action execution traces in the console.

## Server Status

✅ Server is running on `http://localhost:8000`
✅ All routes properly verified (no warnings)
✅ 36 synchronizations registered (2 per excluded action)
✅ Logging enabled to trace incoming actions
