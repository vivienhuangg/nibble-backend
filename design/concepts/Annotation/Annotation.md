### concept Annotation \[User, Recipe]

**purpose** capture contextual notes on a specific ingredient or step without altering the recipe.\
**principle** after annotating a specific step or ingredient in a recipe, others viewing the recipe can see the annotation and discussion without the original recipe being modified.

**state**

- id : UUID
- author : User
- recipe : Recipe
- targetKind : {Ingredient | Step}
- targetIndex : Integer (index in the respective `ingredients` or `steps` list of the `recipe`)
- text : String
- created : DateTime
- resolved : Boolean

**actions**

- `annotate(author, recipe, targetKind, index, text) → annotation | error`\
  requires recipe exists; text ≠ ""; 0 ≤ index < |target list| for targetKind\
  effects adds new unresolved annotation, sets `created`
- `editAnnotation(author, annotation, newText) → Empty | error`\
  requires annotation exists and author = annotation.author\
  effects annotation.text := newText
- `resolveAnnotation(resolver, annotation, resolved) → Empty | error`\
  requires annotation exists and resolver canView annotation.recipe\
  effects annotation.resolved := resolved
- `deleteAnnotation(author, annotation) → Empty | error`\
  requires annotation exists and author = annotation.author\
  effects removes annotation

**queries**

- `_getAnnotationsForRecipe(recipe) → annotation: AnnotationDoc[] | error`\
  requires recipe exists (implicitly, as it will return an empty array if no annotations are found)\
  effects returns all annotations associated with the given recipe
- `_getAnnotationById(annotation) → annotation: AnnotationDoc[] | error`\
  requires annotation exists (implicitly, will return an empty array if not found)\
  effects returns the specific annotation by its ID
