# Nibble Backend - Design Documentation

## Project Overview

Nibble is a collaborative recipe management platform that allows users to create, share, annotate, and modify recipes. The backend implements a concept-based architecture with six core concepts working together to provide rich recipe management functionality.

---

## Major Design Changes Summary

### 1. Removal of Version and VersionDraft Concepts

**What Changed:**

- Completely removed the `Version` and `VersionDraft` concepts from the application
- Deleted approximately 2,170 lines of code across implementation and test files

**Original Design:**

- `Version` concept: Created immutable snapshots of recipe adaptations with AI-assisted versioning
- `VersionDraft` concept: Managed transient AI-generated recipe suggestions before user approval
- These concepts included sophisticated features like:
  - `promptHistory` tracking AI interaction lineage
  - AI-generated recipe modifications via `draftVersionWithAI()`
  - Approval/rejection workflow with `approveDraft()` and `rejectDraft()`
  - Automatic expiration of drafts after 24 hours

**Why Changed:**
The Version/VersionDraft concepts added significant complexity for a feature that was not essential to the core MVP. For frontend integration, the simpler fork-based recipe modification workflow proved more practical and user-friendly.

---

### 2. Integration of AI Features Directly into Recipe Concept

**What Changed:**

- Moved AI recipe modification capabilities directly into `RecipeConcept`
- Added two new actions to `RecipeConcept`:
  - `draftRecipeWithAI()`: Generates AI-suggested recipe modifications
  - `applyDraft()`: Applies approved AI modifications to the recipe

**Implementation Details:**

The `draftRecipeWithAI()` action:

- Takes a recipe and a user goal (e.g., "make this vegan", "reduce sugar by half")
- Calls the Gemini AI API with structured prompting
- Returns a temporary draft with suggested ingredients, steps, notes, and confidence score
- Draft expires after 24 hours (ephemeral state)

The `applyDraft()` action:

- Validates that the requester is the recipe owner
- Applies the AI-suggested ingredients and steps to the recipe
- Appends AI modification notes to the recipe description
- Updates the recipe's timestamp

**Architectural Simplification:**
Instead of complex concept synchronization between Recipe, Version, and VersionDraft concepts, AI features are now self-contained within Recipe with a simpler, more direct workflow.

---

### 3. Simplified Recipe Modification Model

**What Changed:**

- Pivoted from an immutable versioning model to a mutable recipe model with forking
- Recipe modifications now update recipes in-place rather than creating new versions
- Added `forkedFrom` field to track recipe genealogy

**New Workflow:**

1. User finds a recipe they want to modify
2. User can either:
   - Fork the recipe (creating a new recipe with `forkedFrom` link)
   - Request AI assistance with `draftRecipeWithAI()`
3. If using AI, user reviews the draft and can apply it with `applyDraft()`
4. Original recipe can be modified directly by its owner

**Benefits:**

- More intuitive for users (similar to GitHub forks)
- Simpler backend architecture
- Still maintains recipe lineage through `forkedFrom` tracking
- Reduces database complexity (no version history collections)

---

## Current Architecture

### Core Concepts

**1. User Concept**

- Purpose: Represent individual users with authentication and profiles
- Key Features:
  - User registration and login
  - Profile management (name, username, preferences)
  - User lookup by username or ID

**2. Recipe Concept**

- Purpose: Represent canonical recipes with ingredients, steps, and metadata
- Key Features:
  - Recipe creation and ownership
  - Tag-based categorization and search
  - Recipe forking with genealogy tracking
  - AI-assisted recipe modification (new)
  - Direct recipe updates by owner

**3. Annotation Concept**

- Purpose: Capture contextual notes on specific ingredients or steps
- Key Features:
  - Target-specific annotations (ingredient or step)
  - Author-based editing and deletion
  - Resolution status tracking
  - Recipe-based annotation queries

**4. Notebook Concept**

