### concept Notebook \[User, Recipe]

**purpose** organize shared collections of recipes and manage collaborative access.\
**principle** after creating a notebook and inviting members, those members can view all recipes shared to the notebook, while only the recipe owner retains the ability to edit the recipe itself.

**state**

*   id : UUID
*   owner : User
*   title : String
*   description : Optional\[String]
*   members : Set\[User] (Users who can view recipes in this notebook)
*   recipes : Set\[Recipe] (Recipes shared into this notebook)
*   created : DateTime

**actions**

*   `createNotebook(owner, title, description?) → notebook | error`\
    requires title ≠ ""\
    effects creates new notebook with owner ∈ members, sets `created`
*   `inviteMember(owner, notebook, member) → Empty | error`\
    requires owner = notebook.owner ∧ member exists\
    effects member ∈ notebook.members
*   `removeMember(owner, notebook, member) → Empty | error`\
    requires owner = notebook.owner ∧ member ∈ notebook.members ∧ member ≠ owner\
    effects member ∉ notebook.members
*   `shareRecipe(sharer, recipe, notebook) → Empty | error`\
    requires sharer = recipe.owner ∨ sharer ∈ notebook.members\
    effects recipe ∈ notebook.recipes (if not already present)
*   `unshareRecipe(requester, recipe, notebook) → Empty | error`\
    requires requester = recipe.owner ∨ requester = notebook.owner\
    effects recipe ∉ notebook.recipes
*   `deleteNotebook(owner, notebook) → Empty | error`\
    requires owner = notebook.owner\
    effects removes notebook and triggers associated unsharing

**queries**

*   `_getNotebookById(notebook) → notebook: NotebookDocument | error`\
    requires notebook exists\
    effects returns the notebook document
*   `_getNotebooksByOwner(owner) → notebook: NotebookDocument[] | error`\
    requires owner exists\
    effects returns all notebooks owned by the specified user
*   `_getNotebooksWithMember(member) → notebook: NotebookDocument[] | error`\
    requires member exists\
    effects returns all notebooks where the user is a member
*   `_getNotebooksContainingRecipe(recipe) → notebook: NotebookDocument[] | error`\
    requires recipe exists (implicitly)\
    effects returns all notebooks that contain the specified recipe
