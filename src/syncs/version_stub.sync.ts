// Stub syncs for archived Version concept
// These syncs gracefully handle any lingering requests to Version endpoints
// by returning a clear "feature not available" error instead of timing out.

import { Requesting } from "@concepts";
import { actions, type Sync } from "@engine";

/**
 * Sync: VersionFeatureNotAvailable
 * Catches any requests to Version endpoints and responds with a clear error message.
 * This prevents timeout errors when frontend/tests try to access archived Version features.
 */
export const VersionFeatureNotAvailable: Sync = ({ request }) => ({
  when: actions([
    Requesting.request,
    { path: "/Version/_listVersionsByRecipe" },
    { request },
  ]),
  then: actions([
    Requesting.respond,
    {
      request,
      error:
        "Version feature is not available. AI modifications are now handled via Recipe.draftRecipeWithAI and Recipe.applyDraft instead.",
    },
  ]),
});

/**
 * Catch-all for other Version endpoints
 */
export const VersionDraftFeatureNotAvailable: Sync = ({ request }) => ({
  when: actions([
    Requesting.request,
    { path: "/VersionDraft/_getDraftById" },
    { request },
  ]),
  then: actions([
    Requesting.respond,
    {
      request,
      error:
        "VersionDraft feature is not available. AI modifications are now handled via Recipe.draftRecipeWithAI and Recipe.applyDraft instead.",
    },
  ]),
});