- Purpose: Organize shared collections of recipes
- Key Features:
  - Collaborative notebook ownership and membership
  - Recipe sharing into notebooks
  - Member invitation and removal
  - Multi-notebook recipe organization

**5. Step & Ingredient (Value Objects)**

- Purpose: Represent recipe components as embedded data structures
- Implementation: TypeScript interfaces embedded within Recipe documents
- Not exposed as separate API endpoints

---

## Design Principles Applied

### 1. Concept Self-Containment

Each concept is implemented as an independent module with its own:

- State (MongoDB collection)
- Actions (public methods)
- Queries (prefixed with `_`)
- Type definitions (even if duplicated across concepts)

This ensures modularity and independent deployability.

### 2. Embedded vs. Referenced Entities

- **Embedded**: `Ingredient` and `Step` are stored within Recipe documents for data locality
- **Referenced**: Recipes, Users, Notebooks reference each other by ID

### 3. AI Integration Philosophy

- AI features are capabilities, not core concepts
- Integrated directly into the concept that uses them (Recipe)
- Ephemeral AI-generated data (drafts) handled as return values, not persistent state
- User maintains control with explicit approval step

---

## API Structure

All endpoints follow the pattern: `POST /api/{Concept}/{action}`

**Example endpoints:**

- User: `/api/User/registerUser`, `/api/User/login`
- Recipe: `/api/Recipe/createRecipe`, `/api/Recipe/draftRecipeWithAI`, `/api/Recipe/applyDraft`
- Annotation: `/api/Annotation/annotate`, `/api/Annotation/resolveAnnotation`
- Notebook: `/api/Notebook/createNotebook`, `/api/Notebook/shareRecipe`

Query endpoints (read-only) are prefixed with `_`:

- `/api/Recipe/_getRecipeById`
- `/api/Recipe/_listRecipesByOwner`
- `/api/Notebook/_getNotebooksContainingRecipe`

Full API specification available in [api-spec.md](api-spec.md)

---

## Implementation Notes

### Technology Stack

- **Runtime**: Deno
- **Database**: MongoDB Atlas
- **AI Integration**: Google Gemini API
- **Testing**: Deno test framework

### Key Implementation Decisions

**1. Recipe Genealogy**

- Recipes can track their origin via `forkedFrom: RecipeId`
- Enables fork count queries and fork listing
- Maintains recipe evolution history without full versioning

**2. AI Draft Lifecycle**

- AI drafts are returned as structured data, not persisted
- 24-hour expiration communicated to frontend
- Frontend responsible for temporary storage if needed
- Simplifies backend state management

**3. Authorization Patterns**

- Recipe operations: owner-based authorization
- Annotation operations: author can edit/delete, anyone with recipe access can resolve
- Notebook operations: owner manages members, members can share recipes

---

## Testing Strategy

Each concept includes comprehensive test coverage:

- ✅ User: 11 test cases
- ✅ Recipe: 24 test cases (including AI draft tests)
- ✅ Annotation: 10 test cases
- ✅ Notebook: 13 test cases

Tests validate:

- Success paths for all actions
- Error handling and validation
- Authorization checks
- Data integrity constraints

---

## Lessons Learned

### 1. Complexity vs. Practicality

The removal of Version/VersionDraft concepts demonstrates the importance of:

- Starting with MVP features
- Adding complexity only when needed
- Prioritizing frontend integration feasibility

### 2. AI as Enhancement, Not Core Architecture

- AI features work best when integrated into existing concepts
- Avoid creating entire concepts just for AI workflows
- Keep AI interactions transient where possible

### 3. Concept Independence

- Data structure duplication across concepts (Ingredient, Step interfaces) initially seems wasteful
- But it ensures true concept independence and evolutionary flexibility
- Each concept can modify its internal structures without breaking others

---

## Future Considerations

If the application scales, the following could be reconsidered:

**1. Version History**

- Could add back a simplified Version concept if users demand history tracking
- Would be simpler than original design: just snapshots without AI integration

**2. Enhanced AI Features**

