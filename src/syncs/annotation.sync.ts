import { Annotation, Requesting, Sessioning } from "@concepts";
import { actions, Frames, type Sync } from "@engine";

// ==============================================================================
// Synchronizations for the 'annotate' action
// purpose: add new unresolved annotation
// ==============================================================================

/**
 * Sync: AnnotateRequest
 * Description: Catches an API request to create an annotation and triggers the Annotation.annotate action.
 * SECURITY: Authenticates session to get the real author ID (client cannot spoof author).
 */
export const AnnotateRequest: Sync = ({
  request,
  session,
  author,
  recipe,
  targetKind,
  index,
  text,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Annotation/annotate", session, recipe, targetKind, index, text },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0];
    // Authenticate session to get the REAL author (don't trust client-provided author)
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: author },
    );
    if (frames.length === 0) {
      return new Frames({ ...originalFrame, error: "Invalid session" });
    }
    return frames;
  },
  then: actions([Annotation.annotate, {
    author,
    recipe,
    targetKind,
    index,
    text,
  }]),
});

/**
 * Sync: AnnotateResponse
 * Description: Responds to the original API request upon successful completion of Annotation.annotate.
 */
export const AnnotateResponse: Sync = ({ request, annotation }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/annotate" }, { request }],
    [Annotation.annotate, {}, { annotation }],
  ),
  then: actions([Requesting.respond, { request, annotation }]),
});

/**
 * Sync: AnnotateResponseError
 * Description: Responds to the original API request if Annotation.annotate returns an error.
 */
export const AnnotateResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/annotate" }, { request }],
    [Annotation.annotate, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * Sync: AnnotateSessionErrorResponse
 * Description: Handles session authentication errors for annotation creation.
 */
export const AnnotateSessionErrorResponse: Sync = ({ request, error }) => ({
  when: actions([Requesting.request, { path: "/Annotation/annotate" }, {
    request,
  }]),
  where: (frames) => frames.filter(($) => $[error] === "Invalid session"),
  then: actions([Requesting.respond, { request, error }]),
});

// ==============================================================================
// Synchronizations for the 'editAnnotation' action
// purpose: modify the text of an existing annotation
// ==============================================================================

/**
 * Sync: EditAnnotationRequest
 * Description: Catches an API request to edit an annotation and triggers the Annotation.editAnnotation action.
 * SECURITY: Authenticates session to get the real author ID (client cannot spoof author).
 */
export const EditAnnotationRequest: Sync = ({
  request,
  session,
  author,
  annotation,
  newText,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Annotation/editAnnotation", session, annotation, newText },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0];
    // Authenticate session to get the REAL author
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: author },
    );
    if (frames.length === 0) {
      return new Frames({ ...originalFrame, error: "Invalid session" });
    }
    return frames;
  },
  then: actions([Annotation.editAnnotation, { author, annotation, newText }]),
});

/**
 * Sync: EditAnnotationResponse
 * Description: Responds to the original API request upon successful completion of Annotation.editAnnotation.
 */
export const EditAnnotationResponse: Sync = ({ request }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/editAnnotation" }, { request }],
    [Annotation.editAnnotation, {}, {}],
  ),
  then: actions([Requesting.respond, { request }]),
});

/**
 * Sync: EditAnnotationResponseError
 * Description: Responds to the original API request if Annotation.editAnnotation returns an error.
 */
export const EditAnnotationResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/editAnnotation" }, { request }],
    [Annotation.editAnnotation, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * Sync: EditAnnotationSessionErrorResponse
 * Description: Handles session authentication errors for annotation editing.
 */
export const EditAnnotationSessionErrorResponse: Sync = (
  { request, error },
) => ({
  when: actions([Requesting.request, { path: "/Annotation/editAnnotation" }, {
    request,
  }]),
  where: (frames) => frames.filter(($) => $[error] === "Invalid session"),
  then: actions([Requesting.respond, { request, error }]),
});

// ==============================================================================
// Synchronizations for the 'resolveAnnotation' action
// purpose: change the resolved status of an annotation
// ==============================================================================

/**
 * Sync: ResolveAnnotationRequest
 * Description: Catches an API request to resolve an annotation and triggers the Annotation.resolveAnnotation action.
 * SECURITY: Authenticates session to get the real resolver ID (client cannot spoof resolver).
 */
export const ResolveAnnotationRequest: Sync = ({
  request,
  session,
  resolver,
  annotation,
  resolved,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Annotation/resolveAnnotation", session, annotation, resolved },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0];
    // Authenticate session to get the REAL resolver
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: resolver },
    );
    if (frames.length === 0) {
      return new Frames({ ...originalFrame, error: "Invalid session" });
    }
    return frames;
  },
  then: actions([
    Annotation.resolveAnnotation,
    { resolver, annotation, resolved },
  ]),
});

