# Sync Necessity Analysis

Based on the Requesting concept's passthrough system, this document analyzes which syncs are actually necessary.

---

## Understanding Passthrough vs Excluded

### Passthrough (INCLUDED) Routes:
- **Don't need syncs** - requests go directly to concept actions
- Appropriate for: public actions, queries, authentication endpoints
- Example: `/api/User/registerUser` → directly calls `User.registerUser`

### Excluded Routes:
- **Need syncs** - requests trigger `Requesting.request` action
- Required for: authentication, authorization, complex orchestration
- Example: `/api/Recipe/createRecipe` → triggers `Requesting.request` → sync validates session → calls `Recipe.createRecipe`

---

## Current Passthrough Configuration

### ✅ INCLUDED (Passthrough - No syncs needed):

**User:**
- `/api/User/registerUser` - Public registration
- `/api/User/login` - Public authentication

**Recipe Queries:**
- `/api/Recipe/_getRecipeById` - Public query
- `/api/Recipe/_listRecipesByOwner` - Public query
- `/api/Recipe/_searchRecipesByTag` - Public query
- `/api/Recipe/_getForkCount` - Public query
- `/api/Recipe/_listForksOfRecipe` - Public query

**Annotation Queries:**
- `/api/Annotation/_getAnnotationsForRecipe` - Public query
- `/api/Annotation/_getAnnotationById` - Public query

**Notebook Queries:**
- `/api/Notebook/_getNotebookById` - Public query
- `/api/Notebook/_getNotebooksByOwner` - Public query
- `/api/Notebook/_getNotebooksWithMember` - Public query
- `/api/Notebook/_getNotebooksContainingRecipe` - Public query

### ❌ EXCLUDED (Need syncs for auth):

**Recipe Actions:**
- `/api/Recipe/createRecipe` - Needs session auth
- `/api/Recipe/addTag` - Needs ownership check (not implemented, tags removed)
- `/api/Recipe/removeTag` - Needs ownership check (not implemented, tags removed)
- `/api/Recipe/deleteRecipe` - Needs ownership check
- `/api/Recipe/updateRecipeDetails` - Needs ownership check
- `/api/Recipe/draftRecipeWithAI` - Needs session auth
- `/api/Recipe/applyDraft` - Needs ownership check

**Annotation Actions:**
- `/api/Annotation/annotate` - Needs session auth
- `/api/Annotation/editAnnotation` - Needs ownership check
- `/api/Annotation/resolveAnnotation` - Needs authorization
- `/api/Annotation/deleteAnnotation` - Needs ownership check

**Notebook Actions:**
- `/api/Notebook/createNotebook` - Needs session auth
- `/api/Notebook/inviteMember` - Needs ownership check
- `/api/Notebook/removeMember` - Needs ownership check
- `/api/Notebook/shareRecipe` - Needs authorization check
- `/api/Notebook/unshareRecipe` - Needs authorization check
- `/api/Notebook/deleteNotebook` - Needs ownership check

---

## 🔍 Sync Necessity Review

### ❌ UNNECESSARY SYNCS (Should be removed):

#### User Registration Syncs:
**File:** `user_registration.sync.ts`

**Unnecessary:**
- ❌ `RegisterUserRequest` - `/api/User/registerUser` is INCLUDED (passthrough)
- ❌ `RegisterUserResponseSuccess` - Not needed for passthrough
- ❌ `RegisterUserResponseError` - Not needed for passthrough

**Reason:** User registration is a public action that doesn't need authentication. The passthrough.ts configuration shows it's included, meaning HTTP requests go directly to `User.registerUser` without syncs.

#### User Login Syncs:
**File:** `user_registration.sync.ts`

**Unnecessary:**
- ❌ `LoginRequest` - `/api/User/login` is INCLUDED (passthrough)
- ❌ `CreateSessionAfterLogin` - WAIT, this might be needed!
- ❌ `LoginResponseWithSession` - Depends on above
- ❌ `LoginResponseError` - Not needed for passthrough

**Reason:** Login is included as passthrough. BUT - we have a problem! Login is passthrough but we need to create a session after successful login. This requires a sync!

**Issue Found:** Login is configured as passthrough but should probably be excluded to allow session creation via sync.

#### Logout Syncs:
**File:** `user_registration.sync.ts`

**Unnecessary:**
- ❌ `LogoutRequest` - `/api/User/logout` doesn't exist in User concept
- ❌ `LogoutResponseSuccess` - No User.logout action
- ❌ `LogoutResponseError` - No User.logout action

**Reason:** There's no `logout` action in UserConcept. Logout should be a direct passthrough to `Sessioning.deleteSession` or we need to add it to exclusions.

### ✅ NECESSARY SYNCS (Keep these):

#### Recipe Action Syncs:
**File:** `recipe.sync.ts`

**Necessary (ALL):**
- ✅ All Recipe action syncs (create, update, delete, draftWithAI, applyDraft)
- ✅ Session authentication in where clauses
- ✅ Ownership authorization checks

**Reason:** All Recipe actions are excluded in passthrough.ts, requiring syncs for authentication and authorization.

#### Notebook Action Syncs:
**File:** `notebook.sync.ts`

**Necessary (ALL):**
- ✅ All Notebook action syncs (create, invite, share, unshare, remove, delete)
- ✅ Session authentication
- ✅ Ownership/membership authorization

**Reason:** All Notebook actions are excluded in passthrough.ts, requiring syncs for authentication and authorization.

#### Annotation Action Syncs:
**File:** `annotation.sync.ts`

**Necessary (ALL):**
- ✅ All Annotation action syncs (annotate, edit, resolve, delete)
- ✅ Authorization checks

