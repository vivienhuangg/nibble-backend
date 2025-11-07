### concept User

**purpose** enable secure identification and authentication so users can own and control their content.\
**principle** after registering with a username and password, a user can login to access and manage their recipes, notebooks, and annotations across sessions.

**state**

*   id : UUID
*   name : String
*   username : String
*   passwordHash : String (Note: In production, passwords should be hashed using bcrypt)
*   preferences : Map\[String, Any]

**actions**

*   `registerUser(name, username, password) → user | error`\
    requires no user with the given username already exists; name and password are non-empty strings\
    effects creates a new user, stores name, username, and passwordHash; initializes preferences to an empty map; returns the ID of the newly created user
*   `login(username, password) → user | error`\
    requires a user with the given username and password exists\
    effects returns the ID of the authenticated user
*   `updateProfile(user, newName?, newUsername?, newPreferences?) → Empty | error`\
    requires the user identified by user ID must exist; if newUsername is provided, it must be unique among other users\
    effects updates the name, username, and/or preferences for the specified user

**queries**

*   `_getUserDetails(user) → user: { name, username, preferences } | error`\
    requires a user with the given user ID exists\
    effects returns the details (name, username, preferences) of the specified user
*   `_getUserIDByUsername(username) → user: ID | error`\
    requires a user with the given username exists\
    effects returns the ID of the user with the specified username
