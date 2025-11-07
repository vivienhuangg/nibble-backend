---
timestamp: 'Wed Nov 05 2025 16:03:43 GMT-0500 (Eastern Standard Time)'
parent: '[[../20251105_160343.8ab7f422.md]]'
content_id: 60b32b2d3362dcbeb5a2ab091d87c36ed6fbe4be94420db7f8ddd2425a0a5b58
---

# response:

The Concept Design architecture emphasizes modularity through self-contained **Concepts** and orchestrates their interactions via **Synchronizations**. Below is an implementation of several synchronizations for the `Notebook` concept, using the `Requesting` concept to handle incoming HTTP requests and `Sessioning` for user authentication.

This implementation follows the pattern of having separate synchronizations for:

1. **Success Path Requests**: Triggering the concept action if all preconditions are met.
2. **Precondition Error Responses**: Responding with an error if preconditions (e.g., valid session, user authorization) are not met *before* the concept action is invoked.
3. **Action Success Responses**: Responding after the concept action successfully completes.
4. **Action Error Responses**: Responding if the concept action itself returns an error.

**Assumptions:**

* A `Sessioning` concept exists at `@concepts/Sessioning/SessioningConcept.ts` with a query `_getUser(session): ({ user: ID } | { error: string })`.
* The `Notebook` concept itself is implemented as `src/concepts/Notebook/NotebookConcept.ts` and exported as a default class.
* Path parameters like `:notebookId` are automatically parsed by `Requesting.request` into the corresponding argument names (e.g., `notebookId`).

***

**1. Create the `Notebook` Concept File (Conceptual Sketch)**

This is a minimal sketch of what `src/concepts/Notebook/NotebookConcept.ts` might look like to support the synchronizations.

**file: src/concepts/Notebook/NotebookConcept.ts**

```typescript
import { Collection, Db } from "npm:mongodb";
import { Empty, ID } from "@utils/types.ts";
import { freshID } from "@utils/database.ts";

const PREFIX = "Notebook" + ".";

type User = ID;
type Recipe = ID;

export interface NotebookDocument {
  _id: ID;
  owner: User;
  title: string;
  description?: string;
  members: User[];
  recipes: Recipe[];
  created: Date;
}

/**
 * concept Notebook [User, Recipe]
 *
 * purpose organize shared collections of recipes and manage collaborative access.
 * principle after creating a notebook and inviting members, those members can view all recipes shared to the notebook,
 *           while only the recipe owner retains the ability to edit the recipe itself.
 */
export default class NotebookConcept {
  notebooks: Collection<NotebookDocument>;

  constructor(private readonly db: Db) {
    this.notebooks = this.db.collection(PREFIX + "notebooks");
  }

  /**
   * createNotebook(owner: User, title: String, description?: String) → (notebook: ID) | (error: String)
   *
   * requires title ≠ ""
   * effects creates new notebook with owner ∈ members, sets `created`
   */
  async createNotebook({ owner, title, description }: { owner: User, title: string, description?: string }): Promise<{ notebook: ID } | { error: string }> {
    if (!title || title.trim() === "") {
      return { error: "Notebook title cannot be empty." };
    }
    const newNotebookId = freshID();
    const newNotebook: NotebookDocument = {
      _id: newNotebookId,
      owner,
      title,
      description,
      members: [owner], // Owner is automatically a member
      recipes: [],
      created: new Date(),
    };
    try {
      await this.notebooks.insertOne(newNotebook);
      return { notebook: newNotebookId };
    } catch (e) {
      console.error("Error creating notebook:", e);
      return { error: `Failed to create notebook: ${e.message}` };
    }
  }

  /**
   * inviteMember(owner: User, notebook: ID, member: User) → Empty | (error: String)
   *
   * requires owner = notebook.owner ∧ member exists
   * effects member ∈ notebook.members
   */
  async inviteMember({ owner, notebook, member }: { owner: User, notebook: ID, member: User }): Promise<Empty | { error: string }> {
    const notebookDoc = await this.notebooks.findOne({ _id: notebook });
    if (!notebookDoc) {
      return { error: `Notebook with ID ${notebook} not found.` };
    }
    if (notebookDoc.owner !== owner) {
      return { error: "Only the notebook owner can invite members." };
    }
    // In a real app, you'd check if 'member' (User ID) actually exists in a User concept.
    // For this example, we assume `member` ID is valid if passed.
    if (notebookDoc.members.includes(member)) {
      return { error: `User ${member} is already a member of notebook ${notebook}.` };
    }
    try {
      await this.notebooks.updateOne(
        { _id: notebook },
        { $addToSet: { members: member } },
      );
      return {};
    } catch (e) {
      console.error("Error inviting member:", e);
      return { error: `Failed to invite member: ${e.message}` };
    }
  }

  /**
   * _getNotebookById(notebook: ID) → (notebook: NotebookDocument) | (error: String)
   *
   * requires notebook exists
   * effects returns the notebook document
   */
  async _getNotebookById({ notebook }: { notebook: ID }): Promise<{ notebook: NotebookDocument } | { error: string }> {
    const notebookDoc = await this.notebooks.findOne({ _id: notebook });
    if (!notebookDoc) {
      return { error: `Notebook with ID ${notebook} not found.` };
    }
    return { notebook: notebookDoc };
  }

  // ... other actions and queries would be implemented here
}
```