**Reason:** All Annotation actions are excluded in passthrough.ts.

**BUT - Issue Found:** Current annotation syncs DON'T check sessions! They just pass through author/resolver IDs. This is a security gap.

#### Version Stub Syncs:
**File:** `version_stub.sync.ts`

**Necessary:**
- ✅ VersionFeatureNotAvailable
- ✅ VersionDraftFeatureNotAvailable

**Reason:** Prevents timeout errors for archived Version endpoints.

---

## 🚨 Critical Issues Found

### Issue #1: Login Should Be Excluded
**Problem:** Login is currently INCLUDED (passthrough) but we need to create a session after successful login.

**Current Flow:**
```
POST /users/login → User.login (passthrough) → Returns user
```

**Missing:** Session creation!

**Solution Options:**

**Option A:** Keep login as passthrough, add User.createSessionAfterLogin sync
```typescript
sync CreateSessionAfterLogin
when
  User.login () : (user)
then
  Sessioning.createSession (user)
```
But this won't attach session to the response!

**Option B (RECOMMENDED):** Exclude login, use syncs for complete flow
```typescript
// In passthrough.ts exclusions:
"/api/User/login"

// Keep the syncs we created:
LoginRequest → User.login
CreateSessionAfterLogin → Sessioning.createSession
LoginResponseWithSession → Requesting.respond
```

### Issue #2: Logout Doesn't Exist
**Problem:** We created logout syncs but there's no `User.logout` action.

**Solution:** Logout should directly call `Sessioning.deleteSession` as a passthrough or exclude it.

**Recommended:**
```typescript
// In passthrough.ts inclusions:
"/api/Sessioning/deleteSession": "public action to end user sessions (logout)"

// Remove logout syncs - not needed if passthrough
```

OR exclude it and use our syncs if we want to call it `/users/logout`.

### Issue #3: Annotation Syncs Missing Session Auth
**Problem:** Annotation syncs don't validate sessions - they just accept author/resolver IDs directly.

**Current:**
```typescript
AnnotateRequest: ({ request, author, recipe, targetKind, index, text }) => ({
  when: actions([
    Requesting.request,
    { path: "/Annotation/annotate", author, recipe, targetKind, index, text },
    { request },
  ]),
  then: actions([AnnotationConcept.annotate, { author, recipe, targetKind, index, text }]),
})
```

**Security Issue:** Frontend could provide ANY author ID!

**Should be:**
```typescript
AnnotateRequest: ({ request, session, recipe, targetKind, index, text, author }) => ({
  when: actions([
    Requesting.request,
    { path: "/Annotation/annotate", session, recipe, targetKind, index, text },
    { request },
  ]),
  where: async (frames) => {
    // Authenticate session to get real author
    frames = await frames.query(Sessioning._getUser, { session }, { user: author });
    if (frames.length === 0) {
      return new Frames({ ...frames[0], error: "Invalid session" });
    }
    return frames;
  },
  then: actions([AnnotationConcept.annotate, { author, recipe, targetKind, index, text }]),
})
```

---

## 📋 Recommended Actions

### 1. Fix User Authentication Flow

**Update passthrough.ts:**
```typescript
export const inclusions: Record<string, string> = {
  "/api/User/registerUser": "public action to create new user accounts",
  // REMOVE "/api/User/login" from inclusions
  "/api/Sessioning/deleteSession": "public logout action", // ADD
  ...
};

export const exclusions: Array<string> = [
  "/api/User/login", // ADD - needs session creation via sync
  ...
];
```

**Update user_registration.sync.ts:**
- ✅ Keep login syncs (they're needed for session creation)
- ❌ Remove registration syncs (passthrough handles it)
- ❌ Remove logout syncs OR update to use Sessioning.deleteSession path

### 2. Fix Annotation Security

**Update annotation.sync.ts:**
- Add session authentication to all annotation syncs
- Get author from session, don't trust client-provided author ID
- Follow pattern from Recipe/Notebook syncs

### 3. Clean Up Unnecessary Syncs

**Remove these syncs:**
- `RegisterUserRequest`, `RegisterUserResponseSuccess`, `RegisterUserResponseError`
- `LogoutRequest`, `LogoutResponseSuccess`, `LogoutResponseError` (if using passthrough for Sessioning.deleteSession)

---

## ✅ Summary

### Syncs We Need:
- ✅ Recipe actions (7 actions × ~4 syncs each = ~28 syncs) - KEEP
- ✅ Notebook actions (6 actions × ~4 syncs each = ~24 syncs) - KEEP
- ✅ Annotation actions (4 actions × ~3 syncs each = ~12 syncs) - **NEED TO FIX AUTH**
- ✅ Login (4 syncs) - KEEP (if login is excluded)
- ✅ Version stubs (2 syncs) - KEEP

### Syncs We Don't Need:
- ❌ Registration syncs (3 syncs) - passthrough handles it
- ❌ Logout syncs (3 syncs) - passthrough can handle it
- ❌ Any query syncs - queries are passthroughs

### Total:
- **Keep:** ~70 syncs (Recipe, Notebook, Annotation, Login)
- **Remove:** ~6 syncs (Registration, Logout)
- **Fix:** ~12 syncs (Annotation - add session auth)

---

## 🎯 Next Steps

1. **Update passthrough.ts** - Exclude login, handle logout properly
2. **Remove unnecessary registration syncs**
3. **Fix Annotation syncs** - Add session authentication
4. **Test authentication flow** - Ensure sessions work correctly
5. **Update documentation** - Reflect passthrough vs sync distinction