- Multi-turn AI conversations for recipe refinement
- AI-suggested ingredient substitutions based on dietary restrictions
- Cooking technique explanations

**3. Social Features**

- Recipe ratings and reviews (could be new concepts)
- User following/followers
- Recipe recommendations based on user preferences

---

## Assignment 5: Backend Synchronizations

### Introduction of Requesting Concept and Sync Engine

**Major Addition:** Migrated from pass-through concept server to synchronization-based architecture.

**What Changed:**

- Added `Requesting` concept to reify HTTP requests as actions
- Implemented sync engine to coordinate multi-concept operations
- Added `Sessioning` concept for secure session management
- Configured route inclusion/exclusion in `passthrough.ts`

### Route Configuration Strategy

**Included Routes (Passthrough - 21 routes):**

- **Public actions**: User registration (`/api/User/registerUser`)
- **Query endpoints**: All read-only queries (prefixed with `_`)
  - Recipe queries: `_getRecipeById`, `_listRecipesByOwner`, `_searchRecipesByTag`
  - Annotation queries: `_getAnnotationsForRecipe`, `_getAnnotationById`
  - Notebook queries: `_getNotebookById`, `_getNotebooksByOwner`, etc.
- **Internal actions**: `Sessioning.deleteSession` (logout), `Annotation.deleteByRecipe` (cascade)

**Rationale:** Queries don't modify state, so they don't need authentication/authorization syncs. Direct passthrough improves performance.

**Excluded Routes (Via Requesting - 13 routes):**

- **Authentication-required actions**: All state-modifying operations
  - User: `login` (needs session creation), `updateProfile`
  - Recipe: `createRecipe`, `deleteRecipe`, `updateRecipeDetails`, `draftRecipeWithAI`, `applyDraft`
  - Annotation: `annotate`, `editAnnotation`, `resolveAnnotation`, `deleteAnnotation`
  - Notebook: `createNotebook`, `inviteMember`, `removeMember`, `shareRecipe`, `unshareRecipe`, `deleteNotebook`

**Rationale:** These actions require multi-step orchestration (authentication → authorization → action → response).

### Synchronization Patterns Implemented

**1. Authentication & Session Management**

**Pattern:** Login requires session creation
```
Request → User.login → Sessioning.createSession → Respond with session token
```

**Files:** `src/syncs/user_auth.sync.ts` (7 syncs)

- `LoginRequest`: Triggers `User.login` from HTTP request
- `CreateSessionAfterLogin`: Creates session after successful login
- `LoginResponseWithSession`: Responds with user ID + session token
- `LoginResponseError`: Handles login failures

**Security Benefit:** Session token generation happens server-side, client cannot forge tokens.

**2. Authorization Checks**

**Pattern:** Validate session → Check ownership → Execute action

**Example:** Recipe deletion (from `recipe.sync.ts`)
```typescript
where: async (frames) => {
  // 1. Authenticate session
  frames = await frames.query(Sessioning._getUser, { session }, { user: requester });
  if (frames.length === 0) return error("Invalid session");
  
  // 2. Fetch recipe
  frames = await frames.query(Recipe._getRecipeById, { recipe }, { recipe: recipeDoc });
  if (frames.length === 0) return error("Recipe not found");
  
  // 3. Verify ownership
  frames = frames.filter($ => $[requester] === $[recipeDoc].owner);
  if (frames.length === 0) return error("Unauthorized");
  
  return frames;
}
```

**Syncs:** 33+ total across all concepts

**Security Benefit:** Authorization logic in backend, impossible for client to bypass.

**3. Multi-Concept Coordination**

**Pattern:** Cascade operations across concepts

**Example:** Recipe deletion triggers annotation cleanup
```
Recipe.deleteRecipe → Annotation.deleteByRecipe
```

**Sync:** `CascadeAnnotationDeletion` in `recipe.sync.ts`

**Data Integrity Benefit:** Ensures no orphaned annotations when recipes are deleted.

