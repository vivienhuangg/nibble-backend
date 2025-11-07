/**
 * The Requesting concept exposes passthrough routes by default,
 * which allow POSTs to the route:
 *
 * /{REQUESTING_BASE_URL}/{Concept name}/{action or query}
 *
 * to passthrough directly to the concept action or query.
 * This is a convenient and natural way to expose concepts to
 * the world, but should only be done intentionally for public
 * actions and queries.
 *
 * This file allows you to explicitly set inclusions and exclusions
 * for passthrough routes:
 * - inclusions: those that you can justify their inclusion
 * - exclusions: those to exclude, using Requesting routes instead
 */

/**
 * INCLUSIONS
 *
 * Each inclusion must include a justification for why you think
 * the passthrough is appropriate (e.g. public query).
 *
 * inclusions = {"route": "justification"}
 */

export const inclusions: Record<string, string> = {
  // User concept - public actions and queries
  "/api/User/registerUser": "public action to create new user accounts",
  "/api/User/_getUserDetails": "public query to get user profile information",
  "/api/User/_getUserIDByUsername":
    "public query to lookup user ID by username",

  // Sessioning concept - public endpoints and internal queries used by syncs
  "/api/Sessioning/deleteSession": "public action to end sessions (logout)",
  "/api/Sessioning/createSession": "internal - created by login sync, not called directly",
  "/api/Sessioning/_getUser": "internal query - used by syncs for authentication",
  "/api/Sessioning/_refreshSession": "internal query - session management",

  // Recipe concept - all queries
  "/api/Recipe/_getRecipeById": "public query to view recipe details",
  "/api/Recipe/_listRecipesByOwner": "public query to browse recipes by owner",
  "/api/Recipe/_searchRecipesByTag": "public query to search recipes by tag",
  "/api/Recipe/_getForkCount": "public query to get fork statistics",
  "/api/Recipe/_listForksOfRecipe": "public query to list recipe forks",
  "/api/Recipe/addTag": "NOT IMPLEMENTED - no syncs, not in use",
  "/api/Recipe/removeTag": "NOT IMPLEMENTED - no syncs, not in use",

  // Annotation concept - queries and internal actions
  "/api/Annotation/_getAnnotationsForRecipe":
    "public query to view recipe annotations",
  "/api/Annotation/_getAnnotationById":
    "public query to view specific annotation",
  "/api/Annotation/deleteByRecipe": "internal action - used by cascade deletion sync",

  // Notebook concept - queries
  "/api/Notebook/_getNotebookById": "query to view notebook details",
  "/api/Notebook/_getNotebooksByOwner": "query to view user's owned notebooks",
  "/api/Notebook/_getNotebooksWithMember":
    "query to view notebooks where user is member",
  "/api/Notebook/_getNotebooksContainingRecipe":
    "query to find notebooks containing a recipe",
};

/**
 * EXCLUSIONS
 *
 * Excluded routes fall back to the Requesting concept, and will
 * instead trigger the normal Requesting.request action. As this
 * is the intended behavior, no justification is necessary.
 *
 * exclusions = ["route"]
 */

export const exclusions: Array<string> = [
  // User concept - state-modifying actions requiring authentication/sessions
  "/api/User/login", // Excluded to allow session creation via sync
  "/api/User/updateProfile",

  // Recipe concept - state-modifying actions
  "/api/Recipe/createRecipe",
  "/api/Recipe/deleteRecipe",
  "/api/Recipe/updateRecipeDetails",
  "/api/Recipe/draftRecipeWithAI",
  "/api/Recipe/applyDraft",

  // Annotation concept - state-modifying actions
  "/api/Annotation/annotate",
  "/api/Annotation/editAnnotation",
  "/api/Annotation/resolveAnnotation",
  "/api/Annotation/deleteAnnotation",

  // Notebook concept - state-modifying actions
  "/api/Notebook/createNotebook",
  "/api/Notebook/inviteMember",
  "/api/Notebook/removeMember",
  "/api/Notebook/shareRecipe",
  "/api/Notebook/unshareRecipe",
  "/api/Notebook/deleteNotebook",
];
