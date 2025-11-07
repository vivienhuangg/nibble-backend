# Project Reflection

## Challenges and Areas of Ease

* **Challenging:** Debugging late in the cycle, particularly after **4C** when moving from **concepts to syncs** introduced regressions and interaction effects.
* **Relatively Easy:** Rapid UI iteration. Directly experiencing awkward interfaces made it straightforward to specify concrete adjustments and delegate targeted fixes to Cursor/AI.

## What Went Well

* **Throughput under constraint:** Completing a shippable build within ~three weeks alongside coursework was feasible due to LLM-assisted acceleration. Cursor and the Context tool reduced boilerplate and improved iteration speed.
* **Execution with clear intent:** When objectives were precise (e.g., defined UI behavior or component structure), LLM prompts translated intent into working code efficiently.

## Mistakes and Preventive Measures

* **Initial misread of backend requirements:** Early implementation diverged from the specification, necessitating a restart and a shift to Context for spec-aligned generation.
  **Prevention next time:**

  * Prepare a one-page **requirements brief** (acceptance criteria, edge cases, non-goals) before writing code.
  * Use a **readiness checklist** (data model, sync semantics, error handling) to gate development.

## Skills Acquired

* **Integration literacy:** Clearer understanding of the backend–frontend contract (types, payloads, error surfaces).
* **Operational competence:** Basic deployment and environment configuration.
* **Diagnostic technique:** More effective use of browser developer tools (DOM/CSS inspection and network panel).

## Skills to Develop

* **Systematic debugging:** Stronger hypothesis-driven isolation (binary search, minimal repros, logging discipline).
* **Test discipline:** Earlier, test-first coverage for critical paths to protect refactors.
* **State management and validation:** More robust patterns for complex forms and cross-component state.

## Use of the Context Tool

* Generated backend scaffolding conforming to the assignment specification.
* Served as a durable record of design decisions and assumptions, aiding consistency during sync-related changes.

## Use of an Agentic Coding Tool (Cursor)

* Primary accelerator for the frontend: batch refactors, component scaffolding, and styling adjustments.
* Most effective when provided with concrete diffs, explicit UI intents, and local code context.

## Role of LLMs in Software Development

* **Appropriate roles:** Implementing well-specified features, automating repetitive code, refactoring with clear goals, and polishing UI details.
* **Limitations:** Open-ended ideation and vague prompts produce inconsistent outputs; precision and constraints are essential.
* **Process conclusion:** LLMs function best as **force multipliers** within a disciplined workflow. They amplify both good and poor directions; therefore requirements, tests, and small, reviewable changes are non-negotiable.

## Forward Plan

* Begin with a requirements brief and baseline tests.
* Use Context to maintain decision traceability; use Cursor for scoped edits and UI polish.
* Schedule a mid-project spec review before model transitions.
* Maintain a living regression checklist for critical user journeys.
