### concept Ingredient

**purpose** specify the items and quantities needed so users can prepare the recipe.\
**principle** after defining ingredients with their quantities and units, users have a clear shopping list for making the recipe.

**state**

*   name : String
*   quantity : String (e.g., "1 cup", "2 tablespoons", "to taste")
*   unit : Optional\[String] (e.g., "cup", "tbsp", "g")
*   notes : Optional\[String] (e.g., "freshly chopped")

**actions**

*   (Ingredients are embedded data structures within Recipe; their lifecycle is managed by Recipe actions)