***

**2. Implement the Synchronization File**

**file: src/syncs/notebook.sync.ts**

```typescript
// These help you declare synchronizations and work with frames
import { actions, Sync, Frames } from "@engine";
// Import core concepts
import { Requesting } from "@concepts";
// Import the Notebook concept (assuming it's a default export from its file)
import Notebook from "@concepts/Notebook/NotebookConcept.ts";
// Import the Sessioning concept (assuming it's a default export from its file)
import Sessioning from "@concepts/Sessioning/SessioningConcept.ts";

/**
 * Utility to check if a frame contains an 'error' key, following the convention
 * that errors are returned as `{ error: string }`.
 */
function hasErrorInFrame(frame: Record<PropertyKey, unknown>): boolean {
  return typeof frame.error === 'string';
}

// --- Synchronizations for Creating a Notebook ---

/**
 * **Create Notebook (Success Path)**
 * Handles the request to create a notebook by checking preconditions and
 * then triggering the `Notebook.createNotebook` action.
 * Only fires if the session is valid and an `owner` is successfully identified.
 */
export const CreateNotebookRequest_SuccessPath: Sync = ({ request, session, title, description, owner }) => ({
  when: actions([
    Requesting.request,
    { path: "/notebooks/create", session, title, description },
    { request },
  ]),
  where: async (frames) => {
    // 1. Get the user from the session. `Sessioning._getUser` returns { user: ID } or { error: string }.
    frames = await frames.query(Sessioning._getUser, { session }, { owner: "user" }); // Bind to `owner`
    frames = frames.filter(($) => $[owner] !== undefined && !hasErrorInFrame($)); // Filter out error frames

    // Return only frames where a valid owner was found
    return frames;
  },
  then: actions([
    Notebook.createNotebook,
    { owner, title, description },
    { notebook: owner }, // Output: the ID of the created notebook
  ]),
});

/**
 * **Create Notebook (Precondition Error Path)**
 * Handles immediate error responses if preconditions for creating a notebook are not met
 * (e.g., invalid session, user not found).
 */
export const CreateNotebookRequest_PreconditionError: Sync = ({ request, session, error }) => ({
  when: actions([
    Requesting.request,
    { path: "/notebooks/create", session },
    { request },
  ]),
  where: async (frames) => {
    const originalRequestFrame = frames[0];
    let ownerFrames = await frames.query(Sessioning._getUser, { session }, { owner: "dummy" }); // Use dummy var to check success/error

    if (ownerFrames.length === 0 || hasErrorInFrame(ownerFrames[0])) {
      // If no owner was found or an error occurred during lookup, prepare the error for response.
      const errorMessage = ownerFrames.length === 0 ? "Session invalid or user not found." : (ownerFrames[0].error as string);
      return new Frames([{ ...originalRequestFrame, [error]: errorMessage }]);
    }
    // If owner was successfully found, this error sync should NOT fire.
    return new Frames([]);
  },
  then: actions([
    Requesting.respond,
    { request, error },
  ]),
});

/**
 * **Create Notebook (Action Success Response)**
 * Responds to the original HTTP request after `Notebook.createNotebook` successfully completes.
 */
export const CreateNotebookResponse_Success: Sync = ({ request, notebook }) => ({
  when: actions(
    [Requesting.request, { path: "/notebooks/create" }, { request }],
    [Notebook.createNotebook, {}, { notebook }], // Matches successful action output
  ),
  then: actions([
    Requesting.respond,
    { request, notebook }, // Respond with the ID of the new notebook
  ]),
});

/**
 * **Create Notebook (Action Error Response)**
 * Handles errors returned directly by the `Notebook.createNotebook` action.
 */
export const CreateNotebookResponse_Error: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/notebooks/create" }, { request }],
    [Notebook.createNotebook, {}, { error }], // Matches action output when an error occurs
  ),
  then: actions([
    Requesting.respond,
    { request, error },
  ]),
});

// --- Synchronizations for Inviting a Member to a Notebook ---

/**
 * **Invite Member (Success Path)**
 * Handles the request to invite a member.
 * This sync *only* triggers `Notebook.inviteMember` if all preconditions (valid session,
 * notebook existence, and current user is notebook owner) are met.
 */
export const InviteMemberRequest_SuccessPath: Sync = ({ request, session, notebookId, memberId, requesterUser, notebookDoc }) => ({
  when: actions([
    Requesting.request,
    { path: "/notebooks/:notebookId/invite", session, memberId },
    { request, notebookId }, // Capture notebookId from path parameters
  ]),
  where: async (frames) => {
    // 1. Get the current user from the session
    frames = await frames.query(Sessioning._getUser, { session }, { requesterUser: "user" }); // Bind to `requesterUser`
    frames = frames.filter(($) => $[requesterUser] !== undefined && !hasErrorInFrame($)); // Filter out error frames
    if (frames.length === 0) return new Frames([]); // No valid requester, stop this path

    // 2. Get the notebook document
    frames = await frames.query(Notebook._getNotebookById, { notebook: notebookId }, { notebook: "notebookDoc" }); // Bind to `notebookDoc`
    frames = frames.filter(($) => $[notebookDoc] !== undefined && !hasErrorInFrame($)); // Filter out error frames
    if (frames.length === 0) return new Frames([]); // Notebook not found, stop this path

    // 3. Filter to ensure the 'requesterUser' is actually the owner of the notebook
    return frames.filter(($) => $[requesterUser] === $[notebookDoc].owner);
  },
  then: actions([
    Notebook.inviteMember,
    { owner: requesterUser, notebook: notebookId, member: memberId },
  ]),
});

/**
 * **Invite Member (Precondition Error Path)**
 * Handles immediate error responses if preconditions for inviting a member are not met
 * (e.g., invalid session, notebook not found, or user is not the notebook owner).
 */
export const InviteMemberRequest_PreconditionError: Sync = ({ request, session, notebookId, memberId, requesterUser, notebookDoc, error }) => ({
  when: actions([
    Requesting.request,
    { path: "/notebooks/:notebookId/invite", session, memberId },
    { request, notebookId },
  ]),
  where: async (frames) => {
    const originalRequestFrame = frames[0];
    let currentFrames = new Frames([originalRequestFrame]); // Start with the request frame for error context

    // 1. Check user session
    currentFrames = await currentFrames.query(Sessioning._getUser, { session }, { requesterUser: "user" });
    if (currentFrames.length === 0 || hasErrorInFrame(currentFrames[0])) {
      return new Frames([{ ...originalRequestFrame, [error]: "Session invalid or user not found." }]);
    }

    // 2. Check notebook existence
    let notebookFrames = await currentFrames.query(Notebook._getNotebookById, { notebook: notebookId }, { notebook: "notebookDoc" });
    if (notebookFrames.length === 0 || hasErrorInFrame(notebookFrames[0])) {
      return new Frames([{ ...originalRequestFrame, [error]: `Notebook with ID ${notebookId} not found.` }]);
    }

    // 3. Check ownership
    const ownerCheckFrames = notebookFrames.filter(($) => $[requesterUser] === $[notebookDoc].owner);
    if (ownerCheckFrames.length === 0) {
      return new Frames([{ ...originalRequestFrame, [error]: "Only the notebook owner can invite members." }]);
    }

    // If all preconditions pass, this error sync should NOT fire.
    return new Frames([]);
  },
  then: actions([
    Requesting.respond,
    { request, error },
  ]),
});

/**
 * **Invite Member (Action Success Response)**
 * Responds to the original HTTP request after `Notebook.inviteMember` successfully completes.
 */
export const InviteMemberResponse_Success: Sync = ({ request }) => ({
  when: actions(
    [Requesting.request, { path: "/notebooks/:notebookId/invite" }, { request }],
    [Notebook.inviteMember, {}, {}], // `inviteMember` returns Empty on success
  ),
  then: actions([
    Requesting.respond,
    { request, status: "Member invited successfully." },
  ]),
});

/**
 * **Invite Member (Action Error Response)**
 * Handles errors returned directly by the `Notebook.inviteMember` action.
 */
export const InviteMemberResponse_Error: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/notebooks/:notebookId/invite" }, { request }],
    [Notebook.inviteMember, {}, { error }], // Matches action output when an error occurs
  ),
  then: actions([
    Requesting.respond,
    { request, error },
  ]),
});
```
