# Nibble Final Design Comparison

## Final Product Snapshot
- **Cookbook landing** – the home view surfaces notebooks you own and ones shared with you, each rendering `RecipeCard` tiles with counts, tags, and inline delete affordances for owners (`../nibble-frontend/src/components/RecipeCard.vue`).
- **Flexible recipe workspace** – a single detail screen (`../nibble-frontend/src/components/RecipeView.vue`) handles viewing, inline editing, AI previews, sharing, and commenting, eliminating separate “version history” routes.
- **AI-supported editing** – the `DraftVersionModal` prompts Gemini, then overlays a draft banner that highlights changed ingredients/steps before you commit or discard (see `RecipeView.vue`).
- **Lightweight collaboration** – annotations appear as contextual overlays, comments are counted on cards, and notebooks gate access; owners can fork, share, or delete directly from the header.
- **Session-backed security** – the frontend partners with backend `Requesting`/`Sessioning` concepts to include session tokens on every mutating call, mirroring the Assignment 5 sync architecture.

## Changes Since Assignment 2 Concept Design
Reference: [Assignment 2 Concept Spec (snapshot)](../61040-portfolio/assignments/assignment2.md)

- **Removed `Version` / `VersionDraft` concepts**
  - Original plan: immutable version tree with dedicated history view (Assignment 2 “Version View” sketch) and transient drafts.
  - Final design: cut both concepts for scope; `Recipe` now stores canonical content, AI drafts stay ephemeral in memory, and lineage is tracked with a simple `forkedFrom` pointer.
  - Why: concept pairing inflated backend surface area and UI complexity without shipping value in time; removing them unblocked end-to-end AI-assisted editing.

- **Shifted AI workflow into `Recipe` concept**
  - Original: `Version.createVersion` plus `VersionDraft` managed prompt history and approvals.
  - Final: `Recipe.draftRecipeWithAI` returns a draft object; owners preview inside the same form and `applyDraft` commits changes in place.
  - Impact: fewer syncs, faster review loop, and UI can show proposed changes as inline highlights instead of launching a separate diff tool.

- **Adopted mutable recipe editing with guardrails**
  - Original: versions were immutable artifacts; editing the base recipe was out of scope.
  - Final: owners toggle an edit mode that swaps read-only fields for inputs, auto-expands text areas, and tracks unsaved changes with a “Draft” pill and skeleton save states.
  - Rationale: recipe authors needed a faster way to maintain living recipes; inline editing plus auto-save cues matched real cooking workflows better than spawning new versions for every typo.

- **Embedded `Ingredient`/`Step` as value objects**
  - Original spec treated them as standalone concepts with optional durations.
  - Final code defines them as interfaces embedded inside recipe documents, drops `duration`, and duplicates definitions per concept to keep independence.
  - Payoff: fewer database joins, easier diff highlighting, and alignment with how drafts ship structured arrays.

- **Authorization model evolved**
  - Original synchronizations assumed implicit access through notebooks; no explicit session model.
  - Final backend introduces `Requesting` + `Sessioning`, and every mutating UI flow starts with session validation, surfacing errors inline (e.g., “Invalid session”).
  - Result: consistent guardrails for sharing, forking, annotating, and AI requests.

- **Annotations stay tied to recipes**
  - Original narrative expected annotations on specific versions.
  - Final: with versions removed, annotations anchor to the base recipe, and UI highlights the ingredient/step target regardless of draft state.
  - Trade-off: forfeited per-version note history but kept the social layer shippable.