**4. Complex Authorization (Notebook Sharing)**

**Pattern:** Multiple authorization paths

**Example:** Share recipe to notebook
- User can share if they are **either** recipe owner **or** notebook member

```typescript
frames.filter($ => 
  $[sharer] === $[recipeDoc].owner ||  // Recipe owner can share
  $[notebookDoc].members.includes($[sharer])  // OR notebook member can share
)
```

**Files:** `src/syncs/notebook.sync.ts` (16 syncs for 4 actions)

### Session Management Architecture

**Sessioning Concept** (New for Assignment 5)

**Purpose:** Manage user sessions with automatic expiration

**Key Features:**
- 7-day session expiration via MongoDB TTL index
- Session creation returns cryptographically random token
- `_getUser(session)` query for authentication in syncs
- Session deletion for logout

**Integration with Syncs:**
- Every authenticated sync queries `Sessioning._getUser` to validate session
- Invalid sessions result in immediate error response
- No concept action executes without valid session for protected routes

### Synchronization Implementation Statistics

**Total Syncs Implemented:** 33+

**By Concept:**
- User Auth: 7 syncs (login, logout flows)
- Recipe: 20 syncs (5 actions × 4 syncs each)
- Annotation: 16 syncs (4 actions × 4 syncs each)
- Notebook: 24 syncs (6 actions × 4 syncs each)
- Version Stubs: 2 syncs (graceful error handling)

**Standard 4-Sync Pattern:**
1. **Request Sync**: Validates & triggers action
2. **Success Response**: Returns result on success
3. **Error Response**: Returns concept action error
4. **Precondition Error**: Returns sync validation error

### Comparison: Frontend vs. Backend Syncs

**Before (Assignment 4b - Frontend Syncs):**
- Frontend coordinated multi-step operations
- ⚠️ Security Risk: Client could bypass auth checks
- ⚠️ Scattered Logic: Syncs distributed across Vue components
- ⚠️ Easy to Forget: Developers might skip critical checks

**After (Assignment 5 - Backend Syncs):**
- ✅ Security: Server-side validation impossible to bypass
- ✅ Centralized: All syncs in `src/syncs/` directory
- ✅ Traceable: Logging shows exact sync execution flow
- ✅ Testable: Syncs can be unit tested independently

### Design Decisions & Rationale

**1. Why exclude login but include registration?**

- **Login excluded**: Needs to create session (multi-concept coordination)
- **Registration included**: Single-concept operation, no session needed yet

**2. Why include all query endpoints?**

- Queries are read-only, no state modification
- Performance: Direct queries faster than sync overhead
- Security: Session validation could be added later if needed

**3. Why 4 syncs per action?**

- Comprehensive error handling
- Separate paths for concept errors vs. sync validation errors
- Clear separation of concerns

**4. Why use Frames API instead of traditional async/await?**

- Declarative sync specification
- Engine handles action coordination automatically
- Query multiplication (one frame can become many)
- Built-in error propagation

### Impact on Frontend (Assignment 4b Adjustments)

**Required Changes:**

1. **Add session parameter** to all authenticated requests:
```typescript
await apiRequest('/Recipe/createRecipe', {
  session: sessionToken,  // NEW
  title, ingredients, steps
});
```

2. **Handle session errors** uniformly:
```typescript
if (result.error === "Invalid session") {
  // Redirect to login
}
```

3. **Remove redundant client-side checks**:
- Ownership validation (now in backend)
- Authorization logic (now in syncs)

**Benefits:**
- Simpler frontend code
- More secure application
- Consistent error handling

---

## References

- Full API Specification: [api-spec.md](api-spec.md)
- Synchronizations Documentation: [SYNCHRONIZATIONS.md](SYNCHRONIZATIONS.md)
- Concept Design Changes: [design/brainstorming/all-design-changes.md](design/brainstorming/all-design-changes.md)
- Individual Concept Documentation: `design/concepts/{Concept}/`
