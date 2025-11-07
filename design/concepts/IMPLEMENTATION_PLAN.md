# Sync Implementation Plan

Based on the analysis, here are the issues to address in priority order:

## ❗ CRITICAL - Issue #1: Notebook Collaboration Features (33% complete)

**Missing Syncs:**

1. `shareRecipe` - Allow recipe owners/members to share recipes into notebooks
2. `unshareRecipe` - Allow recipe owners/notebook owners to remove recipes from notebooks
3. `removeMember` - Allow notebook owners to remove members
4. `deleteNotebook` - Allow notebook owners to delete notebooks

**Why Critical:** These are the core collaborative features that make Notebook useful. Without sharing/unsharing, Notebook cannot fulfill its purpose.

**Implementation Order:**

1. ✅ Share Recipe syncs (most important)
2. ✅ Unshare Recipe syncs
3. ✅ Remove Member syncs
4. ✅ Delete Notebook syncs

---

## ✅ HIGH PRIORITY - Issue #2: Recipe AI Features (80% complete)

**Missing Syncs:**

1. `draftRecipeWithAI` - Generate AI-assisted recipe modifications
2. `applyDraft` - Apply AI-generated drafts to recipes

**Why Important:** This is the key differentiator feature - AI-assisted recipe modification.

**Implementation Order:**

1. ✅ Draft Recipe with AI syncs
2. ✅ Apply Draft syncs

---

## 📊 MEDIUM PRIORITY - Issue #3: Query Syncs

**Missing Query Syncs:**

**Recipe:**

- `_getForkCount` - Get count of forks for a recipe
- `_listForksOfRecipe` - List all recipes forked from a given recipe

**Notebook:**

- `_getNotebooksByOwner` - List notebooks owned by a user
- `_getNotebooksWithMember` - List notebooks where user is a member
- `_getNotebooksContainingRecipe` - List notebooks containing a specific recipe

**Why Useful:** These enable filtering, search, and data retrieval for the frontend.

---

## 🔮 FUTURE - Issue #4: User Authentication Expansion

**Not Implemented:**

- Login syncs
- Profile update syncs

**Status:** Low priority - registration works, these can be added later.

---

## 🧹 CLEANUP - Issue #5: Remove Obsolete Concepts

**Action:** Remove or archive Version and VersionDraft directories

- `design/concepts/Version/`
- `design/concepts/VersionDraft/`

---

## Implementation Strategy

For each missing sync, we'll follow the pattern:

1. **Request Sync** - Catches HTTP request, validates session/authorization, triggers action
2. **Success Response Sync** - Responds when action succeeds
3. **Error Response Sync** - Responds when action returns error
4. **Precondition Error Sync** - Responds when preconditions fail

### Example Pattern (from existing code):

```typescript
// 1. Request Sync
export const ActionNameRequest: Sync = ({
  request,
  session,
  param1,
  param2,
  user,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/path/to/action", session, param1, param2 },
    { request },
  ]),
  where: async (frames) => {
    // Authenticate session
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    if (frames.length === 0) {
      return new Frames({ ...frames[0], error: "Invalid session" });
    }
    // Additional authorization checks...
    return frames;
  },
  then: actions([Concept.action, { user, param1, param2 }]),
});

// 2. Success Response
export const ActionNameResponse: Sync = ({ request, result }) => ({
  when: actions(
    [Requesting.request, { path: "/path/to/action" }, { request }],
    [Concept.action, {}, { result }]
  ),
  then: actions([Requesting.respond, { request, result }]),
});

// 3. Error Response
export const ActionNameErrorResponse: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/path/to/action" }, { request }],
    [Concept.action, {}, { error }]
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// 4. Precondition Error Response
export const ActionNamePreconditionError: Sync = ({ request, error }) => ({
  when: actions([Requesting.request, { path: "/path/to/action" }, { request }]),
  where: (frames) => frames.filter(($) => $[error] === "Invalid session"),
  then: actions([Requesting.respond, { request, error }]),
});
```

---

## Next Steps

Ready to implement! Which issue should we tackle first?

**Recommended:** Start with Issue #1 (Notebook collaboration) - 4 missing syncs that are critical for core functionality.
