---
timestamp: 'Wed Nov 05 2025 15:49:10 GMT-0500 (Eastern Standard Time)'
parent: '[[../20251105_154910.8ae86535.md]]'
content_id: 0a39bd1384361e7ac0462541af22b4015238cf289480cd461903712d7c76cebc
---

# response:

To implement the synchronization file for the `Annotation` concept, we'll create a file named `annotation.sync.ts` within the `src/syncs/` directory. This file will define the rules for how external requests interact with the `Annotation` concept's actions and queries, using synchronizations to orchestrate the flow.

We will set up synchronizations for all actions (`annotate`, `editAnnotation`, `resolveAnnotation`, `deleteAnnotation`) and queries (`_getAnnotationsForRecipe`, `_getAnnotationById`). Each action will typically have three synchronizations: one to initiate the concept action upon a request, one to respond to the request if the action succeeds, and one to respond if the action fails (returns an `error`). Queries will typically have one synchronization to handle the request, perform the query, and respond with the results.

```typescript
// src/syncs/annotation.sync.ts

import { actions, Sync, Frames } from "@engine";
import { Requesting } from "@concepts"; // The Requesting concept for handling API requests
import AnnotationConcept from "@concepts/Annotation/AnnotationConcept.ts"; // Assuming your AnnotationConcept is located here

// ==============================================================================
// Synchronizations for the 'annotate' action
// purpose: add new unresolved annotation
// ==============================================================================

/**
 * Sync: AnnotateRequest
 * Description: Catches an API request to create an annotation and triggers the Annotation.annotate action.
 */
export const AnnotateRequest: Sync = ({ request, author, recipe, targetKind, index, text }) => ({
  when: actions([
    Requesting.request,
    { path: "/Annotation/annotate", author, recipe, targetKind, index, text },
    { request }, // Bind the incoming request ID
  ]),
  then: actions([AnnotationConcept.annotate, { author, recipe, targetKind, index, text }]),
});

/**
 * Sync: AnnotateResponse
 * Description: Responds to the original API request upon successful completion of Annotation.annotate.
 */
export const AnnotateResponse: Sync = ({ request, annotation }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/annotate" }, { request }], // Match the initiating request
    [AnnotationConcept.annotate, {}, { annotation }], // Match successful output of annotate action
  ),
  then: actions([Requesting.respond, { request, annotation }]), // Respond with the created annotation
});

/**
 * Sync: AnnotateResponseError
 * Description: Responds to the original API request if Annotation.annotate returns an error.
 */
export const AnnotateResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/annotate" }, { request }], // Match the initiating request
    [AnnotationConcept.annotate, {}, { error }], // Match error output of annotate action
  ),
  then: actions([Requesting.respond, { request, error }]), // Respond with the error
});

// ==============================================================================
// Synchronizations for the 'editAnnotation' action
// purpose: modify the text of an existing annotation
// ==============================================================================

/**
 * Sync: EditAnnotationRequest
 * Description: Catches an API request to edit an annotation and triggers the Annotation.editAnnotation action.
 */
export const EditAnnotationRequest: Sync = ({ request, author, annotation, newText }) => ({
  when: actions([
    Requesting.request,
    { path: "/Annotation/editAnnotation", author, annotation, newText },
    { request },
  ]),
  then: actions([AnnotationConcept.editAnnotation, { author, annotation, newText }]),
});

/**
 * Sync: EditAnnotationResponse
 * Description: Responds to the original API request upon successful completion of Annotation.editAnnotation.
 */
export const EditAnnotationResponse: Sync = ({ request }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/editAnnotation" }, { request }],
    [AnnotationConcept.editAnnotation, {}, {}], // Match successful (empty) output
  ),
  then: actions([Requesting.respond, { request }]), // Respond with an empty success
});

/**
 * Sync: EditAnnotationResponseError
 * Description: Responds to the original API request if Annotation.editAnnotation returns an error.
 */
export const EditAnnotationResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/editAnnotation" }, { request }],
    [AnnotationConcept.editAnnotation, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// ==============================================================================
// Synchronizations for the 'resolveAnnotation' action
// purpose: change the resolved status of an annotation
// ==============================================================================

/**
 * Sync: ResolveAnnotationRequest
 * Description: Catches an API request to resolve an annotation and triggers the Annotation.resolveAnnotation action.
 */
export const ResolveAnnotationRequest: Sync = ({ request, resolver, annotation, resolved }) => ({
  when: actions([
    Requesting.request,
    { path: "/Annotation/resolveAnnotation", resolver, annotation, resolved },
    { request },
  ]),
  then: actions([AnnotationConcept.resolveAnnotation, { resolver, annotation, resolved }]),
});

/**
 * Sync: ResolveAnnotationResponse
 * Description: Responds to the original API request upon successful completion of Annotation.resolveAnnotation.
 */
export const ResolveAnnotationResponse: Sync = ({ request }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/resolveAnnotation" }, { request }],
    [AnnotationConcept.resolveAnnotation, {}, {}], // Match successful (empty) output
  ),
  then: actions([Requesting.respond, { request }]),
});

/**
 * Sync: ResolveAnnotationResponseError
 * Description: Responds to the original API request if Annotation.resolveAnnotation returns an error.
 */
export const ResolveAnnotationResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/resolveAnnotation" }, { request }],
    [AnnotationConcept.resolveAnnotation, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// ==============================================================================
// Synchronizations for the 'deleteAnnotation' action
// purpose: remove an annotation
// ==============================================================================

/**
 * Sync: DeleteAnnotationRequest
 * Description: Catches an API request to delete an annotation and triggers the Annotation.deleteAnnotation action.
 */
export const DeleteAnnotationRequest: Sync = ({ request, author, annotation }) => ({
  when: actions([
    Requesting.request,
    { path: "/Annotation/deleteAnnotation", author, annotation },
    { request },
  ]),
  then: actions([AnnotationConcept.deleteAnnotation, { author, annotation }]),
});

/**
 * Sync: DeleteAnnotationResponse
 * Description: Responds to the original API request upon successful completion of Annotation.deleteAnnotation.
 */
export const DeleteAnnotationResponse: Sync = ({ request }) => ({
  when: actions(
    [Requesting.request, { path: "/Annotation/deleteAnnotation" }, { request }],
    [AnnotationConcept.deleteAnnotation, {}, {}], // Match successful (empty) output
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
    [AnnotationConcept.deleteAnnotation, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// ==============================================================================
// Synchronizations for the '_getAnnotationsForRecipe' query
// purpose: retrieve all annotations for a given recipe
// ==============================================================================

/**
 * Sync: GetAnnotationsForRecipeRequest
 * Description: Handles an API request to get all annotations for a recipe, queries the concept, and responds.
 */
export const GetAnnotationsForRecipeRequest: Sync = ({ request, recipe, annotation, results }) => ({
  when: actions([
    Requesting.request,
    { path: "/Annotation/_getAnnotationsForRecipe", recipe },
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0]; // Capture the original frame to maintain context for response
    // Query the Annotation concept for all annotations matching the recipe
    frames = await frames.query(AnnotationConcept._getAnnotationsForRecipe, { recipe }, { annotation });

    // Handle the case where no annotations are found for the recipe
    if (frames.length === 0) {
      const response = { ...originalFrame, [results]: [] }; // Return an empty array for results
      return new Frames(response);
    }

    // Collect individual annotation objects (from potentially multiple frames) into a 'results' array
    return frames.collectAs([annotation], results);
  },
  then: actions([Requesting.respond, { request, results }]),
});

// ==============================================================================
// Synchronizations for the '_getAnnotationById' query
// purpose: retrieve a specific annotation by its ID
// ==============================================================================

/**
 * Sync: GetAnnotationByIdRequest
 * Description: Handles an API request to get a specific annotation by ID, queries the concept, and responds.
 */
export const GetAnnotationByIdRequest: Sync = ({ request, annotationId, annotation, results }) => ({
  when: actions([
    Requesting.request,
    { path: "/Annotation/_getAnnotationById", annotation: annotationId }, // 'annotation' is the parameter name in the spec
    { request },
  ]),
  where: async (frames) => {
    const originalFrame = frames[0];
    // Query the Annotation concept for the specific annotation by ID
    // Note: The query returns an array (AnnotationDoc[]), even if typically single item
    frames = await frames.query(AnnotationConcept._getAnnotationById, { annotation: annotationId }, { annotation });

    // Handle the case where the annotation is not found
    if (frames.length === 0) {
      const response = { ...originalFrame, [results]: [] }; // Return an empty array
      return new Frames(response);
    }
    // Collect the (single) annotation object into a 'results' array
    return frames.collectAs([annotation], results);
  },
  then: actions([Requesting.respond, { request, results }]),
});
```
