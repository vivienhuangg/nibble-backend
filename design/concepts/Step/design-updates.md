# prompt: list only explicit, contrasting major design changes from the concept spec to its implementation. this should brief and bullet-pointed. if there are no changes, simply state "There were no changes."        

[@Step](Step.md)

[@implementation](implementation.md)

[@testing](testing.md)

[@README](../../../README.md)

[@rubric](../../background/rubric.md)

[@concept-state](../../background/detailed/concept-state.md)

[@concept-design-brief](../../background/concept-design-brief.md)

[@concept-design-overview](../../background/concept-design-overview.md)


# response:

*   **Persistence Model**:
    *   **Concept Spec**: The `Step` concept defines its `state` and notes that its `actions` are "Generally managed within Recipe/Version actions," leaving its data persistence model (i.e., whether it's a top-level entity or embedded) implicit.
    *   **Implementation**: The `Step` is explicitly implemented as an **embedded document** (value object) within `Recipe` documents in MongoDB, rather than as a standalone collection managed by its own `StepConcept` class. The `StepConcept` class itself is a structural placeholder and does not manage any database collections. **Note:** The `Version` concept mentioned in the spec was not implemented (see [Version/design-updates.md](../Version/design-updates.md)).

*   **State Field Changes**:
    *   **Concept Spec**: Includes a `duration: Optional[Integer]` field in the state.
    *   **Implementation**: The `duration` field was removed from the implementation. The `Step` interface only includes `description: string` and `notes?: string`.