/**
 * Sync: ResolveAnnotationResponse
 * Description: Responds to the original API request upon successful completion of Annotation.resolveAnnotation.
 */
export const ResolveAnnotationResponse: Sync = ({ request }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/resolveAnnotation" }, {
      request,
    }],
    [Annotation.resolveAnnotation, {}, {}],
  ),
  then: actions([Requesting.respond, { request }]),
});

/**
 * Sync: ResolveAnnotationResponseError
 * Description: Responds to the original API request if Annotation.resolveAnnotation returns an error.
 */
export const ResolveAnnotationResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/resolveAnnotation" }, {
      request,
    }],
    [Annotation.resolveAnnotation, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * Sync: ResolveAnnotationSessionErrorResponse
 * Description: Handles session authentication errors for annotation resolution.
 */
export const ResolveAnnotationSessionErrorResponse: Sync = (
  { request, error },
) => ({
  when: actions([
    Requesting.request,
    { path: "/Annotation/resolveAnnotation" },
    { request },
  ]),
  where: (frames) => frames.filter(($) => $[error] === "Invalid session"),
  then: actions([Requesting.respond, { request, error }]),
});

// ==============================================================================
// Synchronizations for the 'deleteAnnotation' action
// purpose: remove an annotation
// ==============================================================================

/**
 * Sync: DeleteAnnotationRequest
 * Description: Catches an API request to delete an annotation and triggers the Annotation.deleteAnnotation action.
 * SECURITY: Authenticates session to get the real author ID (client cannot spoof author).
 */
export const DeleteAnnotationRequest: Sync = ({
  request,
  session,
  author,
  annotation,
}) => ({
  when: actions([
    Requesting.request,
    { path: "/Annotation/deleteAnnotation", session, annotation },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0];
    // Authenticate session to get the REAL author
    frames = await frames.query(
      Sessioning._getUser,
      { session },
      { user: author },
    );
    if (frames.length === 0) {
      return new Frames({ ...originalFrame, error: "Invalid session" });
    }
    return frames;
  },
  then: actions([Annotation.deleteAnnotation, { author, annotation }]),
});

/**
 * Sync: DeleteAnnotationResponse
 * Description: Responds to the original API request upon successful completion of Annotation.deleteAnnotation.
 */
export const DeleteAnnotationResponse: Sync = ({ request }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/deleteAnnotation" }, { request }],
    [Annotation.deleteAnnotation, {}, {}],
  ),
  then: actions([Requesting.respond, { request }]),
});

/**
 * Sync: DeleteAnnotationResponseError
 * Description: Responds to the original API request if Annotation.deleteAnnotation returns an error.
 */
export const DeleteAnnotationResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/deleteAnnotation" }, { request }],
    [Annotation.deleteAnnotation, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

/**
 * Sync: DeleteAnnotationSessionErrorResponse
 * Description: Handles session authentication errors for annotation deletion.
 */
export const DeleteAnnotationSessionErrorResponse: Sync = (
  { request, error },
) => ({
  when: actions([Requesting.request, { path: "/Annotation/deleteAnnotation" }, {
    request,
  }]),
  where: (frames) => frames.filter(($) => $[error] === "Invalid session"),
  then: actions([Requesting.respond, { request, error }]),
});

// ==============================================================================
// NOTE: Query syncs removed - annotation queries are PASSTHROUGH routes
// ==============================================================================
// The following query endpoints work via passthrough (configured in passthrough.ts):
// - /api/Annotation/_getAnnotationsForRecipe
// - /api/Annotation/_getAnnotationById
//
// No syncs are needed - requests go directly to the concept query methods.
