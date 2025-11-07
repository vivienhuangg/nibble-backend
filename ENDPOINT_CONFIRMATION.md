# ✅ Endpoint Confirmation: \_getNotebooksWithMember

**Status:** ✅ **ENDPOINT EXISTS AND IS FULLY FUNCTIONAL**

---

## Endpoint Details

### POST /api/Notebook/\_getNotebooksWithMember

🔓 **Public Query** - No session required

**Description:** Returns all notebooks where the specified user is a member (including notebooks they own and notebooks they were invited to).

**Implementation:**

- ✅ Implemented in `NotebookConcept.ts` (line 317-324)
- ✅ Configured as passthrough in `passthrough.ts`
- ✅ No sync needed (public query, direct passthrough)

**Request:**

```json
{
  "member": "USER_ID"
}
```

**Success Response:**

```json
[
  {
    "_id": "NOTEBOOK_ID_1",
    "owner": "OWNER_ID",
    "title": "Family Recipes",
    "description": "Shared family cookbook",
    "members": ["OWNER_ID", "USER_ID", "OTHER_MEMBER_ID"],
    "recipes": ["RECIPE_ID_1", "RECIPE_ID_2"],
    "created": "2025-11-05T10:30:00.000Z"
  },
  {
    "_id": "NOTEBOOK_ID_2",
    "owner": "USER_ID",
    "title": "My Personal Cookbook",
    "description": "My own recipes",
    "members": ["USER_ID"],
    "recipes": ["RECIPE_ID_3"],
    "created": "2025-11-04T15:20:00.000Z"
  }
]
```

**Error Response:**

```json
{
  "error": "string"
}
```

---

## Frontend Usage Example

```typescript
// Get all notebooks for the current user (owned + member of)
async function loadAllUserNotebooks(userId: string) {
  const response = await fetch("/api/Notebook/_getNotebooksWithMember", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      member: userId, // No session needed for queries!
    }),
  });

  const notebooks = await response.json();

  // notebooks is an array containing:
  // - Notebooks the user owns
  // - Notebooks the user was invited to

  return notebooks;
}

// Example usage in your notebook store:
const userNotebooks = await loadAllUserNotebooks(currentUserId);

// Separate owned vs shared if needed:
const ownedNotebooks = userNotebooks.filter((nb) => nb.owner === currentUserId);
const sharedNotebooks = userNotebooks.filter(
  (nb) => nb.owner !== currentUserId
);
```

---

## How It Works

### MongoDB Query:

```typescript
this.notebooks.find({ members: member }).toArray();
```

This finds all notebooks where the `member` ID appears in the `members` array.

### Results Include:

1. **Owned notebooks** - The user is automatically added as a member when they create a notebook
2. **Shared notebooks** - Notebooks the user was invited to via `inviteMember`

---

## Related Endpoints

**Notebook Queries (all public):**

- `_getNotebooksWithMember` - **All notebooks where user is a member** ← This one!
- `_getNotebooksByOwner` - Only notebooks where user is the owner
- `_getNotebookById` - Single notebook by ID
- `_getNotebooksContainingRecipe` - Notebooks containing a specific recipe

**Use Case:**

- Use `_getNotebooksByOwner` to show "My Notebooks" section
- Use `_getNotebooksWithMember` to show "All Notebooks" (owned + shared)
- Use `_getNotebooksWithMember` filtered client-side to show "Shared with Me"

---

## ✅ Confirmation for Frontend Team

**The endpoint you need is already implemented and working!**

**Endpoint:** `POST /api/Notebook/_getNotebooksWithMember`  
**Status:** ✅ Implemented  
**Type:** Public query (no session required)  
**Passthrough:** Yes (configured in passthrough.ts)  
**Syncs:** None needed (direct passthrough)

**You can use it immediately in your frontend!** 🎉

---

## Testing

```bash
# Test with cURL:
curl -X POST http://localhost:10000/api/Notebook/_getNotebooksWithMember \
  -H "Content-Type: application/json" \
  -d '{"member":"YOUR_USER_ID"}'
```

Expected: Array of notebook objects where user is a member

---

**No backend changes needed - this feature is ready to use!** ✅