## Changes Since Assignment 4b Visual Design
Reference: [Assignment 4b Visual Design Deck](https://docs.google.com/presentation/d/1m3s5Uy1LVZKXgfObPIyMWVeZDDuP2tOky7HccuWHDUM/edit?usp=sharing)

- **Navigation & information density**
  - Slides proposed a persistent left sidebar for cookbooks plus a separate “Version View” route.
  - Final app collapses navigation into a top-level cookbook grid and contextual modals, reducing chrome and improving small-screen responsiveness.

- **Recipe header & status treatments**
  - Visual study showed static metadata (version number, shared-with badges) and segmented control buttons.
  - Current header swaps between read-only and edit states, introduces live save status (Saved / Draft / Saving…) and condenses cookbook badges into clickable pills below the title.

- **AI draft experience**
  - Deck illustrated a side-by-side diff comparing base vs. AI draft with color-coded callouts.
  - Implemented flow opens a modal prompt, then applies yellow inline highlights directly in the ingredient/step lists so cooks evaluate changes in context without leaving edit mode.

- **Annotation interaction**
  - Initial mocks placed comments in a right rail.
  - Actual UI uses popover overlays anchored to the clicked ingredient/step, letting cooks stay focused on the recipe while still reading or adding notes. A comment count badge on cards signals discussion at a glance.

- **Visual system refinements**
  - Palette pivoted from the rich jewel tones in Assignment 4b to a lighter neutral base with accent blues (matching the shipped CSS variables).
  - Introduced shimmer skeletons, modal overlays, and button states to align with asynchronous flows (AI generation, sharing, notebook creation).

- **Collaboration affordances**
  - Slides emphasized threaded discussion and explicit “Share to Notebook” checklists.
  - Final design keeps the checklist inside a modal launched inline from the recipe header, automatically offering notebook creation when none exist—streamlining a multi-step flow into a single overlay.

## Resulting Design Principles
- **One flexible surface beats many brittle ones** – by folding version history, AI review, and editing into a single recipe view, we reduced navigation friction while keeping the mental model coherent.
- **Ship the collaboration core, not the theoretical ideal** – removing deep versioning preserved the social loop (annotations, sharing, forks) and let AI assistance feel native rather than procedural.
- **Aim for trustworthy AI** – confidence badges, discard controls, and inline highlights make clear what the model touched before anything is saved.
- **Keep room for future evolutions** – the simplified data model still records `forkedFrom`, making it possible to reintroduce richer history views later without rewriting today’s workflows.

## Looking Ahead
- Consider re-adding a lightweight version timeline once adoption justifies it, using the existing `forkedFrom` genealogy.
- Extend annotation overlays into a full comment drawer when threads become deeper.
- Harden the AI prompt surface with preset intents and history once Requesting concept metrics show stable usage.
# Nibble Final Design Comparison

## Final Product Snapshot
- **Cookbook landing** – the home view surfaces notebooks you own and ones shared with you, each rendering `RecipeCard` tiles with counts, tags, and inline delete affordances for owners (`src/components/RecipeCard.vue`).  
- **Flexible recipe workspace** – a single detail screen (`src/components/RecipeView.vue`) handles viewing, inline editing, AI previews, sharing, and commenting, eliminating separate “version history” routes.  
- **AI-supported editing** – the `DraftVersionModal` prompts Gemini, then overlays a draft banner that highlights changed ingredients/steps before you commit or discard (`RecipeView.vue`).  
- **Lightweight collaboration** – annotations appear as contextual overlays, comments are counted on cards, and notebooks gate access; owners can fork, share, or delete directly from the header.  
- **Session-backed security** – the frontend partners with backend `Requesting`/`Sessioning` concepts to include session tokens on every mutating call, mirroring the Assignment 5 sync architecture.

## Changes Since Assignment 2 Concept Design
Reference: [Assignment 2 Concept Spec (snapshot)](../61040-portfolio/assignments/assignment2.md)

- **Removed `Version` / `VersionDraft` concepts**
  - Original plan: immutable version tree with dedicated history view (Assignment 2 “Version View” sketch) and transient drafts.  
  - Final design: cut both concepts for scope; `Recipe` now stores canonical content, AI drafts stay ephemeral in memory, and lineage is tracked with a simple `forkedFrom` pointer.  
  - Why: concept pairing inflated backend surface area and UI complexity without shipping value in time; removing them unblocked end-to-end AI-assisted editing.

- **Shifted AI workflow into `Recipe` concept**
  - Original: `Version.createVersion` + `VersionDraft` managed prompt history and approvals.  
  - Final: `Recipe.draftRecipeWithAI` returns a draft object; owners preview inside the same form and `applyDraft` commits changes in place.  
  - Impact: fewer syncs, faster review loop, and UI can show proposed changes as inline highlights instead of launching a separate diff tool.

- **Adopted mutable recipe editing with guardrails**
  - Original: versions were immutable artifacts; editing the base recipe was out of scope.  
  - Final: owners toggle an edit mode that swaps read-only fields for inputs, auto-expands text areas, and tracks unsaved changes with a “Draft” pill and skeleton save states.  
  - Rationale: recipe authors needed a faster way to maintain living recipes; inline editing plus auto-save cues matched real cooking workflows better than spawning new versions for every typo.

- **Embedded `Ingredient`/`Step` as value objects**
  - Original spec treated them as standalone concepts with optional durations.  
  - Final code defines them as interfaces embedded inside recipe documents, drops `duration`, and duplicates definitions per concept to keep independence.  
  - Payoff: fewer database joins, easier diff highlighting, and alignment with how drafts ship structured arrays.

- **Authorization model evolved**
  - Original synchronizations assumed implicit access through notebooks; no explicit session model.  
  - Final backend introduces `Requesting` + `Sessioning`, and every mutating UI flow starts with session validation, showing errors inline (e.g., “Invalid session”).  
  - Result: consistent guard rails for sharing, forking, annotating, and AI requests.

- **Annotations stay tied to recipes**
  - Original narrative expected annotations on specific versions.  
  - Final: with versions removed, annotations anchor to the base recipe, and UI highlights the ingredient/step target regardless of draft state.  
  - Trade-off: forfeited per-version note history but kept the social layer shippable.

## Changes Since Assignment 4b Visual Design
Reference: [Assignment 4b Visual Design Deck](https://docs.google.com/presentation/d/1m3s5Uy1LVZKXgfObPIyMWVeZDDuP2tOky7HccuWHDUM/edit?usp=sharing)

- **Navigation & information density**
  - Slides proposed a persistent left sidebar for cookbooks plus a separate “Version View” route.  
  - Final app collapses navigation into a top-level cookbook grid and contextual modals, reducing chrome and improving small-screen responsiveness.

- **Recipe header & status treatments**
  - Visual study showed static metadata (version number, shared-with badges) and segmented control buttons.  
  - Current header swaps between read-only and edit states, introduces live save status (Saved / Draft / Saving…) and condenses cookbook badges into clickable pills below the title.

- **AI draft experience**
  - Deck illustrated a side-by-side diff comparing base vs. AI draft with color-coded callouts.  
  - Implemented flow opens a modal prompt, then applies yellow inline highlights directly in the ingredient/step lists so cooks evaluate changes in context without leaving edit mode.

- **Annotation interaction**
  - Initial mocks placed comments in a right rail.  
  - Actual UI uses popover overlays anchored to the clicked ingredient/step, letting cooks stay focused on the recipe while still reading or adding notes. A comment count badge on cards signals discussion at a glance.

- **Visual system refinements**
  - Palette pivoted from the rich jewel tones in Assignment 4b to a lighter neutral base with accent blues (matching the shipped CSS variables).  
  - Introduced shimmer skeletons, modal overlays, and button states to align with asynchronous flows (AI generation, sharing, notebook creation).

- **Collaboration affordances**
  - Slides emphasized threaded discussion and explicit “Share to Notebook” checklists.  
  - Final design keeps the checklist inside a modal launched inline from the recipe header, automatically offering notebook creation when none exist—streamlining a multi-step flow into a single overlay.

## Resulting Design Principles
- **One flexible surface beats many brittle ones** – by folding version history, AI review, and editing into a single recipe view, we reduced navigation friction while keeping the mental model coherent.
- **Ship the collaboration core, not the theoretical ideal** – removing deep versioning preserved the social loop (annotations, sharing, forks) and let AI assistance feel native rather than procedural.
- **Aim for trustworthy AI** – confidence badges, discard controls, and inline highlights make clear what the model touched before anything is saved.
- **Keep room for future evolutions** – the simplified data model still records `forkedFrom`, making it possible to reintroduce richer history views later without rewriting today’s workflows.

## Looking Ahead
- Consider re-adding a lightweight version timeline once adoption justifies it, using the existing `forkedFrom` genealogy.  
- Extend annotation overlays into a full comment drawer when threads become deeper.  
- Harden the AI prompt surface with preset intents and history once Requesting concept metrics show stable usage.

