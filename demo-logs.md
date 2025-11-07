2025-11-07T21:55:56.916122504Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T21:55:56.916130264Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationRequest
2025-11-07T21:55:56.916133874Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationRequest
2025-11-07T21:55:56.916136054Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponse
2025-11-07T21:55:56.916138284Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponse
2025-11-07T21:55:56.916140404Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponseError
2025-11-07T21:55:56.916142474Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponseError
2025-11-07T21:55:56.916144724Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T21:55:56.916146944Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T21:55:56.916149074Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationRequest
2025-11-07T21:55:56.916151124Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationRequest
2025-11-07T21:55:56.916153244Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponse
2025-11-07T21:55:56.916159745Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponse
2025-11-07T21:55:56.916161954Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponseError
2025-11-07T21:55:56.916164234Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponseError
2025-11-07T21:55:56.916166325Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T21:55:56.916245207Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:07:57.212425831Z ==> Deploying...
2025-11-07T22:08:09.669918232Z Registering concept passthrough routes.
2025-11-07T22:08:09.670019961Z   -> /api/Annotation/deleteByRecipe
2025-11-07T22:08:09.670026742Z   -> /api/Annotation/_getAnnotationsForRecipe
2025-11-07T22:08:09.670035192Z   -> /api/Annotation/_getAnnotationById
2025-11-07T22:08:09.670132211Z   -> /api/Notebook/_getNotebookById
2025-11-07T22:08:09.670138881Z   -> /api/Notebook/_getNotebooksByOwner
2025-11-07T22:08:09.670142101Z   -> /api/Notebook/_getNotebooksWithMember
2025-11-07T22:08:09.670207607Z   -> /api/Notebook/_getNotebooksContainingRecipe
2025-11-07T22:08:09.670294934Z   -> /api/Recipe/addTag
2025-11-07T22:08:09.670308346Z   -> /api/Recipe/removeTag
2025-11-07T22:08:09.670367921Z   -> /api/Recipe/_getRecipeById
2025-11-07T22:08:09.670376701Z   -> /api/Recipe/_listRecipesByOwner
2025-11-07T22:08:09.670382092Z   -> /api/Recipe/_searchRecipesByTag
2025-11-07T22:08:09.670413085Z   -> /api/Recipe/_getForkCount
2025-11-07T22:08:09.670415875Z   -> /api/Recipe/_listForksOfRecipe
2025-11-07T22:08:09.67047478Z   -> /api/Sessioning/createSession
2025-11-07T22:08:09.67047799Z   -> /api/Sessioning/deleteSession
2025-11-07T22:08:09.670483571Z   -> /api/Sessioning/_getUser
2025-11-07T22:08:09.670486141Z   -> /api/Sessioning/_refreshSession
2025-11-07T22:08:09.670609072Z   -> /api/User/registerUser
2025-11-07T22:08:09.670693279Z   -> /api/User/_getUserDetails
2025-11-07T22:08:09.670697379Z   -> /api/User/_getUserIDByUsername
2025-11-07T22:08:09.670699489Z 
2025-11-07T22:08:09.67070238Z 🚀 Requesting server listening for POST requests at base path of /api/*
2025-11-07T22:08:09.671572014Z Listening on http://0.0.0.0:10000/ (http://localhost:10000/)
2025-11-07T22:08:18.19957388Z ==> Your service is live 🎉
2025-11-07T22:08:18.246461826Z ==> 
2025-11-07T22:08:18.288873053Z ==> ///////////////////////////////////////////////////////////
2025-11-07T22:08:18.33359688Z ==> 
2025-11-07T22:08:18.372575167Z ==> Available at your primary URL https://nibble-backend-1oq4.onrender.com
2025-11-07T22:08:18.411696114Z ==> 
2025-11-07T22:08:18.450084592Z ==> ///////////////////////////////////////////////////////////
2025-11-07T22:12:08.018305471Z [Requesting] Received request for path: /Recipe/draftRecipeWithAI
2025-11-07T22:12:08.019885076Z 🟢 Requesting.request ACTION CALLED with inputs: {
2025-11-07T22:12:08.019903158Z   "session": "019a6048-1789-7e3c-be19-11db018ae8d9",
2025-11-07T22:12:08.019907988Z   "recipe": "019a6041-760f-7df4-a471-4e113581f824",
2025-11-07T22:12:08.019913458Z   "goal": "make it simpler",
2025-11-07T22:12:08.019917929Z   "path": "/Recipe/draftRecipeWithAI"
2025-11-07T22:12:08.019921909Z }
2025-11-07T22:12:08.02004256Z 🟢 Generated request ID: 019a6060-7ed3-7303-922a-78ad3bd65782
2025-11-07T22:12:08.02005335Z 🟢 Inserting request doc into database...
2025-11-07T22:12:08.104255301Z 🟢 Request doc inserted successfully
2025-11-07T22:12:08.104293534Z 🟢 Returning request ID to sync engine: 019a6060-7ed3-7303-922a-78ad3bd65782
2025-11-07T22:12:08.104602541Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:12:08.106083498Z 
2025-11-07T22:12:08.106097189Z Requesting.request {
2025-11-07T22:12:08.10610274Z   session: '019a6048-1789-7e3c-be19-11db018ae8d9',
2025-11-07T22:12:08.10610721Z   recipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:12:08.106112431Z   goal: 'make it simpler',
2025-11-07T22:12:08.106117701Z   path: '/Recipe/draftRecipeWithAI'
2025-11-07T22:12:08.106122231Z } => { request: '019a6060-7ed3-7303-922a-78ad3bd65782' }
2025-11-07T22:12:08.106126442Z 
2025-11-07T22:12:08.106142323Z 🔵 SYNC ENGINE: Found 66 syncs for this action
2025-11-07T22:12:08.106165905Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:12:08.106521486Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:12:08.10657139Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:12:08.106592502Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:12:08.106631895Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftRequest
2025-11-07T22:12:08.106698251Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftRequest
2025-11-07T22:12:08.106703601Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftResponse
2025-11-07T22:12:08.106796299Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftResponse
2025-11-07T22:12:08.10680131Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:12:08.10692385Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:12:08.106930781Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeRequest
2025-11-07T22:12:08.106945942Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeRequest
2025-11-07T22:12:08.106956123Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeResponse
2025-11-07T22:12:08.107027659Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeResponse
2025-11-07T22:12:08.1070321Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:12:08.107077213Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:12:08.107080864Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:12:08.107120597Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:12:08.107124817Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:12:08.107190483Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:12:08.107194163Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeRequest
2025-11-07T22:12:08.107199814Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeRequest
2025-11-07T22:12:08.107202334Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeResponse
2025-11-07T22:12:08.10727332Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeResponse
2025-11-07T22:12:08.107276621Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:12:08.107344426Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:12:08.107348057Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:12:08.107450825Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:12:08.107467767Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:12:08.107795025Z 🔧 _getUser called with session: 019a6048-1789-7e3c-be19-11db018ae8d9
2025-11-07T22:12:08.180336566Z ✅ _getUser - Found user: 019a6041-1e82-76f1-be1b-19ebde0a35e0
2025-11-07T22:12:08.180512531Z 🔵 SYNC ENGINE: where() returned 1 frames
2025-11-07T22:12:08.180520442Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:12:20.082394814Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:12:20.085398712Z 
2025-11-07T22:12:20.085420104Z Recipe.draftRecipeWithAI {
2025-11-07T22:12:20.085425604Z   author: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:12:20.085429574Z   recipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:12:20.085433645Z   goal: 'make it simpler'
2025-11-07T22:12:20.085437635Z } => {
2025-11-07T22:12:20.085455167Z   draftId: '019a6060-7fb7-73ad-8550-73b40c691a87',
2025-11-07T22:12:20.085457907Z   baseRecipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:12:20.085460317Z   requester: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:12:20.085462777Z   goal: 'make it simpler',
2025-11-07T22:12:20.085465978Z   title: 'Simple Chicken Noodle Soup',
2025-11-07T22:12:20.085524003Z   ingredients: [
2025-11-07T22:12:20.085526873Z     {
2025-11-07T22:12:20.085529433Z       name: 'Boneless, Skinless Chicken Thighs or Breasts',
2025-11-07T22:12:20.085532763Z       quantity: '1.5',
2025-11-07T22:12:20.085535144Z       unit: 'lbs',
2025-11-07T22:12:20.085537474Z       notes: 'raw'
2025-11-07T22:12:20.085539954Z     },
2025-11-07T22:12:20.085543024Z     { name: 'Egg Noodles', quantity: '6', unit: 'ounces', notes: '' },
2025-11-07T22:12:20.085564916Z     { name: 'Chicken Broth', quantity: '8', unit: 'cups', notes: '' },
2025-11-07T22:12:20.085567586Z     { name: 'Carrots', quantity: '2', unit: 'medium', notes: 'diced' },
2025-11-07T22:12:20.085570247Z     { name: 'Celery Stalks', quantity: '2', unit: '', notes: 'diced' },
2025-11-07T22:12:20.085572697Z     {
2025-11-07T22:12:20.085575217Z       name: 'Yellow Onion',
2025-11-07T22:12:20.085577687Z       quantity: '1',
2025-11-07T22:12:20.085580207Z       unit: 'medium',
2025-11-07T22:12:20.085582648Z       notes: 'diced'
2025-11-07T22:12:20.085585078Z     },
2025-11-07T22:12:20.085587528Z     { name: 'Garlic', quantity: '4', unit: 'cloves', notes: 'minced' },
2025-11-07T22:12:20.085590048Z     { name: 'Olive Oil', quantity: '1', unit: 'tablespoon', notes: '' },
2025-11-07T22:12:20.085592579Z     { name: 'Dried Thyme', quantity: '1', unit: 'teaspoon', notes: '' },
2025-11-07T22:12:20.085595059Z     { name: 'Bay Leaf', quantity: '1', unit: '', notes: '' },
2025-11-07T22:12:20.085597529Z     {
2025-11-07T22:12:20.085599989Z       name: 'Fresh Parsley',
2025-11-07T22:12:20.085602429Z       quantity: '1/4',
2025-11-07T22:12:20.08560482Z       unit: 'cup',
2025-11-07T22:12:20.08560739Z       notes: 'chopped, for stirring in'
2025-11-07T22:12:20.08560986Z     },
2025-11-07T22:12:20.08561235Z     { name: 'Salt', quantity: '', unit: '', notes: 'to taste' },
2025-11-07T22:12:20.08561557Z     { name: 'Black Pepper', quantity: '', unit: '', notes: 'to taste' }
2025-11-07T22:12:20.085618041Z   ],
2025-11-07T22:12:20.085620561Z   steps: [
2025-11-07T22:12:20.085622991Z     {
2025-11-07T22:12:20.085626171Z       description: 'Pat chicken dry and season generously with salt and black pepper. Heat olive oil in a large pot or Dutch oven over medium-high heat. Add chicken and sear for 3-5 minutes per side, until deeply golden brown. Remove chicken from the pot and set aside.',
2025-11-07T22:12:20.085632652Z       notes: ''
2025-11-07T22:12:20.085635122Z     },
2025-11-07T22:12:20.085637583Z     {
2025-11-07T22:12:20.085640573Z       description: 'Reduce heat to medium. Add diced carrots, celery, and onion to the pot. Sauté for 7-10 minutes, stirring occasionally, until vegetables are softened, scraping up any browned bits from the bottom.',
2025-11-07T22:12:20.085642953Z       notes: ''
2025-11-07T22:12:20.085645383Z     },
2025-11-07T22:12:20.085647733Z     {
2025-11-07T22:12:20.085650664Z       description: 'Add minced garlic and dried thyme. Cook for 1 minute more, stirring constantly, until fragrant.',
2025-11-07T22:12:20.085653094Z       notes: ''
2025-11-07T22:12:20.085655534Z     },
2025-11-07T22:12:20.085657874Z     {
2025-11-07T22:12:20.085660814Z       description: 'Pour in chicken broth and add the bay leaf. Bring the mixture to a gentle boil, then reduce heat to medium-low and simmer for 15 minutes to allow flavors to meld.',
2025-11-07T22:12:20.085669105Z       notes: ''
2025-11-07T22:12:20.085671665Z     },
2025-11-07T22:12:20.085673975Z     {
2025-11-07T22:12:20.085677166Z       description: 'Shred or dice the browned chicken. Add the shredded chicken back to the pot. Add the egg noodles to the pot and simmer for 8-10 minutes, or until noodles are tender to your liking.',
2025-11-07T22:12:20.085679616Z       notes: ''
2025-11-07T22:12:20.085681986Z     },
2025-11-07T22:12:20.085684327Z     {
2025-11-07T22:12:20.085687477Z       description: 'Remove and discard the bay leaf. Stir in the chopped fresh parsley. Season with salt and black pepper to taste. Serve hot.',
2025-11-07T22:12:20.085690017Z       notes: ''
2025-11-07T22:12:20.085692447Z     }
2025-11-07T22:12:20.085694807Z   ],
2025-11-07T22:12:20.085699588Z   notes: 'This version simplifies the original recipe by reducing the number of ingredients and streamlining the steps. Complex flavor enhancers like leeks, white wine, rosemary, Parmesan rind, lemon, heavy cream, white pepper, and nutmeg have been removed. Fresh thyme was replaced with dried thyme for convenience. The cooking instructions are more direct, removing detailed explanations and merging some steps to make the process quicker and less intimidating.',
2025-11-07T22:12:20.085702098Z   confidence: 0.9,
2025-11-07T22:12:20.085704578Z   created: 2025-11-07T22:12:08.247Z,
2025-11-07T22:12:20.085707329Z   expires: 2025-11-08T22:12:08.247Z
2025-11-07T22:12:20.085709799Z }
2025-11-07T22:12:20.085711949Z 
2025-11-07T22:12:20.085714339Z 🔵 SYNC ENGINE: Found 2 syncs for this action
2025-11-07T22:12:20.085716789Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:12:20.085733061Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:12:20.085735661Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:12:20.085741201Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:12:20.085743632Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:12:20.157458411Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:12:20.158410753Z 
2025-11-07T22:12:20.158424364Z Requesting.respond {
2025-11-07T22:12:20.158428955Z   request: '019a6060-7ed3-7303-922a-78ad3bd65782',
2025-11-07T22:12:20.158431605Z   draftId: '019a6060-7fb7-73ad-8550-73b40c691a87',
2025-11-07T22:12:20.158434505Z   baseRecipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:12:20.158437285Z   requester: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:12:20.158440846Z   goal: 'make it simpler',
2025-11-07T22:12:20.158443826Z   title: 'Simple Chicken Noodle Soup',
2025-11-07T22:12:20.158446476Z   ingredients: [
2025-11-07T22:12:20.158467888Z     {
2025-11-07T22:12:20.158471958Z       name: 'Boneless, Skinless Chicken Thighs or Breasts',
2025-11-07T22:12:20.158475178Z       quantity: '1.5',
2025-11-07T22:12:20.158478059Z       unit: 'lbs',
2025-11-07T22:12:20.158480989Z       notes: 'raw'
2025-11-07T22:12:20.158483709Z     },
2025-11-07T22:12:20.1584875Z     { name: 'Egg Noodles', quantity: '6', unit: 'ounces', notes: '' },
2025-11-07T22:12:20.15849054Z     { name: 'Chicken Broth', quantity: '8', unit: 'cups', notes: '' },
2025-11-07T22:12:20.15849347Z     { name: 'Carrots', quantity: '2', unit: 'medium', notes: 'diced' },
2025-11-07T22:12:20.15849602Z     { name: 'Celery Stalks', quantity: '2', unit: '', notes: 'diced' },
2025-11-07T22:12:20.158498851Z     {
2025-11-07T22:12:20.158519322Z       name: 'Yellow Onion',
2025-11-07T22:12:20.158522563Z       quantity: '1',
2025-11-07T22:12:20.158525393Z       unit: 'medium',
2025-11-07T22:12:20.158528253Z       notes: 'diced'
2025-11-07T22:12:20.158531253Z     },
2025-11-07T22:12:20.158534154Z     { name: 'Garlic', quantity: '4', unit: 'cloves', notes: 'minced' },
2025-11-07T22:12:20.158540124Z     { name: 'Olive Oil', quantity: '1', unit: 'tablespoon', notes: '' },
2025-11-07T22:12:20.158543134Z     { name: 'Dried Thyme', quantity: '1', unit: 'teaspoon', notes: '' },
2025-11-07T22:12:20.158571537Z     { name: 'Bay Leaf', quantity: '1', unit: '', notes: '' },
2025-11-07T22:12:20.158575157Z     {
2025-11-07T22:12:20.158578007Z       name: 'Fresh Parsley',
2025-11-07T22:12:20.158580798Z       quantity: '1/4',
2025-11-07T22:12:20.158583588Z       unit: 'cup',
2025-11-07T22:12:20.158586408Z       notes: 'chopped, for stirring in'
2025-11-07T22:12:20.158589128Z     },
2025-11-07T22:12:20.158591659Z     { name: 'Salt', quantity: '', unit: '', notes: 'to taste' },
2025-11-07T22:12:20.158594469Z     { name: 'Black Pepper', quantity: '', unit: '', notes: 'to taste' }
2025-11-07T22:12:20.158597139Z   ],
2025-11-07T22:12:20.158600019Z   steps: [
2025-11-07T22:12:20.158602949Z     {
2025-11-07T22:12:20.15860775Z       description: 'Pat chicken dry and season generously with salt and black pepper. Heat olive oil in a large pot or Dutch oven over medium-high heat. Add chicken and sear for 3-5 minutes per side, until deeply golden brown. Remove chicken from the pot and set aside.',
2025-11-07T22:12:20.15861054Z       notes: ''
2025-11-07T22:12:20.15861349Z     },
2025-11-07T22:12:20.158615951Z     {
2025-11-07T22:12:20.158619421Z       description: 'Reduce heat to medium. Add diced carrots, celery, and onion to the pot. Sauté for 7-10 minutes, stirring occasionally, until vegetables are softened, scraping up any browned bits from the bottom.',
2025-11-07T22:12:20.158621871Z       notes: ''
2025-11-07T22:12:20.158624251Z     },
2025-11-07T22:12:20.158626551Z     {
2025-11-07T22:12:20.158629592Z       description: 'Add minced garlic and dried thyme. Cook for 1 minute more, stirring constantly, until fragrant.',
2025-11-07T22:12:20.158632072Z       notes: ''
2025-11-07T22:12:20.158634482Z     },
2025-11-07T22:12:20.158636943Z     {
2025-11-07T22:12:20.158640173Z       description: 'Pour in chicken broth and add the bay leaf. Bring the mixture to a gentle boil, then reduce heat to medium-low and simmer for 15 minutes to allow flavors to meld.',
2025-11-07T22:12:20.158642623Z       notes: ''
2025-11-07T22:12:20.158644903Z     },
2025-11-07T22:12:20.158647033Z     {
2025-11-07T22:12:20.158649933Z       description: 'Shred or dice the browned chicken. Add the shredded chicken back to the pot. Add the egg noodles to the pot and simmer for 8-10 minutes, or until noodles are tender to your liking.',
2025-11-07T22:12:20.158652484Z       notes: ''
2025-11-07T22:12:20.158654774Z     },
2025-11-07T22:12:20.158657154Z     {
2025-11-07T22:12:20.158660004Z       description: 'Remove and discard the bay leaf. Stir in the chopped fresh parsley. Season with salt and black pepper to taste. Serve hot.',
2025-11-07T22:12:20.158662254Z       notes: ''
2025-11-07T22:12:20.158664515Z     }
2025-11-07T22:12:20.158666735Z   ],
2025-11-07T22:12:20.158671385Z   notes: 'This version simplifies the original recipe by reducing the number of ingredients and streamlining the steps. Complex flavor enhancers like leeks, white wine, rosemary, Parmesan rind, lemon, heavy cream, white pepper, and nutmeg have been removed. Fresh thyme was replaced with dried thyme for convenience. The cooking instructions are more direct, removing detailed explanations and merging some steps to make the process quicker and less intimidating.',
2025-11-07T22:12:20.158687997Z   confidence: 0.9,
2025-11-07T22:12:20.158691317Z   created: 2025-11-07T22:12:08.247Z,
2025-11-07T22:12:20.158694667Z   expires: 2025-11-08T22:12:08.247Z
2025-11-07T22:12:20.158697658Z } => { request: '019a6060-7ed3-7303-922a-78ad3bd65782' }
2025-11-07T22:12:20.158700018Z 
2025-11-07T22:12:20.158702638Z 🔵 SYNC ENGINE: Found 0 syncs for this action
2025-11-07T22:12:20.15872516Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:12:20.15873026Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:12:20.158733321Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:12:20.158736931Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:12:20.158745612Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:12:20.158779025Z 🔵 SYNC ENGINE: where() returned 0 frames
2025-11-07T22:12:20.158785645Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:12:20.158788685Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:12:20.15883518Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:12:20.15883934Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:12:20.158889114Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:12:20.158894254Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:12:20.158931738Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:12:20.158935778Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:12:20.158967371Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:12:20.158973381Z 🔵 SYNC ENGINE: Checking sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:12:20.159017975Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:12:20.159021645Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginRequest
2025-11-07T22:12:20.159023456Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginRequest
2025-11-07T22:12:20.159026086Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseError
2025-11-07T22:12:20.159063599Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseError
2025-11-07T22:12:20.159066449Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseWithSession
2025-11-07T22:12:20.159116233Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseWithSession
2025-11-07T22:12:20.159119834Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:12:20.159123624Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:12:20.159126574Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:12:20.159143006Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:12:20.159146146Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:12:20.15919479Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:12:20.159212422Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:12:20.159220142Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:12:20.159223263Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:12:20.159274267Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:12:20.159281058Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:12:20.159288958Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:12:20.159291588Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:12:20.159332662Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:12:20.159336923Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:12:20.159383796Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:12:20.159388407Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:12:20.159401268Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:12:20.159405678Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:12:20.159453022Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:12:20.159458073Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Error
2025-11-07T22:12:20.159465794Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Error
2025-11-07T22:12:20.159469274Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Success
2025-11-07T22:12:20.159529719Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Success
2025-11-07T22:12:20.159534189Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:12:20.15953709Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:12:20.159556731Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:12:20.159612156Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:12:20.159615156Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:12:20.159648969Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:12:20.15965181Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:12:20.159686653Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:12:20.159689963Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:12:20.159695273Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:12:20.159698063Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:12:20.159752648Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:12:20.159815224Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:12:20.159862417Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:12:20.159866478Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:12:20.159901751Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:12:20.159905481Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:12:20.159935164Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:12:20.159964566Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:12:20.159995209Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:12:20.160027802Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:12:20.160049284Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:12:20.160051654Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:12:20.160260682Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:12:20.160267332Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:12:20.160270592Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:12:20.160273593Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:12:20.160276733Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:12:20.160279993Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateRequest
2025-11-07T22:12:20.160282624Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateRequest
2025-11-07T22:12:20.160285194Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponse
2025-11-07T22:12:20.160287874Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponse
2025-11-07T22:12:20.160290774Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponseError
2025-11-07T22:12:20.160890756Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponseError
2025-11-07T22:12:20.160900977Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:12:20.160903087Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:12:20.160904867Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationRequest
2025-11-07T22:12:20.160906657Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationRequest
2025-11-07T22:12:20.160908377Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponse
2025-11-07T22:12:20.160910107Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponse
2025-11-07T22:12:20.160911927Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:12:20.160913608Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:12:20.160915308Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:12:20.160917208Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:12:20.160918988Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationRequest
2025-11-07T22:12:20.160920678Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationRequest
2025-11-07T22:12:20.160922408Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponse
2025-11-07T22:12:20.160924069Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponse
2025-11-07T22:12:20.160925829Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponseError
2025-11-07T22:12:20.160933989Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponseError
2025-11-07T22:12:20.1609363Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:12:20.16093911Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:12:20.16094226Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationRequest
2025-11-07T22:12:20.16094506Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationRequest
2025-11-07T22:12:20.160947941Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponse
2025-11-07T22:12:20.160950671Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponse
2025-11-07T22:12:20.160953361Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:12:20.160956141Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:12:20.160959012Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:12:20.160962052Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:12:39.640619017Z [Requesting] Received request for path: /Recipe/draftRecipeWithAI
2025-11-07T22:12:39.640643539Z 🟢 Requesting.request ACTION CALLED with inputs: {
2025-11-07T22:12:39.640648489Z   "session": "019a6048-1789-7e3c-be19-11db018ae8d9",
2025-11-07T22:12:39.64065325Z   "recipe": "019a6041-760f-7df4-a471-4e113581f824",
2025-11-07T22:12:39.64065823Z   "goal": "make simpler",
2025-11-07T22:12:39.640663651Z   "path": "/Recipe/draftRecipeWithAI"
2025-11-07T22:12:39.640667981Z }
2025-11-07T22:12:39.640672201Z 🟢 Generated request ID: 019a6060-fa56-7827-bbe3-ae1379b15bea
2025-11-07T22:12:39.640676192Z 🟢 Inserting request doc into database...
2025-11-07T22:12:39.707336018Z 🟢 Request doc inserted successfully
2025-11-07T22:12:39.708123236Z 🟢 Returning request ID to sync engine: 019a6060-fa56-7827-bbe3-ae1379b15bea
2025-11-07T22:12:39.708138237Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:12:39.708142357Z 
2025-11-07T22:12:39.708147478Z Requesting.request {
2025-11-07T22:12:39.708151478Z   session: '019a6048-1789-7e3c-be19-11db018ae8d9',
2025-11-07T22:12:39.708155328Z   recipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:12:39.708159299Z   goal: 'make simpler',
2025-11-07T22:12:39.708182461Z   path: '/Recipe/draftRecipeWithAI'
2025-11-07T22:12:39.708187331Z } => { request: '019a6060-fa56-7827-bbe3-ae1379b15bea' }
2025-11-07T22:12:39.708191161Z 
2025-11-07T22:12:39.708195042Z 🔵 SYNC ENGINE: Found 66 syncs for this action
2025-11-07T22:12:39.708198982Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:12:39.708203372Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:12:39.708207423Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:12:39.708211273Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:12:39.708215033Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftRequest
2025-11-07T22:12:39.708218794Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftRequest
2025-11-07T22:12:39.708222634Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftResponse
2025-11-07T22:12:39.708226464Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftResponse
2025-11-07T22:12:39.708425582Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:12:39.708430002Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:12:39.708432992Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeRequest
2025-11-07T22:12:39.708435262Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeRequest
2025-11-07T22:12:39.708437432Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeResponse
2025-11-07T22:12:39.708439773Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeResponse
2025-11-07T22:12:39.708442183Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:12:39.708444433Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:12:39.708446603Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:12:39.708448913Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:12:39.708451134Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:12:39.708453274Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:12:39.708455464Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeRequest
2025-11-07T22:12:39.708457634Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeRequest
2025-11-07T22:12:39.708459984Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeResponse
2025-11-07T22:12:39.708462215Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeResponse
2025-11-07T22:12:39.708467615Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:12:39.708470015Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:12:39.708472215Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:12:39.708474426Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:12:39.708476756Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:12:39.708491107Z 🔧 _getUser called with session: 019a6048-1789-7e3c-be19-11db018ae8d9
2025-11-07T22:12:39.774603266Z ✅ _getUser - Found user: 019a6041-1e82-76f1-be1b-19ebde0a35e0
2025-11-07T22:12:39.774621288Z 🔵 SYNC ENGINE: where() returned 1 frames
2025-11-07T22:12:39.774624648Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:12:55.635522771Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:12:55.635647591Z 
2025-11-07T22:12:55.635660863Z Recipe.draftRecipeWithAI {
2025-11-07T22:12:55.635667213Z   author: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:12:55.635672373Z   recipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:12:55.635678064Z   goal: 'make simpler'
2025-11-07T22:12:55.635682544Z } => {
2025-11-07T22:12:55.635687685Z   draftId: '019a6060-fb20-7571-bb24-bc575296790b',
2025-11-07T22:12:55.635711047Z   baseRecipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:12:55.635716377Z   requester: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:12:55.635720468Z   goal: 'make simpler',
2025-11-07T22:12:55.635725408Z   title: 'Simplified Chicken Noodle Soup',
2025-11-07T22:12:55.635729158Z   ingredients: [
2025-11-07T22:12:55.635733139Z     {
2025-11-07T22:12:55.635736929Z       name: 'Chicken',
2025-11-07T22:12:55.635740869Z       quantity: '1.5',
2025-11-07T22:12:55.63574454Z       unit: 'lbs',
2025-11-07T22:12:55.63574832Z       notes: 'boneless, skinless thighs or breasts'
2025-11-07T22:12:55.635793564Z     },
2025-11-07T22:12:55.635796984Z     { name: 'Egg Noodles', quantity: '6', unit: 'ounces' },
2025-11-07T22:12:55.635799954Z     { name: 'Chicken Broth', quantity: '8', unit: 'cups' },
2025-11-07T22:12:55.635802855Z     { name: 'Carrots', quantity: '2', unit: 'medium', notes: 'diced' },
2025-11-07T22:12:55.635805075Z     { name: 'Celery Stalks', quantity: '2', unit: '', notes: 'diced' },
2025-11-07T22:12:55.635807475Z     {
2025-11-07T22:12:55.635809725Z       name: 'Yellow Onion',
2025-11-07T22:12:55.635812045Z       quantity: '1',
2025-11-07T22:12:55.635814266Z       unit: 'medium',
2025-11-07T22:12:55.635816476Z       notes: 'diced'
2025-11-07T22:12:55.635818806Z     },
2025-11-07T22:12:55.635821076Z     { name: 'Garlic', quantity: '4', unit: 'cloves', notes: 'minced' },
2025-11-07T22:12:55.635823406Z     { name: 'Olive Oil', quantity: '1', unit: 'tablespoon' },
2025-11-07T22:12:55.635825626Z     { name: 'Unsalted Butter', quantity: '1', unit: 'tablespoon' },
2025-11-07T22:12:55.635827947Z     {
2025-11-07T22:12:55.635830417Z       name: 'Fresh Thyme',
2025-11-07T22:12:55.635832987Z       quantity: '1',
2025-11-07T22:12:55.635835498Z       unit: 'tablespoon',
2025-11-07T22:12:55.635837658Z       notes: 'chopped'
2025-11-07T22:12:55.635839738Z     },
2025-11-07T22:12:55.635842098Z     { name: 'Bay Leaf', quantity: '1' },
2025-11-07T22:12:55.635844238Z     {
2025-11-07T22:12:55.635846688Z       name: 'Fresh Parsley',
2025-11-07T22:12:55.635849219Z       quantity: '2',
2025-11-07T22:12:55.635851459Z       unit: 'tablespoons',
2025-11-07T22:12:55.635853539Z       notes: 'chopped'
2025-11-07T22:12:55.635855599Z     },
2025-11-07T22:12:55.635857789Z     {
2025-11-07T22:12:55.635860169Z       name: 'Lemon',
2025-11-07T22:12:55.63586233Z       quantity: '1/2',
2025-11-07T22:12:55.63586461Z       unit: '',
2025-11-07T22:12:55.63586687Z       notes: 'for fresh juice'
2025-11-07T22:12:55.63586908Z     },
2025-11-07T22:12:55.635871281Z     { name: 'Salt', quantity: 'to taste' },
2025-11-07T22:12:55.635873521Z     { name: 'Black Pepper', quantity: 'to taste' }
2025-11-07T22:12:55.635875761Z   ],
2025-11-07T22:12:55.635878021Z   steps: [
2025-11-07T22:12:55.635880231Z     {
2025-11-07T22:12:55.635885702Z       description: 'Pat chicken dry and season generously with salt and black pepper. Heat olive oil and butter in a large pot or Dutch oven over medium-high heat. Add chicken and sear for 3-5 minutes per side, until deeply golden brown. Remove chicken from the pot and set aside on a plate.'
2025-11-07T22:12:55.635888442Z     },
2025-11-07T22:12:55.635891032Z     {
2025-11-07T22:12:55.635895172Z       description: 'Reduce heat to medium. Add diced carrots, celery, and onion to the pot. Sauté for 7-10 minutes, stirring occasionally, until vegetables are softened and translucent, scraping up any browned bits from the bottom of the pot.'
2025-11-07T22:12:55.635897503Z     },
2025-11-07T22:12:55.635899613Z     {
2025-11-07T22:12:55.635903933Z       description: 'Add minced garlic and chopped fresh thyme. Cook for 1 minute more, stirring constantly, until fragrant.'
2025-11-07T22:12:55.635906344Z     },
2025-11-07T22:12:55.635908454Z     {
2025-11-07T22:12:55.635912394Z       description: 'Pour in chicken broth and add the bay leaf. Bring the mixture to a gentle boil, then reduce heat to medium-low and simmer for 15 minutes to allow flavors to meld.'
2025-11-07T22:12:55.635914694Z     },
2025-11-07T22:12:55.635916804Z     {
2025-11-07T22:12:55.635919475Z       description: 'Shred or dice the browned chicken. Add the shredded chicken back to the pot.'
2025-11-07T22:12:55.635926735Z     },
2025-11-07T22:12:55.635929146Z     {
2025-11-07T22:12:55.635931446Z       description: 'Add the egg noodles to the pot and simmer for 8-10 minutes, or until noodles are tender to your liking.'
2025-11-07T22:12:55.635933676Z     },
2025-11-07T22:12:55.635935926Z     {
2025-11-07T22:12:55.635938286Z       description: 'Remove and discard the bay leaf. Stir in the chopped fresh parsley and fresh lemon juice.'
2025-11-07T22:12:55.635940536Z     },
2025-11-07T22:12:55.635942757Z     {
2025-11-07T22:12:55.635945297Z       description: 'Season with salt and black pepper to taste. Serve hot.'
2025-11-07T22:12:55.635947787Z     }
2025-11-07T22:12:55.635950457Z   ],
2025-11-07T22:12:55.635955058Z   notes: 'This version simplifies the recipe by removing ingredients such as leeks, dry white wine, Parmesan rind, heavy cream, rosemary, white pepper, nutmeg, and chives for garnish. The steps associated with these ingredients (e.g., deglazing with wine, adding cream) have also been removed or streamlined to make the cooking process quicker and with fewer specialized items, while still delivering a flavorful chicken noodle soup.',
2025-11-07T22:12:55.635957578Z   confidence: 1,
2025-11-07T22:12:55.635959918Z   created: 2025-11-07T22:12:39.841Z,
2025-11-07T22:12:55.635962338Z   expires: 2025-11-08T22:12:39.841Z
2025-11-07T22:12:55.635964509Z }
2025-11-07T22:12:55.635966479Z 
2025-11-07T22:12:55.636440289Z 🔵 SYNC ENGINE: Found 2 syncs for this action
2025-11-07T22:12:55.63656283Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:12:55.636740555Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:12:55.637470878Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:12:55.637477778Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:12:55.637480908Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:12:55.706945355Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:12:55.708351806Z 
2025-11-07T22:12:55.708365367Z Requesting.respond {
2025-11-07T22:12:55.708368727Z   request: '019a6060-fa56-7827-bbe3-ae1379b15bea',
2025-11-07T22:12:55.708371018Z   draftId: '019a6060-fb20-7571-bb24-bc575296790b',
2025-11-07T22:12:55.708373198Z   baseRecipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:12:55.708375468Z   requester: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:12:55.708377888Z   goal: 'make simpler',
2025-11-07T22:12:55.708380478Z   title: 'Simplified Chicken Noodle Soup',
2025-11-07T22:12:55.708382619Z   ingredients: [
2025-11-07T22:12:55.708384819Z     {
2025-11-07T22:12:55.708386999Z       name: 'Chicken',
2025-11-07T22:12:55.708389169Z       quantity: '1.5',
2025-11-07T22:12:55.708391329Z       unit: 'lbs',
2025-11-07T22:12:55.708574965Z       notes: 'boneless, skinless thighs or breasts'
2025-11-07T22:12:55.708582766Z     },
2025-11-07T22:12:55.708585156Z     { name: 'Egg Noodles', quantity: '6', unit: 'ounces' },
2025-11-07T22:12:55.708587796Z     { name: 'Chicken Broth', quantity: '8', unit: 'cups' },
2025-11-07T22:12:55.708590836Z     { name: 'Carrots', quantity: '2', unit: 'medium', notes: 'diced' },
2025-11-07T22:12:55.708593126Z     { name: 'Celery Stalks', quantity: '2', unit: '', notes: 'diced' },
2025-11-07T22:12:55.708595277Z     {
2025-11-07T22:12:55.708598037Z       name: 'Yellow Onion',
2025-11-07T22:12:55.708600327Z       quantity: '1',
2025-11-07T22:12:55.708602577Z       unit: 'medium',
2025-11-07T22:12:55.708615528Z       notes: 'diced'
2025-11-07T22:12:55.708618609Z     },
2025-11-07T22:12:55.708621129Z     { name: 'Garlic', quantity: '4', unit: 'cloves', notes: 'minced' },
2025-11-07T22:12:55.708624049Z     { name: 'Olive Oil', quantity: '1', unit: 'tablespoon' },
2025-11-07T22:12:55.708626889Z     { name: 'Unsalted Butter', quantity: '1', unit: 'tablespoon' },
2025-11-07T22:12:55.70862948Z     {
2025-11-07T22:12:55.70863238Z       name: 'Fresh Thyme',
2025-11-07T22:12:55.70863528Z       quantity: '1',
2025-11-07T22:12:55.70863769Z       unit: 'tablespoon',
2025-11-07T22:12:55.70864045Z       notes: 'chopped'
2025-11-07T22:12:55.708643411Z     },
2025-11-07T22:12:55.708646221Z     { name: 'Bay Leaf', quantity: '1' },
2025-11-07T22:12:55.708648521Z     {
2025-11-07T22:12:55.708651082Z       name: 'Fresh Parsley',
2025-11-07T22:12:55.708654042Z       quantity: '2',
2025-11-07T22:12:55.708657452Z       unit: 'tablespoons',
2025-11-07T22:12:55.708660272Z       notes: 'chopped'
2025-11-07T22:12:55.708662883Z     },
2025-11-07T22:12:55.708665273Z     {
2025-11-07T22:12:55.708667783Z       name: 'Lemon',
2025-11-07T22:12:55.708669993Z       quantity: '1/2',
2025-11-07T22:12:55.708672203Z       unit: '',
2025-11-07T22:12:55.708674353Z       notes: 'for fresh juice'
2025-11-07T22:12:55.708676694Z     },
2025-11-07T22:12:55.708678924Z     { name: 'Salt', quantity: 'to taste' },
2025-11-07T22:12:55.708681134Z     { name: 'Black Pepper', quantity: 'to taste' }
2025-11-07T22:12:55.708683304Z   ],
2025-11-07T22:12:55.708685565Z   steps: [
2025-11-07T22:12:55.708687735Z     {
2025-11-07T22:12:55.708690535Z       description: 'Pat chicken dry and season generously with salt and black pepper. Heat olive oil and butter in a large pot or Dutch oven over medium-high heat. Add chicken and sear for 3-5 minutes per side, until deeply golden brown. Remove chicken from the pot and set aside on a plate.'
2025-11-07T22:12:55.708692835Z     },
2025-11-07T22:12:55.708695395Z     {
2025-11-07T22:12:55.708698155Z       description: 'Reduce heat to medium. Add diced carrots, celery, and onion to the pot. Sauté for 7-10 minutes, stirring occasionally, until vegetables are softened and translucent, scraping up any browned bits from the bottom of the pot.'
2025-11-07T22:12:55.708700296Z     },
2025-11-07T22:12:55.708702436Z     {
2025-11-07T22:12:55.708705216Z       description: 'Add minced garlic and chopped fresh thyme. Cook for 1 minute more, stirring constantly, until fragrant.'
2025-11-07T22:12:55.708707336Z     },
2025-11-07T22:12:55.708709447Z     {
2025-11-07T22:12:55.708712077Z       description: 'Pour in chicken broth and add the bay leaf. Bring the mixture to a gentle boil, then reduce heat to medium-low and simmer for 15 minutes to allow flavors to meld.'
2025-11-07T22:12:55.708714237Z     },
2025-11-07T22:12:55.708716317Z     {
2025-11-07T22:12:55.708719377Z       description: 'Shred or dice the browned chicken. Add the shredded chicken back to the pot.'
2025-11-07T22:12:55.708721508Z     },
2025-11-07T22:12:55.708723638Z     {
2025-11-07T22:12:55.708725808Z       description: 'Add the egg noodles to the pot and simmer for 8-10 minutes, or until noodles are tender to your liking.'
2025-11-07T22:12:55.708727928Z     },
2025-11-07T22:12:55.708730048Z     {
2025-11-07T22:12:55.708732329Z       description: 'Remove and discard the bay leaf. Stir in the chopped fresh parsley and fresh lemon juice.'
2025-11-07T22:12:55.708734479Z     },
2025-11-07T22:12:55.708736579Z     {
2025-11-07T22:12:55.708738819Z       description: 'Season with salt and black pepper to taste. Serve hot.'
2025-11-07T22:12:55.70874568Z     }
2025-11-07T22:12:55.70874789Z   ],
2025-11-07T22:12:55.70875101Z   notes: 'This version simplifies the recipe by removing ingredients such as leeks, dry white wine, Parmesan rind, heavy cream, rosemary, white pepper, nutmeg, and chives for garnish. The steps associated with these ingredients (e.g., deglazing with wine, adding cream) have also been removed or streamlined to make the cooking process quicker and with fewer specialized items, while still delivering a flavorful chicken noodle soup.',
2025-11-07T22:12:55.70875325Z   confidence: 1,
2025-11-07T22:12:55.70875546Z   created: 2025-11-07T22:12:39.841Z,
2025-11-07T22:12:55.708757751Z   expires: 2025-11-08T22:12:39.841Z
2025-11-07T22:12:55.708759991Z } => { request: '019a6060-fa56-7827-bbe3-ae1379b15bea' }
2025-11-07T22:12:55.708761981Z 
2025-11-07T22:12:55.708764181Z 🔵 SYNC ENGINE: Found 0 syncs for this action
2025-11-07T22:12:55.708780613Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:12:55.708786983Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:12:55.708789383Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:12:55.708791643Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:12:55.708793784Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:12:55.708796024Z 🔵 SYNC ENGINE: where() returned 0 frames
2025-11-07T22:12:55.708798254Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:12:55.708800424Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:12:55.708802664Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:12:55.708804905Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:12:55.708807135Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:12:55.708809265Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:12:55.708815716Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:12:55.708856339Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:12:55.709007052Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:12:55.709012573Z 🔵 SYNC ENGINE: Checking sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:12:55.709015503Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:12:55.709018353Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginRequest
2025-11-07T22:12:55.709021173Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginRequest
2025-11-07T22:12:55.709023943Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseError
2025-11-07T22:12:55.709030994Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseError
2025-11-07T22:12:55.709086279Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseWithSession
2025-11-07T22:12:55.70909807Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseWithSession
2025-11-07T22:12:55.709161275Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:12:55.709167196Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:12:55.709233701Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:12:55.709395665Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:12:55.709402486Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:12:55.709405346Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:12:55.709411297Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:12:55.709414147Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:12:55.709416977Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:12:55.709419668Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:12:55.709422338Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:12:55.709429148Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:12:55.709432078Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:12:55.709534817Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:12:55.709539548Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:12:55.709542398Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:12:55.709674159Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:12:55.709705072Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:12:55.709834333Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:12:55.709839673Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:12:55.709842554Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Error
2025-11-07T22:12:55.709845604Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Error
2025-11-07T22:12:55.709848644Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Success
2025-11-07T22:12:55.709851534Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Success
2025-11-07T22:12:55.709854595Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:12:55.709858035Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:12:55.709860915Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:12:55.709863635Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:12:55.709866186Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:12:55.709944413Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:12:55.709948723Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:12:55.709952023Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:12:55.709954653Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:12:55.709957223Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:12:55.709959984Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:12:55.709966544Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:12:55.709996197Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:12:55.710059172Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:12:55.710067303Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:12:55.710204415Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:12:55.710209195Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:12:55.710211815Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:12:55.710214496Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:12:55.710217276Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:12:55.710220116Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:12:55.710238768Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:12:55.710892574Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:12:55.710902224Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:12:55.710905065Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:12:55.710921156Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:12:55.710924157Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:12:55.710926497Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:12:55.710929137Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateRequest
2025-11-07T22:12:55.710931667Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateRequest
2025-11-07T22:12:55.710933937Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponse
2025-11-07T22:12:55.710936318Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponse
2025-11-07T22:12:55.710938708Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponseError
2025-11-07T22:12:55.710940748Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponseError
2025-11-07T22:12:55.710942858Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:12:55.710945028Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:12:55.710947239Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationRequest
2025-11-07T22:12:55.710949409Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationRequest
2025-11-07T22:12:55.710951489Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponse
2025-11-07T22:12:55.710953549Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponse
2025-11-07T22:12:55.710955829Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:12:55.710957889Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:12:55.71095992Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:12:55.7109622Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:12:55.7109643Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationRequest
2025-11-07T22:12:55.710975041Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationRequest
2025-11-07T22:12:55.710977721Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponse
2025-11-07T22:12:55.710979871Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponse
2025-11-07T22:12:55.710982122Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponseError
2025-11-07T22:12:55.710984202Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponseError
2025-11-07T22:12:55.710986462Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:12:55.710988712Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:12:55.710990842Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationRequest
2025-11-07T22:12:55.710993062Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationRequest
2025-11-07T22:12:55.710995152Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponse
2025-11-07T22:12:55.710997203Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponse
2025-11-07T22:12:55.710999253Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:12:55.711001443Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:12:55.711003443Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:12:55.711005684Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:13:06.458860829Z [Requesting] Received request for path: /Recipe/updateRecipeDetails
2025-11-07T22:13:06.459001941Z 🟢 Requesting.request ACTION CALLED with inputs: {
2025-11-07T22:13:06.459014332Z   "session": "019a6048-1789-7e3c-be19-11db018ae8d9",
2025-11-07T22:13:06.459018843Z   "recipe": "019a6041-760f-7df4-a471-4e113581f824",
2025-11-07T22:13:06.459024003Z   "newTitle": "Chicken Noodle Soup",
2025-11-07T22:13:06.459028864Z   "newDescription": "",
2025-11-07T22:13:06.459033224Z   "newIngredients": [
2025-11-07T22:13:06.459037884Z     {
2025-11-07T22:13:06.459042115Z       "name": "Chicken",
2025-11-07T22:13:06.459046305Z       "quantity": "1.5",
2025-11-07T22:13:06.459050426Z       "unit": "lbs",
2025-11-07T22:13:06.459057816Z       "notes": "boneless, skinless thighs or breasts"
2025-11-07T22:13:06.459062527Z     },
2025-11-07T22:13:06.459067437Z     {
2025-11-07T22:13:06.459072417Z       "name": "Egg Noodles",
2025-11-07T22:13:06.459076588Z       "quantity": "6",
2025-11-07T22:13:06.459081108Z       "unit": "ounces",
2025-11-07T22:13:06.459085049Z       "notes": ""
2025-11-07T22:13:06.459089789Z     },
2025-11-07T22:13:06.459094059Z     {
2025-11-07T22:13:06.45909823Z       "name": "Chicken Broth",
2025-11-07T22:13:06.45910282Z       "quantity": "8",
2025-11-07T22:13:06.45910688Z       "unit": "cups",
2025-11-07T22:13:06.459110991Z       "notes": ""
2025-11-07T22:13:06.459115111Z     },
2025-11-07T22:13:06.459118991Z     {
2025-11-07T22:13:06.459123052Z       "name": "Carrots",
2025-11-07T22:13:06.459127202Z       "quantity": "2",
2025-11-07T22:13:06.459130982Z       "unit": "medium",
2025-11-07T22:13:06.459135433Z       "notes": "diced"
2025-11-07T22:13:06.459139453Z     },
2025-11-07T22:13:06.459143603Z     {
2025-11-07T22:13:06.459147694Z       "name": "Celery Stalks",
2025-11-07T22:13:06.459151804Z       "quantity": "2",
2025-11-07T22:13:06.459178126Z       "unit": "",
2025-11-07T22:13:06.459180917Z       "notes": "diced"
2025-11-07T22:13:06.459183417Z     },
2025-11-07T22:13:06.459186467Z     {
2025-11-07T22:13:06.459189417Z       "name": "Yellow Onion",
2025-11-07T22:13:06.459192088Z       "quantity": "1",
2025-11-07T22:13:06.459195098Z       "unit": "medium",
2025-11-07T22:13:06.459197928Z       "notes": "diced"
2025-11-07T22:13:06.459200608Z     },
2025-11-07T22:13:06.459203159Z     {
2025-11-07T22:13:06.459205659Z       "name": "Garlic",
2025-11-07T22:13:06.459208229Z       "quantity": "4",
2025-11-07T22:13:06.459210899Z       "unit": "cloves",
2025-11-07T22:13:06.45921336Z       "notes": "minced"
2025-11-07T22:13:06.45921576Z     },
2025-11-07T22:13:06.45922064Z     {
2025-11-07T22:13:06.45922325Z       "name": "Olive Oil",
2025-11-07T22:13:06.45922547Z       "quantity": "1",
2025-11-07T22:13:06.459227911Z       "unit": "tablespoon",
2025-11-07T22:13:06.459230481Z       "notes": ""
2025-11-07T22:13:06.459233341Z     },
2025-11-07T22:13:06.459235911Z     {
2025-11-07T22:13:06.459238471Z       "name": "Unsalted Butter",
2025-11-07T22:13:06.459241032Z       "quantity": "1",
2025-11-07T22:13:06.459243512Z       "unit": "tablespoon",
2025-11-07T22:13:06.459246312Z       "notes": ""
2025-11-07T22:13:06.459248832Z     },
2025-11-07T22:13:06.459251393Z     {
2025-11-07T22:13:06.459253903Z       "name": "Fresh Thyme",
2025-11-07T22:13:06.459256843Z       "quantity": "1",
2025-11-07T22:13:06.459259353Z       "unit": "tablespoon",
2025-11-07T22:13:06.459262194Z       "notes": "chopped"
2025-11-07T22:13:06.459264714Z     },
2025-11-07T22:13:06.459267094Z     {
2025-11-07T22:13:06.459269654Z       "name": "Bay Leaf",
2025-11-07T22:13:06.459272494Z       "quantity": "1",
2025-11-07T22:13:06.459275305Z       "unit": "",
2025-11-07T22:13:06.459277605Z       "notes": ""
2025-11-07T22:13:06.459279915Z     },
2025-11-07T22:13:06.459282415Z     {
2025-11-07T22:13:06.459287736Z       "name": "Fresh Parsley",
2025-11-07T22:13:06.459290506Z       "quantity": "2",
2025-11-07T22:13:06.459293216Z       "unit": "tablespoons",
2025-11-07T22:13:06.459295756Z       "notes": "chopped"
2025-11-07T22:13:06.459298537Z     },
2025-11-07T22:13:06.459301067Z     {
2025-11-07T22:13:06.459303617Z       "name": "Lemon",
2025-11-07T22:13:06.459305997Z       "quantity": "1/2",
2025-11-07T22:13:06.459308608Z       "unit": "",
2025-11-07T22:13:06.459311198Z       "notes": "for fresh juice"
2025-11-07T22:13:06.459313768Z     },
2025-11-07T22:13:06.459316138Z     {
2025-11-07T22:13:06.459318698Z       "name": "Salt",
2025-11-07T22:13:06.459321229Z       "quantity": "to taste",
2025-11-07T22:13:06.459323859Z       "unit": "",
2025-11-07T22:13:06.459326549Z       "notes": ""
2025-11-07T22:13:06.459328869Z     },
2025-11-07T22:13:06.459331259Z     {
2025-11-07T22:13:06.45933401Z       "name": "Black Pepper",
2025-11-07T22:13:06.45933651Z       "quantity": "to taste",
2025-11-07T22:13:06.45933897Z       "unit": "",
2025-11-07T22:13:06.459341691Z       "notes": ""
2025-11-07T22:13:06.459344171Z     }
2025-11-07T22:13:06.459346621Z   ],
2025-11-07T22:13:06.459349241Z   "newSteps": [
2025-11-07T22:13:06.459351701Z     {
2025-11-07T22:13:06.459356292Z       "description": "Pat chicken dry and season generously with salt and black pepper. Heat olive oil and butter in a large pot or Dutch oven over medium-high heat. Add chicken and sear for 3-5 minutes per side, until deeply golden brown. Remove chicken from the pot and set aside on a plate.",
2025-11-07T22:13:06.459365033Z       "notes": ""
2025-11-07T22:13:06.459367673Z     },
2025-11-07T22:13:06.459370303Z     {
2025-11-07T22:13:06.459373283Z       "description": "Reduce heat to medium. Add diced carrots, celery, and onion to the pot. Sauté for 7-10 minutes, stirring occasionally, until vegetables are softened and translucent, scraping up any browned bits from the bottom of the pot.",
2025-11-07T22:13:06.459376113Z       "notes": ""
2025-11-07T22:13:06.459378434Z     },
2025-11-07T22:13:06.459380774Z     {
2025-11-07T22:13:06.459384304Z       "description": "Add minced garlic and chopped fresh thyme. Cook for 1 minute more, stirring constantly, until fragrant.",
2025-11-07T22:13:06.459387284Z       "notes": ""
2025-11-07T22:13:06.459389675Z     },
2025-11-07T22:13:06.459392515Z     {
2025-11-07T22:13:06.459395595Z       "description": "Pour in chicken broth and add the bay leaf. Bring the mixture to a gentle boil, then reduce heat to medium-low and simmer for 15 minutes to allow flavors to meld.",
2025-11-07T22:13:06.459398665Z       "notes": ""
2025-11-07T22:13:06.459401285Z     },
2025-11-07T22:13:06.459403806Z     {
2025-11-07T22:13:06.459406946Z       "description": "Shred or dice the browned chicken. Add the shredded chicken back to the pot.",
2025-11-07T22:13:06.459409566Z       "notes": ""
2025-11-07T22:13:06.459411957Z     },
2025-11-07T22:13:06.459414407Z     {
2025-11-07T22:13:06.459417047Z       "description": "Add the egg noodles to the pot and simmer for 8-10 minutes, or until noodles are tender to your liking.",
2025-11-07T22:13:06.459421517Z       "notes": ""
2025-11-07T22:13:06.459423958Z     },
2025-11-07T22:13:06.459426268Z     {
2025-11-07T22:13:06.459428888Z       "description": "Remove and discard the bay leaf. Stir in the chopped fresh parsley and fresh lemon juice.",
2025-11-07T22:13:06.459431788Z       "notes": ""
2025-11-07T22:13:06.459434168Z     },
2025-11-07T22:13:06.459436769Z     {
2025-11-07T22:13:06.459439819Z       "description": "Season with salt and black pepper to taste. Serve hot.",
2025-11-07T22:13:06.459442359Z       "notes": ""
2025-11-07T22:13:06.459444839Z     }
2025-11-07T22:13:06.459447389Z   ],
2025-11-07T22:13:06.4594499Z   "path": "/Recipe/updateRecipeDetails"
2025-11-07T22:13:06.45945252Z }
2025-11-07T22:13:06.459467961Z 🟢 Generated request ID: 019a6061-631a-72ec-bb68-e8a9cd98d914
2025-11-07T22:13:06.459470842Z 🟢 Inserting request doc into database...
2025-11-07T22:13:06.529632818Z 🟢 Request doc inserted successfully
2025-11-07T22:13:06.529659821Z 🟢 Returning request ID to sync engine: 019a6061-631a-72ec-bb68-e8a9cd98d914
2025-11-07T22:13:06.529663961Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:13:06.529666131Z 
2025-11-07T22:13:06.529668851Z Requesting.request {
2025-11-07T22:13:06.529671162Z   session: '019a6048-1789-7e3c-be19-11db018ae8d9',
2025-11-07T22:13:06.529673522Z   recipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:13:06.529676342Z   newTitle: 'Chicken Noodle Soup',
2025-11-07T22:13:06.529678922Z   newDescription: '',
2025-11-07T22:13:06.529681462Z   newIngredients: [
2025-11-07T22:13:06.529684352Z     {
2025-11-07T22:13:06.529686903Z       name: 'Chicken',
2025-11-07T22:13:06.529689573Z       quantity: '1.5',
2025-11-07T22:13:06.529692093Z       unit: 'lbs',
2025-11-07T22:13:06.529695513Z       notes: 'boneless, skinless thighs or breasts'
2025-11-07T22:13:06.529697904Z     },
2025-11-07T22:13:06.529700574Z     { name: 'Egg Noodles', quantity: '6', unit: 'ounces', notes: '' },
2025-11-07T22:13:06.529718315Z     { name: 'Chicken Broth', quantity: '8', unit: 'cups', notes: '' },
2025-11-07T22:13:06.529720916Z     { name: 'Carrots', quantity: '2', unit: 'medium', notes: 'diced' },
2025-11-07T22:13:06.529723106Z     { name: 'Celery Stalks', quantity: '2', unit: '', notes: 'diced' },
2025-11-07T22:13:06.529725186Z     {
2025-11-07T22:13:06.529728126Z       name: 'Yellow Onion',
2025-11-07T22:13:06.529730287Z       quantity: '1',
2025-11-07T22:13:06.529732467Z       unit: 'medium',
2025-11-07T22:13:06.529735237Z       notes: 'diced'
2025-11-07T22:13:06.529737767Z     },
2025-11-07T22:13:06.529740177Z     { name: 'Garlic', quantity: '4', unit: 'cloves', notes: 'minced' },
2025-11-07T22:13:06.529742508Z     { name: 'Olive Oil', quantity: '1', unit: 'tablespoon', notes: '' },
2025-11-07T22:13:06.529744718Z     {
2025-11-07T22:13:06.529747028Z       name: 'Unsalted Butter',
2025-11-07T22:13:06.529749348Z       quantity: '1',
2025-11-07T22:13:06.529751498Z       unit: 'tablespoon',
2025-11-07T22:13:06.529754009Z       notes: ''
2025-11-07T22:13:06.529756529Z     },
2025-11-07T22:13:06.529759109Z     {
2025-11-07T22:13:06.529761869Z       name: 'Fresh Thyme',
2025-11-07T22:13:06.52976453Z       quantity: '1',
2025-11-07T22:13:06.52976729Z       unit: 'tablespoon',
2025-11-07T22:13:06.52977087Z       notes: 'chopped'
2025-11-07T22:13:06.52977336Z     },
2025-11-07T22:13:06.529776311Z     { name: 'Bay Leaf', quantity: '1', unit: '', notes: '' },
2025-11-07T22:13:06.529779141Z     {
2025-11-07T22:13:06.529781721Z       name: 'Fresh Parsley',
2025-11-07T22:13:06.529784141Z       quantity: '2',
2025-11-07T22:13:06.529786781Z       unit: 'tablespoons',
2025-11-07T22:13:06.529789252Z       notes: 'chopped'
2025-11-07T22:13:06.529791672Z     },
2025-11-07T22:13:06.529794222Z     {
2025-11-07T22:13:06.529796742Z       name: 'Lemon',
2025-11-07T22:13:06.529799202Z       quantity: '1/2',
2025-11-07T22:13:06.529801663Z       unit: '',
2025-11-07T22:13:06.529803783Z       notes: 'for fresh juice'
2025-11-07T22:13:06.529805983Z     },
2025-11-07T22:13:06.529808403Z     { name: 'Salt', quantity: 'to taste', unit: '', notes: '' },
2025-11-07T22:13:06.529810883Z     { name: 'Black Pepper', quantity: 'to taste', unit: '', notes: '' }
2025-11-07T22:13:06.529813204Z   ],
2025-11-07T22:13:06.529815404Z   newSteps: [
2025-11-07T22:13:06.529817894Z     {
2025-11-07T22:13:06.529821124Z       description: 'Pat chicken dry and season generously with salt and black pepper. Heat olive oil and butter in a large pot or Dutch oven over medium-high heat. Add chicken and sear for 3-5 minutes per side, until deeply golden brown. Remove chicken from the pot and set aside on a plate.',
2025-11-07T22:13:06.529823724Z       notes: ''
2025-11-07T22:13:06.529826095Z     },
2025-11-07T22:13:06.529828525Z     {
2025-11-07T22:13:06.529831705Z       description: 'Reduce heat to medium. Add diced carrots, celery, and onion to the pot. Sauté for 7-10 minutes, stirring occasionally, until vegetables are softened and translucent, scraping up any browned bits from the bottom of the pot.',
2025-11-07T22:13:06.529834105Z       notes: ''
2025-11-07T22:13:06.529836416Z     },
2025-11-07T22:13:06.529838836Z     {
2025-11-07T22:13:06.529841836Z       description: 'Add minced garlic and chopped fresh thyme. Cook for 1 minute more, stirring constantly, until fragrant.',
2025-11-07T22:13:06.529844096Z       notes: ''
2025-11-07T22:13:06.529846417Z     },
2025-11-07T22:13:06.529848737Z     {
2025-11-07T22:13:06.529852137Z       description: 'Pour in chicken broth and add the bay leaf. Bring the mixture to a gentle boil, then reduce heat to medium-low and simmer for 15 minutes to allow flavors to meld.',
2025-11-07T22:13:06.529867038Z       notes: ''
2025-11-07T22:13:06.529869559Z     },
2025-11-07T22:13:06.529871969Z     {
2025-11-07T22:13:06.529874999Z       description: 'Shred or dice the browned chicken. Add the shredded chicken back to the pot.',
2025-11-07T22:13:06.529877249Z       notes: ''
2025-11-07T22:13:06.529879769Z     },
2025-11-07T22:13:06.52988226Z     {
2025-11-07T22:13:06.52988485Z       description: 'Add the egg noodles to the pot and simmer for 8-10 minutes, or until noodles are tender to your liking.',
2025-11-07T22:13:06.5298873Z       notes: ''
2025-11-07T22:13:06.52988963Z     },
2025-11-07T22:13:06.52989184Z     {
2025-11-07T22:13:06.529893981Z       description: 'Remove and discard the bay leaf. Stir in the chopped fresh parsley and fresh lemon juice.',
2025-11-07T22:13:06.529896371Z       notes: ''
2025-11-07T22:13:06.529898581Z     },
2025-11-07T22:13:06.529900931Z     {
2025-11-07T22:13:06.529903551Z       description: 'Season with salt and black pepper to taste. Serve hot.',
2025-11-07T22:13:06.529905702Z       notes: ''
2025-11-07T22:13:06.529907892Z     }
2025-11-07T22:13:06.529910172Z   ],
2025-11-07T22:13:06.529912622Z   path: '/Recipe/updateRecipeDetails'
2025-11-07T22:13:06.529915142Z } => { request: '019a6061-631a-72ec-bb68-e8a9cd98d914' }
2025-11-07T22:13:06.529917443Z 
2025-11-07T22:13:06.529920123Z 🔵 SYNC ENGINE: Found 66 syncs for this action
2025-11-07T22:13:06.529922623Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:13:06.529925873Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:13:06.529928433Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:13:06.529931294Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:13:06.529933904Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftRequest
2025-11-07T22:13:06.529936324Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftRequest
2025-11-07T22:13:06.529938854Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftResponse
2025-11-07T22:13:06.529941495Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftResponse
2025-11-07T22:13:06.529944035Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:13:06.529946485Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:13:06.529965517Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeRequest
2025-11-07T22:13:06.529968567Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeRequest
2025-11-07T22:13:06.529971027Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeResponse
2025-11-07T22:13:06.529973137Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeResponse
2025-11-07T22:13:06.529975297Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:13:06.529977508Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:13:06.529979718Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:13:06.529981908Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:13:06.529984328Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:13:06.529986518Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:13:06.529989059Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeRequest
2025-11-07T22:13:06.53000699Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeRequest
2025-11-07T22:13:06.530009611Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeResponse
2025-11-07T22:13:06.530012031Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeResponse
2025-11-07T22:13:06.530014351Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:13:06.530016961Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:13:06.530019581Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:13:06.530022221Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:13:06.530028312Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:13:06.530031032Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:13:06.530033742Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:13:06.530036553Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:13:06.530039353Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:13:06.530041993Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:13:06.530044563Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:13:06.530047084Z 🔵 SYNC ENGINE: where() returned 0 frames
2025-11-07T22:13:06.530053544Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:13:06.530055964Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:13:06.530109079Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:13:06.530130901Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:13:06.530185235Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:13:06.530196187Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:13:06.59717401Z 🔧 _getUser called with session: 019a6048-1789-7e3c-be19-11db018ae8d9
2025-11-07T22:13:06.66317227Z ✅ _getUser - Found user: 019a6041-1e82-76f1-be1b-19ebde0a35e0
2025-11-07T22:13:06.729672112Z 🔵 SYNC ENGINE: where() returned 1 frames
2025-11-07T22:13:06.729698924Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:13:06.873563541Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:13:06.875363986Z 
2025-11-07T22:13:06.875380287Z Recipe.updateRecipeDetails {
2025-11-07T22:13:06.875384008Z   owner: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:13:06.875387598Z   recipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:13:06.875390288Z   newTitle: 'Chicken Noodle Soup',
2025-11-07T22:13:06.875393378Z   newDescription: '',
2025-11-07T22:13:06.875395658Z   newIngredients: [
2025-11-07T22:13:06.875397949Z     {
2025-11-07T22:13:06.875400219Z       name: 'Chicken',
2025-11-07T22:13:06.875402809Z       quantity: '1.5',
2025-11-07T22:13:06.875405219Z       unit: 'lbs',
2025-11-07T22:13:06.875407779Z       notes: 'boneless, skinless thighs or breasts'
2025-11-07T22:13:06.8754101Z     },
2025-11-07T22:13:06.87541268Z     { name: 'Egg Noodles', quantity: '6', unit: 'ounces', notes: '' },
2025-11-07T22:13:06.875415Z     { name: 'Chicken Broth', quantity: '8', unit: 'cups', notes: '' },
2025-11-07T22:13:06.875426971Z     { name: 'Carrots', quantity: '2', unit: 'medium', notes: 'diced' },
2025-11-07T22:13:06.875429471Z     { name: 'Celery Stalks', quantity: '2', unit: '', notes: 'diced' },
2025-11-07T22:13:06.875432452Z     {
2025-11-07T22:13:06.875435112Z       name: 'Yellow Onion',
2025-11-07T22:13:06.875437802Z       quantity: '1',
2025-11-07T22:13:06.875440682Z       unit: 'medium',
2025-11-07T22:13:06.875443173Z       notes: 'diced'
2025-11-07T22:13:06.875445483Z     },
2025-11-07T22:13:06.875448093Z     { name: 'Garlic', quantity: '4', unit: 'cloves', notes: 'minced' },
2025-11-07T22:13:06.875450633Z     { name: 'Olive Oil', quantity: '1', unit: 'tablespoon', notes: '' },
2025-11-07T22:13:06.875453303Z     {
2025-11-07T22:13:06.875455734Z       name: 'Unsalted Butter',
2025-11-07T22:13:06.875458574Z       quantity: '1',
2025-11-07T22:13:06.875461194Z       unit: 'tablespoon',
2025-11-07T22:13:06.875463864Z       notes: ''
2025-11-07T22:13:06.875466284Z     },
2025-11-07T22:13:06.875468925Z     {
2025-11-07T22:13:06.875471605Z       name: 'Fresh Thyme',
2025-11-07T22:13:06.875474025Z       quantity: '1',
2025-11-07T22:13:06.875476585Z       unit: 'tablespoon',
2025-11-07T22:13:06.875478885Z       notes: 'chopped'
2025-11-07T22:13:06.875481176Z     },
2025-11-07T22:13:06.875483626Z     { name: 'Bay Leaf', quantity: '1', unit: '', notes: '' },
2025-11-07T22:13:06.875486116Z     {
2025-11-07T22:13:06.875488606Z       name: 'Fresh Parsley',
2025-11-07T22:13:06.875491087Z       quantity: '2',
2025-11-07T22:13:06.875493677Z       unit: 'tablespoons',
2025-11-07T22:13:06.875496407Z       notes: 'chopped'
2025-11-07T22:13:06.875499017Z     },
2025-11-07T22:13:06.875501607Z     {
2025-11-07T22:13:06.875506118Z       name: 'Lemon',
2025-11-07T22:13:06.875508668Z       quantity: '1/2',
2025-11-07T22:13:06.875511128Z       unit: '',
2025-11-07T22:13:06.875513588Z       notes: 'for fresh juice'
2025-11-07T22:13:06.875516219Z     },
2025-11-07T22:13:06.875518919Z     { name: 'Salt', quantity: 'to taste', unit: '', notes: '' },
2025-11-07T22:13:06.875523619Z     { name: 'Black Pepper', quantity: 'to taste', unit: '', notes: '' }
2025-11-07T22:13:06.87552614Z   ],
2025-11-07T22:13:06.8755288Z   newSteps: [
2025-11-07T22:13:06.87553147Z     {
2025-11-07T22:13:06.87553522Z       description: 'Pat chicken dry and season generously with salt and black pepper. Heat olive oil and butter in a large pot or Dutch oven over medium-high heat. Add chicken and sear for 3-5 minutes per side, until deeply golden brown. Remove chicken from the pot and set aside on a plate.',
2025-11-07T22:13:06.875538031Z       notes: ''
2025-11-07T22:13:06.875540541Z     },
2025-11-07T22:13:06.875543051Z     {
2025-11-07T22:13:06.875571073Z       description: 'Reduce heat to medium. Add diced carrots, celery, and onion to the pot. Sauté for 7-10 minutes, stirring occasionally, until vegetables are softened and translucent, scraping up any browned bits from the bottom of the pot.',
2025-11-07T22:13:06.875574164Z       notes: ''
2025-11-07T22:13:06.875576604Z     },
2025-11-07T22:13:06.875578874Z     {
2025-11-07T22:13:06.875581794Z       description: 'Add minced garlic and chopped fresh thyme. Cook for 1 minute more, stirring constantly, until fragrant.',
2025-11-07T22:13:06.875584395Z       notes: ''
2025-11-07T22:13:06.875586925Z     },
2025-11-07T22:13:06.875589415Z     {
2025-11-07T22:13:06.875591985Z       description: 'Pour in chicken broth and add the bay leaf. Bring the mixture to a gentle boil, then reduce heat to medium-low and simmer for 15 minutes to allow flavors to meld.',
2025-11-07T22:13:06.875601046Z       notes: ''
2025-11-07T22:13:06.875603646Z     },
2025-11-07T22:13:06.875606027Z     {
2025-11-07T22:13:06.875609197Z       description: 'Shred or dice the browned chicken. Add the shredded chicken back to the pot.',
2025-11-07T22:13:06.875611717Z       notes: ''
2025-11-07T22:13:06.875614287Z     },
2025-11-07T22:13:06.875617117Z     {
2025-11-07T22:13:06.875619778Z       description: 'Add the egg noodles to the pot and simmer for 8-10 minutes, or until noodles are tender to your liking.',
2025-11-07T22:13:06.875622268Z       notes: ''
2025-11-07T22:13:06.875624658Z     },
2025-11-07T22:13:06.875627328Z     {
2025-11-07T22:13:06.875630129Z       description: 'Remove and discard the bay leaf. Stir in the chopped fresh parsley and fresh lemon juice.',
2025-11-07T22:13:06.875632909Z       notes: ''
2025-11-07T22:13:06.875635289Z     },
2025-11-07T22:13:06.875637899Z     {
2025-11-07T22:13:06.87564089Z       description: 'Season with salt and black pepper to taste. Serve hot.',
2025-11-07T22:13:06.87564382Z       notes: ''
2025-11-07T22:13:06.87564619Z     }
2025-11-07T22:13:06.87564876Z   ]
2025-11-07T22:13:06.87565121Z } => {}
2025-11-07T22:13:06.875653391Z 
2025-11-07T22:13:06.875655931Z 🔵 SYNC ENGINE: Found 2 syncs for this action
2025-11-07T22:13:06.875658511Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:13:06.875661241Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:13:06.875663941Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:13:06.875666442Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:13:06.875669442Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:13:06.944065257Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:13:06.944078648Z 
2025-11-07T22:13:06.944081948Z Requesting.respond { request: '019a6061-631a-72ec-bb68-e8a9cd98d914' } => { request: '019a6061-631a-72ec-bb68-e8a9cd98d914' }
2025-11-07T22:13:06.944084559Z 
2025-11-07T22:13:06.944087349Z 🔵 SYNC ENGINE: Found 0 syncs for this action
2025-11-07T22:13:06.944089999Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:13:06.944092629Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:13:06.9440952Z 🔵 SYNC ENGINE: Checking sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:13:06.94409778Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:13:06.94410019Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginRequest
2025-11-07T22:13:06.94410256Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginRequest
2025-11-07T22:13:06.944105081Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseError
2025-11-07T22:13:06.944107911Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseError
2025-11-07T22:13:06.944110571Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseWithSession
2025-11-07T22:13:06.944113861Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseWithSession
2025-11-07T22:13:06.944116842Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:13:06.944120242Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:13:06.944122742Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:13:06.944135473Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:13:06.944139944Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:13:06.944142994Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:13:06.944145734Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:13:06.944206059Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:13:06.94421101Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:13:06.94421461Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:13:06.94421695Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:13:06.94421899Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:13:06.94422098Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:13:06.94422308Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:13:06.944224741Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:13:06.944226481Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:13:06.944228151Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:13:06.944229901Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:13:06.944231571Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:13:06.944237822Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:13:06.944410847Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Error
2025-11-07T22:13:06.944417557Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Error
2025-11-07T22:13:06.944420497Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Success
2025-11-07T22:13:06.944422908Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Success
2025-11-07T22:13:06.944425588Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:13:06.944428278Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:13:06.944431138Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:13:06.944433879Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:13:06.944436679Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:13:06.944439399Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:13:06.94444518Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:13:06.945006428Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:13:06.945016339Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:13:06.945019169Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:13:06.945021689Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:13:06.945024289Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:13:06.94503371Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:13:06.9450364Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:13:06.94503915Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:13:06.945041731Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:13:06.945044301Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:13:06.945046711Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:13:06.945049222Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:13:06.945052002Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:13:06.945054402Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:13:06.945056882Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:13:06.945059532Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:13:06.945062172Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:13:06.945064783Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:13:06.945067453Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:13:06.945070013Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:13:06.945073104Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:13:06.945075704Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateRequest
2025-11-07T22:13:06.945078474Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateRequest
2025-11-07T22:13:06.945081324Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponse
2025-11-07T22:13:06.945083814Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponse
2025-11-07T22:13:06.945086235Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponseError
2025-11-07T22:13:06.945088745Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponseError
2025-11-07T22:13:06.945091375Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:13:06.945093775Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:13:06.945096375Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationRequest
2025-11-07T22:13:06.945099026Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationRequest
2025-11-07T22:13:06.945101646Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponse
2025-11-07T22:13:06.945104316Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponse
2025-11-07T22:13:06.945107076Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:13:06.945118007Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:13:06.945120688Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:13:06.945125868Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:13:06.945130629Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationRequest
2025-11-07T22:13:06.945223556Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationRequest
2025-11-07T22:13:06.945233437Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponse
2025-11-07T22:13:06.945770493Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponse
2025-11-07T22:13:06.945780264Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponseError
2025-11-07T22:13:06.945783064Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponseError
2025-11-07T22:13:06.945785815Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:13:06.945788545Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:13:06.946290778Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationRequest
2025-11-07T22:13:06.946297738Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationRequest
2025-11-07T22:13:06.946300749Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponse
2025-11-07T22:13:06.946303559Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponse
2025-11-07T22:13:06.94630849Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:13:06.94631196Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:13:06.94631483Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:13:06.94631764Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:13:21.407489275Z ==> Detected service running on port 10000
2025-11-07T22:13:21.532861664Z ==> Docs on specifying a port: https://render.com/docs/web-services#port-binding
2025-11-07T22:13:16.695993065Z [Requesting] Received request for path: /Recipe/deleteRecipe
2025-11-07T22:13:16.696034719Z 🟢 Requesting.request ACTION CALLED with inputs: {
2025-11-07T22:13:16.69604756Z   "session": "019a6048-1789-7e3c-be19-11db018ae8d9",
2025-11-07T22:13:16.696052011Z   "recipe": "019a6050-5985-7978-b313-11ba2966d875",
2025-11-07T22:13:16.696056661Z   "path": "/Recipe/deleteRecipe"
2025-11-07T22:13:16.696060481Z }
2025-11-07T22:13:16.696110466Z 🟢 Generated request ID: 019a6061-8b17-74ef-b4fe-7ef9ae6acc7b
2025-11-07T22:13:16.696118386Z 🟢 Inserting request doc into database...
2025-11-07T22:13:16.763424968Z 🟢 Request doc inserted successfully
2025-11-07T22:13:16.76345257Z 🟢 Returning request ID to sync engine: 019a6061-8b17-74ef-b4fe-7ef9ae6acc7b
2025-11-07T22:13:16.763464581Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:13:16.763719823Z 
2025-11-07T22:13:16.763745386Z Requesting.request {
2025-11-07T22:13:16.763753126Z   session: '019a6048-1789-7e3c-be19-11db018ae8d9',
2025-11-07T22:13:16.763758096Z   recipe: '019a6050-5985-7978-b313-11ba2966d875',
2025-11-07T22:13:16.763763357Z   path: '/Recipe/deleteRecipe'
2025-11-07T22:13:16.763767447Z } => { request: '019a6061-8b17-74ef-b4fe-7ef9ae6acc7b' }
2025-11-07T22:13:16.763771538Z 
2025-11-07T22:13:16.763777108Z 🔵 SYNC ENGINE: Found 66 syncs for this action
2025-11-07T22:13:16.763782299Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:13:16.76380289Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:13:16.763808221Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:13:16.763890768Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:13:16.763902989Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftRequest
2025-11-07T22:13:16.76390826Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftRequest
2025-11-07T22:13:16.763930611Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftResponse
2025-11-07T22:13:16.763934252Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftResponse
2025-11-07T22:13:16.763937222Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:13:16.763945963Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:13:16.763948943Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeRequest
2025-11-07T22:13:16.764013418Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeRequest
2025-11-07T22:13:16.764018189Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeResponse
2025-11-07T22:13:16.764022749Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeResponse
2025-11-07T22:13:16.764025019Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:13:16.764082534Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:13:16.764087665Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:13:16.764139409Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:13:16.76414502Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:13:16.764294873Z 🔵 SYNC ENGINE: where() returned 0 frames
2025-11-07T22:13:16.764308744Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:13:16.76438577Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:13:16.764536403Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:13:16.764573506Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeRequest
2025-11-07T22:13:16.764668425Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DeleteRecipeRequest
2025-11-07T22:13:16.764674945Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.DeleteRecipeRequest
2025-11-07T22:13:16.764855351Z 🔧 _getUser called with session: 019a6048-1789-7e3c-be19-11db018ae8d9
2025-11-07T22:13:16.841491093Z ✅ _getUser - Found user: 019a6041-1e82-76f1-be1b-19ebde0a35e0
2025-11-07T22:13:16.906426291Z 🔵 SYNC ENGINE: where() returned 1 frames
2025-11-07T22:13:16.906451793Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DeleteRecipeRequest
2025-11-07T22:13:17.039423386Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:13:17.039447978Z 
2025-11-07T22:13:17.039451698Z Recipe.deleteRecipe {
2025-11-07T22:13:17.039454278Z   requester: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:13:17.039457359Z   recipe: '019a6050-5985-7978-b313-11ba2966d875'
2025-11-07T22:13:17.039459689Z } => {}
2025-11-07T22:13:17.039461709Z 
2025-11-07T22:13:17.039463979Z 🔵 SYNC ENGINE: Found 4 syncs for this action
2025-11-07T22:13:17.03946697Z 🔵 SYNC ENGINE: Checking sync: recipe.CascadeAnnotationDeletion
2025-11-07T22:13:17.039485781Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.CascadeAnnotationDeletion
2025-11-07T22:13:17.039488601Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.CascadeAnnotationDeletion
2025-11-07T22:13:17.105425706Z Deleted 0 annotation(s) for recipe 019a6050-5985-7978-b313-11ba2966d875
2025-11-07T22:13:17.105441447Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:13:17.105576199Z 
2025-11-07T22:13:17.10559126Z Annotation.deleteByRecipe { recipeId: '019a6050-5985-7978-b313-11ba2966d875' } => {}
2025-11-07T22:13:17.10559445Z 
2025-11-07T22:13:17.105622823Z 🔵 SYNC ENGINE: Found 0 syncs for this action
2025-11-07T22:13:17.105878674Z 🔵 SYNC ENGINE: Checking sync: recipe.CascadeNotebookUnshareOnRecipeDeletion
2025-11-07T22:13:17.105883765Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.CascadeNotebookUnshareOnRecipeDeletion
2025-11-07T22:13:17.105886265Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.CascadeNotebookUnshareOnRecipeDeletion
2025-11-07T22:13:17.173048314Z 🔵 SYNC ENGINE: where() returned 1 frames
2025-11-07T22:13:17.173067706Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.CascadeNotebookUnshareOnRecipeDeletion
2025-11-07T22:13:17.320001976Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:13:17.321787699Z 
2025-11-07T22:13:17.32180259Z Notebook.unshareRecipe {
2025-11-07T22:13:17.321807141Z   requester: '019a6046-e92f-7e3f-ad07-5bf4349d0726',
2025-11-07T22:13:17.321809661Z   recipe: '019a6050-5985-7978-b313-11ba2966d875',
2025-11-07T22:13:17.321812051Z   notebook: '019a6047-47b0-7941-86b6-b578d334be0e'
2025-11-07T22:13:17.321814872Z } => {}
2025-11-07T22:13:17.321817482Z 
2025-11-07T22:13:17.321821732Z 🔵 SYNC ENGINE: Found 2 syncs for this action
2025-11-07T22:13:17.321825192Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:13:17.321828633Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:13:17.321831543Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:13:17.321834203Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:13:17.321836713Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:13:17.321839304Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:13:17.321841764Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeResponse
2025-11-07T22:13:17.321844004Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DeleteRecipeResponse
2025-11-07T22:13:17.321846304Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DeleteRecipeResponse
2025-11-07T22:13:17.388095466Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:13:17.388165421Z 
2025-11-07T22:13:17.388171262Z Requesting.respond { request: '019a6061-8b17-74ef-b4fe-7ef9ae6acc7b' } => { request: '019a6061-8b17-74ef-b4fe-7ef9ae6acc7b' }
2025-11-07T22:13:17.388173592Z 
2025-11-07T22:13:17.388177753Z 🔵 SYNC ENGINE: Found 0 syncs for this action
2025-11-07T22:13:17.388180733Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeResponse
2025-11-07T22:13:17.388231357Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeResponse
2025-11-07T22:13:17.388662414Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:13:17.388674605Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:13:17.388677205Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:13:17.388679516Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:13:17.388681876Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:13:17.388684306Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:13:17.388686826Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:13:17.388691646Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:13:17.388694127Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:13:17.388705248Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:13:17.388708058Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:13:17.388710318Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:13:17.388712538Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:13:17.388715128Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:13:17.388717419Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:13:17.388719899Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:13:17.388722159Z 🔵 SYNC ENGINE: Checking sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:13:17.388724569Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:13:17.38872696Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginRequest
2025-11-07T22:13:17.38872921Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginRequest
2025-11-07T22:13:17.38873147Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseError
2025-11-07T22:13:17.38873375Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseError
2025-11-07T22:13:17.38873611Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseWithSession
2025-11-07T22:13:17.388747321Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseWithSession
2025-11-07T22:13:17.388749791Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:13:17.388754652Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:13:17.388757072Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:13:17.388759342Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:13:17.388841069Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:13:17.388853551Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:13:17.388857121Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:13:17.388902465Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:13:17.388905795Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:13:17.388908255Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:13:17.388910605Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:13:17.388940808Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:13:17.388943908Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:13:17.388983071Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:13:17.388986212Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:13:17.388994883Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:13:17.388997333Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:13:17.389038226Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:13:17.389046587Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:13:17.389052328Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:13:17.389054868Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Error
2025-11-07T22:13:17.389106492Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Error
2025-11-07T22:13:17.389146716Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Success
2025-11-07T22:13:17.389149526Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Success
2025-11-07T22:13:17.389154536Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:13:17.389212541Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:13:17.389218942Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:13:17.389221912Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:13:17.389224312Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:13:17.389253925Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:13:17.389260115Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:13:17.389277677Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:13:17.389281357Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:13:17.389322651Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:13:17.389325841Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:13:17.389341822Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:13:17.389344873Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:13:17.389389686Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:13:17.389393687Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:13:17.389418139Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:13:17.389420819Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:13:17.389447071Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:13:17.389449722Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:13:17.389472784Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:13:17.389475404Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:13:17.389507827Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:13:17.389510707Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:13:17.389575182Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:13:17.389586853Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:13:17.389594674Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:13:17.389597524Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:13:17.389649319Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:13:17.389653629Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateRequest
2025-11-07T22:13:17.38966358Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateRequest
2025-11-07T22:13:17.3896664Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponse
2025-11-07T22:13:17.389696833Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponse
2025-11-07T22:13:17.389701763Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponseError
2025-11-07T22:13:17.389704733Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponseError
2025-11-07T22:13:17.389707544Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:13:17.389714214Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:13:17.389717365Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationRequest
2025-11-07T22:13:17.389728155Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationRequest
2025-11-07T22:13:17.389730995Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponse
2025-11-07T22:13:17.389789811Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponse
2025-11-07T22:13:17.389794271Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:13:17.389803972Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:13:17.389807772Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:13:17.389838715Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:13:17.389841705Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationRequest
2025-11-07T22:13:17.389851136Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationRequest
2025-11-07T22:13:17.389853816Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponse
2025-11-07T22:13:17.38990221Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponse
2025-11-07T22:13:17.389907441Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponseError
2025-11-07T22:13:17.389914031Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponseError
2025-11-07T22:13:17.389916831Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:13:17.389922762Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:13:17.389925582Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationRequest
2025-11-07T22:13:17.389959905Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationRequest
2025-11-07T22:13:17.389963995Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponse
2025-11-07T22:13:17.39001233Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponse
2025-11-07T22:13:17.39001832Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:13:17.390086896Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:13:17.390093717Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:13:17.390096717Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:14:57.998241282Z [Requesting] Received request for path: /Recipe/draftRecipeWithAI
2025-11-07T22:14:57.998794659Z 🟢 Requesting.request ACTION CALLED with inputs: {
2025-11-07T22:14:57.99880338Z   "session": "019a6048-1789-7e3c-be19-11db018ae8d9",
2025-11-07T22:14:57.99880644Z   "recipe": "019a6041-760f-7df4-a471-4e113581f824",
2025-11-07T22:14:57.998809531Z   "goal": "make it more complex flavor-wise",
2025-11-07T22:14:57.998811871Z   "path": "/Recipe/draftRecipeWithAI"
2025-11-07T22:14:57.998826292Z }
2025-11-07T22:14:57.998839423Z 🟢 Generated request ID: 019a6063-16ce-7726-ba1a-c48c0f7883f8
2025-11-07T22:14:57.998842354Z 🟢 Inserting request doc into database...
2025-11-07T22:14:58.078017943Z 🟢 Request doc inserted successfully
2025-11-07T22:14:58.078043095Z 🟢 Returning request ID to sync engine: 019a6063-16ce-7726-ba1a-c48c0f7883f8
2025-11-07T22:14:58.078046245Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:14:58.078148944Z 
2025-11-07T22:14:58.078156015Z Requesting.request {
2025-11-07T22:14:58.078159385Z   session: '019a6048-1789-7e3c-be19-11db018ae8d9',
2025-11-07T22:14:58.078162085Z   recipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:14:58.078165455Z   goal: 'make it more complex flavor-wise',
2025-11-07T22:14:58.078167956Z   path: '/Recipe/draftRecipeWithAI'
2025-11-07T22:14:58.078170606Z } => { request: '019a6063-16ce-7726-ba1a-c48c0f7883f8' }
2025-11-07T22:14:58.078176546Z 
2025-11-07T22:14:58.078179266Z 🔵 SYNC ENGINE: Found 66 syncs for this action
2025-11-07T22:14:58.078182587Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:14:58.079405132Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:14:58.079421033Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:14:58.079431104Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:14:58.079435294Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftRequest
2025-11-07T22:14:58.079440055Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftRequest
2025-11-07T22:14:58.079442385Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftResponse
2025-11-07T22:14:58.079444525Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftResponse
2025-11-07T22:14:58.079446785Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:14:58.079448995Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:14:58.079451146Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeRequest
2025-11-07T22:14:58.079453256Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeRequest
2025-11-07T22:14:58.079455456Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeResponse
2025-11-07T22:14:58.079457526Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeResponse
2025-11-07T22:14:58.079459767Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:14:58.079461857Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:14:58.079463947Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:14:58.079466037Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:14:58.079468637Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:14:58.079472137Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:14:58.079475858Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeRequest
2025-11-07T22:14:58.07949693Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeRequest
2025-11-07T22:14:58.07949983Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeResponse
2025-11-07T22:14:58.07950197Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeResponse
2025-11-07T22:14:58.07950407Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:14:58.07950614Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:14:58.0795083Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:14:58.079510421Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:14:58.079512591Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:14:58.079514691Z 🔧 _getUser called with session: 019a6048-1789-7e3c-be19-11db018ae8d9
2025-11-07T22:14:58.143660632Z ✅ _getUser - Found user: 019a6041-1e82-76f1-be1b-19ebde0a35e0
2025-11-07T22:14:58.143706356Z 🔵 SYNC ENGINE: where() returned 1 frames
2025-11-07T22:14:58.143711286Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:15:12.138275569Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:15:12.139633956Z 
2025-11-07T22:15:12.139644917Z Recipe.draftRecipeWithAI {
2025-11-07T22:15:12.139647807Z   author: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:15:12.139649697Z   recipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:15:12.139652288Z   goal: 'make it more complex flavor-wise'
2025-11-07T22:15:12.139654328Z } => {
2025-11-07T22:15:12.139656198Z   draftId: '019a6063-17a0-75d0-af3f-5198ab84bcad',
2025-11-07T22:15:12.139657968Z   baseRecipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:15:12.139659658Z   requester: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:15:12.139661728Z   goal: 'make it more complex flavor-wise',
2025-11-07T22:15:12.139663389Z   title: 'Complex Chicken Noodle Soup',
2025-11-07T22:15:12.139665069Z   ingredients: [
2025-11-07T22:15:12.139666949Z     {
2025-11-07T22:15:12.139669119Z       name: 'Chicken',
2025-11-07T22:15:12.139670839Z       quantity: '1.5',
2025-11-07T22:15:12.139672509Z       unit: 'lbs',
2025-11-07T22:15:12.139674839Z       notes: 'boneless, skinless thighs or breasts, for better searing potential'
2025-11-07T22:15:12.139676579Z     },
2025-11-07T22:15:12.13967831Z     { name: 'Egg Noodles', quantity: '6', unit: 'ounces' },
2025-11-07T22:15:12.13968036Z     {
2025-11-07T22:15:12.13968214Z       name: 'Chicken Broth',
2025-11-07T22:15:12.13968388Z       quantity: '8',
2025-11-07T22:15:12.13968556Z       unit: 'cups',
2025-11-07T22:15:12.139687311Z       notes: 'high-quality, low-sodium'
2025-11-07T22:15:12.139689001Z     },
2025-11-07T22:15:12.139691581Z     { name: 'Carrots', quantity: '2', unit: 'medium', notes: 'diced' },
2025-11-07T22:15:12.139693931Z     { name: 'Celery Stalks', quantity: '2', unit: '', notes: 'diced' },
2025-11-07T22:15:12.139695601Z     {
2025-11-07T22:15:12.139697291Z       name: 'Yellow Onion',
2025-11-07T22:15:12.139698961Z       quantity: '1',
2025-11-07T22:15:12.139700622Z       unit: 'medium',
2025-11-07T22:15:12.139702282Z       notes: 'diced'
2025-11-07T22:15:12.139703992Z     },
2025-11-07T22:15:12.139705642Z     {
2025-11-07T22:15:12.139707352Z       name: 'Leek',
2025-11-07T22:15:12.139709012Z       quantity: '1',
2025-11-07T22:15:12.139710693Z       unit: 'medium',
2025-11-07T22:15:12.139712373Z       notes: 'white and light green parts, thinly sliced and thoroughly washed'
2025-11-07T22:15:12.139726444Z     },
2025-11-07T22:15:12.139729574Z     { name: 'Garlic', quantity: '4', unit: 'cloves', notes: 'minced' },
2025-11-07T22:15:12.139732294Z     {
2025-11-07T22:15:12.139734875Z       name: 'Fresh Ginger',
2025-11-07T22:15:12.139737445Z       quantity: '1',
2025-11-07T22:15:12.139739755Z       unit: 'inch',
2025-11-07T22:15:12.139742065Z       notes: 'grated'
2025-11-07T22:15:12.139744385Z     },
2025-11-07T22:15:12.139746865Z     { name: 'Olive Oil', quantity: '1', unit: 'tablespoon' },
2025-11-07T22:15:12.139749516Z     { name: 'Unsalted Butter', quantity: '1', unit: 'tablespoon' },
2025-11-07T22:15:12.139752286Z     { name: 'Tomato Paste', quantity: '1', unit: 'tablespoon' },
2025-11-07T22:15:12.139755056Z     {
2025-11-07T22:15:12.139757617Z       name: 'Dry White Wine',
2025-11-07T22:15:12.139760187Z       quantity: '0.5',
2025-11-07T22:15:12.139762657Z       unit: 'cup',
2025-11-07T22:15:12.139765237Z       notes: 'e.g., Sauvignon Blanc, Pinot Grigio (optional, for deglazing)'
2025-11-07T22:15:12.139767937Z     },
2025-11-07T22:15:12.139770568Z     {
2025-11-07T22:15:12.139775818Z       name: 'Fresh Thyme',
2025-11-07T22:15:12.139778598Z       quantity: '1',
2025-11-07T22:15:12.139780899Z       unit: 'tablespoon',
2025-11-07T22:15:12.139783309Z       notes: 'chopped'
2025-11-07T22:15:12.139785879Z     },
2025-11-07T22:15:12.139788179Z     { name: 'Bay Leaf', quantity: '1', unit: '' },
2025-11-07T22:15:12.139790329Z     {
2025-11-07T22:15:12.13979254Z       name: 'Parmesan Rind',
2025-11-07T22:15:12.13979466Z       quantity: '1',
2025-11-07T22:15:12.13979684Z       unit: '',
2025-11-07T22:15:12.13979907Z       notes: 'approximately 3-4 inches (optional, for umami depth)'
2025-11-07T22:15:12.13980135Z     },
2025-11-07T22:15:12.13980351Z     {
2025-11-07T22:15:12.139805721Z       name: 'Fresh Parsley',
2025-11-07T22:15:12.139807811Z       quantity: '2',
2025-11-07T22:15:12.139809921Z       unit: 'tablespoons',
2025-11-07T22:15:12.139811991Z       notes: 'chopped'
2025-11-07T22:15:12.139814161Z     },
2025-11-07T22:15:12.139816382Z     {
2025-11-07T22:15:12.139818482Z       name: 'Lemon',
2025-11-07T22:15:12.139820642Z       quantity: '0.5',
2025-11-07T22:15:12.139822772Z       unit: '',
2025-11-07T22:15:12.139824862Z       notes: 'for fresh juice'
2025-11-07T22:15:12.139827152Z     },
2025-11-07T22:15:12.139829383Z     {
2025-11-07T22:15:12.139831843Z       name: 'Fish Sauce or Soy Sauce',
2025-11-07T22:15:12.139834023Z       quantity: '1',
2025-11-07T22:15:12.139836263Z       unit: 'teaspoon',
2025-11-07T22:15:12.139838573Z       notes: 'optional, for additional umami'
2025-11-07T22:15:12.139840814Z     },
2025-11-07T22:15:12.139843034Z     { name: 'Salt', quantity: 'to', unit: 'taste' },
2025-11-07T22:15:12.139845284Z     { name: 'Black Pepper', quantity: 'to', unit: 'taste' },
2025-11-07T22:15:12.139847514Z     {
2025-11-07T22:15:12.139849774Z       name: 'White Pepper',
2025-11-07T22:15:12.139852045Z       quantity: '0.25',
2025-11-07T22:15:12.139854305Z       unit: 'teaspoon',
2025-11-07T22:15:12.139856525Z       notes: 'optional, for subtle heat and brightness'
2025-11-07T22:15:12.139858765Z     }
2025-11-07T22:15:12.139860985Z   ],
2025-11-07T22:15:12.139863206Z   steps: [
2025-11-07T22:15:12.139865456Z     {
2025-11-07T22:15:12.139870406Z       description: 'Pat chicken dry and season generously with salt, black pepper, and a pinch of white pepper (if using). Heat olive oil and butter in a large pot or Dutch oven over medium-high heat. Add chicken and sear for 4-6 minutes per side, until deeply golden brown with a rich crust. Remove chicken from the pot and set aside on a plate.',
2025-11-07T22:15:12.139878197Z       notes: 'Deeper sear creates more flavor. White pepper adds a different layer of subtle heat.'
2025-11-07T22:15:12.139880667Z     },
2025-11-07T22:15:12.139882917Z     {
2025-11-07T22:15:12.139886957Z       description: 'Reduce heat to medium. Add diced carrots, celery, onion, and sliced leeks to the pot. Sauté for 8-12 minutes, stirring occasionally, until vegetables are softened and translucent, scraping up any browned bits from the bottom of the pot.',
2025-11-07T22:15:12.139889318Z       notes: 'Leeks add a sweeter, more nuanced allium flavor.'
2025-11-07T22:15:12.139891668Z     },
2025-11-07T22:15:12.139893998Z     {
2025-11-07T22:15:12.139897049Z       description: 'Add minced garlic, grated fresh ginger, and tomato paste. Cook for 2 minutes more, stirring constantly, allowing the tomato paste to caramelize slightly and deepen in color, until fragrant.',
2025-11-07T22:15:12.139899739Z       notes: 'Ginger adds a fresh, warming complexity. Caramelizing tomato paste builds umami and richness.'
2025-11-07T22:15:12.139902039Z     },
2025-11-07T22:15:12.139904349Z     {
2025-11-07T22:15:12.13991069Z       description: 'If using, pour in dry white wine to deglaze the pot, scraping the bottom vigorously to loosen any browned bits. Let the wine reduce by half, about 2-3 minutes.',
2025-11-07T22:15:12.1399136Z       notes: 'Deglazing with wine adds acidity and depth, capturing all the flavorful fond.'
2025-11-07T22:15:12.13991615Z     },
2025-11-07T22:15:12.13991879Z     {
2025-11-07T22:15:12.139936512Z       description: 'Pour in high-quality chicken broth, add the bay leaf, fresh thyme, and the Parmesan rind (if using). Bring the mixture to a gentle boil, then reduce heat to medium-low and simmer for 20-25 minutes to allow flavors to meld and deepen.',
2025-11-07T22:15:12.139939792Z       notes: 'Using high-quality broth and adding Parmesan rind significantly boosts umami and savory depth during simmering.'
2025-11-07T22:15:12.139942402Z     },
2025-11-07T22:15:12.139944962Z     {
2025-11-07T22:15:12.139947403Z       description: 'Shred or dice the browned chicken. Add the shredded chicken back to the pot.',
2025-11-07T22:15:12.139949883Z       notes: ''
2025-11-07T22:15:12.139952373Z     },
2025-11-07T22:15:12.139954633Z     {
2025-11-07T22:15:12.139956994Z       description: 'Add the egg noodles to the pot and simmer for 8-10 minutes, or until noodles are tender to your liking.',
2025-11-07T22:15:12.139959254Z       notes: ''
2025-11-07T22:15:12.139961694Z     },
2025-11-07T22:15:12.139964044Z     {
2025-11-07T22:15:12.139967055Z       description: 'Remove and discard the bay leaf and Parmesan rind. Stir in the chopped fresh parsley and fresh lemon juice.',
2025-11-07T22:15:12.139969455Z       notes: 'The rind has imparted its flavor and is no longer needed.'
2025-11-07T22:15:12.139971825Z     },
2025-11-07T22:15:12.139974165Z     {
2025-11-07T22:15:12.139976545Z       description: 'Stir in fish sauce or soy sauce (if using) for an extra layer of umami. Season with additional salt, black pepper, and white pepper (if desired) to taste. Serve hot.',
2025-11-07T22:15:12.139978825Z       notes: 'Fish sauce or soy sauce provides a secret weapon for profound savory depth without overtly tasting like the ingredient itself.'
2025-11-07T22:15:12.139981076Z     }
2025-11-07T22:15:12.139983296Z   ],
2025-11-07T22:15:12.139986766Z   notes: 'The modified recipe introduces several layers of flavor complexity through additional aromatics (leek, ginger), umami boosters (tomato paste, Parmesan rind, fish/soy sauce), deglazing with white wine for acidity and depth, and emphasizing technique like more intense searing and caramelization. White pepper is added for a subtle, different kind of heat.',
2025-11-07T22:15:12.139994397Z   confidence: 1,
2025-11-07T22:15:12.139996887Z   created: 2025-11-07T22:14:58.208Z,
2025-11-07T22:15:12.139999497Z   expires: 2025-11-08T22:14:58.208Z
2025-11-07T22:15:12.140001967Z }
2025-11-07T22:15:12.140004408Z 
2025-11-07T22:15:12.140006918Z 🔵 SYNC ENGINE: Found 2 syncs for this action
2025-11-07T22:15:12.140009678Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:15:12.140023789Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:15:12.14002688Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:15:12.1400295Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:15:12.14003187Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:15:12.208534154Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:15:12.210110219Z 
2025-11-07T22:15:12.210128711Z Requesting.respond {
2025-11-07T22:15:12.210134751Z   request: '019a6063-16ce-7726-ba1a-c48c0f7883f8',
2025-11-07T22:15:12.210137672Z   draftId: '019a6063-17a0-75d0-af3f-5198ab84bcad',
2025-11-07T22:15:12.210140392Z   baseRecipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:15:12.210143022Z   requester: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:15:12.210146412Z   goal: 'make it more complex flavor-wise',
2025-11-07T22:15:12.210149302Z   title: 'Complex Chicken Noodle Soup',
2025-11-07T22:15:12.210151983Z   ingredients: [
2025-11-07T22:15:12.210154743Z     {
2025-11-07T22:15:12.210157723Z       name: 'Chicken',
2025-11-07T22:15:12.210160354Z       quantity: '1.5',
2025-11-07T22:15:12.210162914Z       unit: 'lbs',
2025-11-07T22:15:12.210166314Z       notes: 'boneless, skinless thighs or breasts, for better searing potential'
2025-11-07T22:15:12.210169114Z     },
2025-11-07T22:15:12.210172435Z     { name: 'Egg Noodles', quantity: '6', unit: 'ounces' },
2025-11-07T22:15:12.210174985Z     {
2025-11-07T22:15:12.210178345Z       name: 'Chicken Broth',
2025-11-07T22:15:12.210181145Z       quantity: '8',
2025-11-07T22:15:12.210183616Z       unit: 'cups',
2025-11-07T22:15:12.210186306Z       notes: 'high-quality, low-sodium'
2025-11-07T22:15:12.210188856Z     },
2025-11-07T22:15:12.210192406Z     { name: 'Carrots', quantity: '2', unit: 'medium', notes: 'diced' },
2025-11-07T22:15:12.210195306Z     { name: 'Celery Stalks', quantity: '2', unit: '', notes: 'diced' },
2025-11-07T22:15:12.210197957Z     {
2025-11-07T22:15:12.210200417Z       name: 'Yellow Onion',
2025-11-07T22:15:12.210203327Z       quantity: '1',
2025-11-07T22:15:12.210205867Z       unit: 'medium',
2025-11-07T22:15:12.210208448Z       notes: 'diced'
2025-11-07T22:15:12.210211008Z     },
2025-11-07T22:15:12.210213618Z     {
2025-11-07T22:15:12.210216238Z       name: 'Leek',
2025-11-07T22:15:12.210218619Z       quantity: '1',
2025-11-07T22:15:12.210221269Z       unit: 'medium',
2025-11-07T22:15:12.210223869Z       notes: 'white and light green parts, thinly sliced and thoroughly washed'
2025-11-07T22:15:12.210226369Z     },
2025-11-07T22:15:12.210228849Z     { name: 'Garlic', quantity: '4', unit: 'cloves', notes: 'minced' },
2025-11-07T22:15:12.210231229Z     {
2025-11-07T22:15:12.21023371Z       name: 'Fresh Ginger',
2025-11-07T22:15:12.21023631Z       quantity: '1',
2025-11-07T22:15:12.2102388Z       unit: 'inch',
2025-11-07T22:15:12.210253431Z       notes: 'grated'
2025-11-07T22:15:12.210256372Z     },
2025-11-07T22:15:12.210259032Z     { name: 'Olive Oil', quantity: '1', unit: 'tablespoon' },
2025-11-07T22:15:12.210261602Z     { name: 'Unsalted Butter', quantity: '1', unit: 'tablespoon' },
2025-11-07T22:15:12.210264222Z     { name: 'Tomato Paste', quantity: '1', unit: 'tablespoon' },
2025-11-07T22:15:12.210267193Z     {
2025-11-07T22:15:12.210269993Z       name: 'Dry White Wine',
2025-11-07T22:15:12.210272643Z       quantity: '0.5',
2025-11-07T22:15:12.210275483Z       unit: 'cup',
2025-11-07T22:15:12.210278264Z       notes: 'e.g., Sauvignon Blanc, Pinot Grigio (optional, for deglazing)'
2025-11-07T22:15:12.210280764Z     },
2025-11-07T22:15:12.210283274Z     {
2025-11-07T22:15:12.210285904Z       name: 'Fresh Thyme',
2025-11-07T22:15:12.210288305Z       quantity: '1',
2025-11-07T22:15:12.210290665Z       unit: 'tablespoon',
2025-11-07T22:15:12.210292965Z       notes: 'chopped'
2025-11-07T22:15:12.210295335Z     },
2025-11-07T22:15:12.210297985Z     { name: 'Bay Leaf', quantity: '1', unit: '' },
2025-11-07T22:15:12.210300526Z     {
2025-11-07T22:15:12.210303366Z       name: 'Parmesan Rind',
2025-11-07T22:15:12.210306076Z       quantity: '1',
2025-11-07T22:15:12.210309146Z       unit: '',
2025-11-07T22:15:12.210311836Z       notes: 'approximately 3-4 inches (optional, for umami depth)'
2025-11-07T22:15:12.210313567Z     },
2025-11-07T22:15:12.210315307Z     {
2025-11-07T22:15:12.210317007Z       name: 'Fresh Parsley',
2025-11-07T22:15:12.210318677Z       quantity: '2',
2025-11-07T22:15:12.210320407Z       unit: 'tablespoons',
2025-11-07T22:15:12.210322167Z       notes: 'chopped'
2025-11-07T22:15:12.210323857Z     },
2025-11-07T22:15:12.210325508Z     {
2025-11-07T22:15:12.210327148Z       name: 'Lemon',
2025-11-07T22:15:12.210328958Z       quantity: '0.5',
2025-11-07T22:15:12.210330628Z       unit: '',
2025-11-07T22:15:12.210332288Z       notes: 'for fresh juice'
2025-11-07T22:15:12.210333978Z     },
2025-11-07T22:15:12.210335978Z     {
2025-11-07T22:15:12.210338659Z       name: 'Fish Sauce or Soy Sauce',
2025-11-07T22:15:12.210341659Z       quantity: '1',
2025-11-07T22:15:12.210344489Z       unit: 'teaspoon',
2025-11-07T22:15:12.21034709Z       notes: 'optional, for additional umami'
2025-11-07T22:15:12.21034995Z     },
2025-11-07T22:15:12.21035246Z     { name: 'Salt', quantity: 'to', unit: 'taste' },
2025-11-07T22:15:12.21035506Z     { name: 'Black Pepper', quantity: 'to', unit: 'taste' },
2025-11-07T22:15:12.21035745Z     {
2025-11-07T22:15:12.21035988Z       name: 'White Pepper',
2025-11-07T22:15:12.210362311Z       quantity: '0.25',
2025-11-07T22:15:12.210364631Z       unit: 'teaspoon',
2025-11-07T22:15:12.210367101Z       notes: 'optional, for subtle heat and brightness'
2025-11-07T22:15:12.210369861Z     }
2025-11-07T22:15:12.210372902Z   ],
2025-11-07T22:15:12.210375042Z   steps: [
2025-11-07T22:15:12.210377532Z     {
2025-11-07T22:15:12.210381473Z       description: 'Pat chicken dry and season generously with salt, black pepper, and a pinch of white pepper (if using). Heat olive oil and butter in a large pot or Dutch oven over medium-high heat. Add chicken and sear for 4-6 minutes per side, until deeply golden brown with a rich crust. Remove chicken from the pot and set aside on a plate.',
2025-11-07T22:15:12.210384553Z       notes: 'Deeper sear creates more flavor. White pepper adds a different layer of subtle heat.'
2025-11-07T22:15:12.210387303Z     },
2025-11-07T22:15:12.210389823Z     {
2025-11-07T22:15:12.210399414Z       description: 'Reduce heat to medium. Add diced carrots, celery, onion, and sliced leeks to the pot. Sauté for 8-12 minutes, stirring occasionally, until vegetables are softened and translucent, scraping up any browned bits from the bottom of the pot.',
2025-11-07T22:15:12.210402614Z       notes: 'Leeks add a sweeter, more nuanced allium flavor.'
2025-11-07T22:15:12.210405195Z     },
2025-11-07T22:15:12.210407915Z     {
2025-11-07T22:15:12.210411235Z       description: 'Add minced garlic, grated fresh ginger, and tomato paste. Cook for 2 minutes more, stirring constantly, allowing the tomato paste to caramelize slightly and deepen in color, until fragrant.',
2025-11-07T22:15:12.210414235Z       notes: 'Ginger adds a fresh, warming complexity. Caramelizing tomato paste builds umami and richness.'
2025-11-07T22:15:12.210417476Z     },
2025-11-07T22:15:12.210420306Z     {
2025-11-07T22:15:12.210423716Z       description: 'If using, pour in dry white wine to deglaze the pot, scraping the bottom vigorously to loosen any browned bits. Let the wine reduce by half, about 2-3 minutes.',
2025-11-07T22:15:12.210426636Z       notes: 'Deglazing with wine adds acidity and depth, capturing all the flavorful fond.'
2025-11-07T22:15:12.210429366Z     },
2025-11-07T22:15:12.210431947Z     {
2025-11-07T22:15:12.210447208Z       description: 'Pour in high-quality chicken broth, add the bay leaf, fresh thyme, and the Parmesan rind (if using). Bring the mixture to a gentle boil, then reduce heat to medium-low and simmer for 20-25 minutes to allow flavors to meld and deepen.',
2025-11-07T22:15:12.210450888Z       notes: 'Using high-quality broth and adding Parmesan rind significantly boosts umami and savory depth during simmering.'
2025-11-07T22:15:12.210453509Z     },
2025-11-07T22:15:12.210456039Z     {
2025-11-07T22:15:12.210458639Z       description: 'Shred or dice the browned chicken. Add the shredded chicken back to the pot.',
2025-11-07T22:15:12.210461269Z       notes: ''
2025-11-07T22:15:12.210464Z     },
2025-11-07T22:15:12.21046712Z     {
2025-11-07T22:15:12.21047045Z       description: 'Add the egg noodles to the pot and simmer for 8-10 minutes, or until noodles are tender to your liking.',
2025-11-07T22:15:12.21047539Z       notes: ''
2025-11-07T22:15:12.210478411Z     },
2025-11-07T22:15:12.210481461Z     {
2025-11-07T22:15:12.210485241Z       description: 'Remove and discard the bay leaf and Parmesan rind. Stir in the chopped fresh parsley and fresh lemon juice.',
2025-11-07T22:15:12.210488171Z       notes: 'The rind has imparted its flavor and is no longer needed.'
2025-11-07T22:15:12.210491042Z     },
2025-11-07T22:15:12.210494022Z     {
2025-11-07T22:15:12.210496922Z       description: 'Stir in fish sauce or soy sauce (if using) for an extra layer of umami. Season with additional salt, black pepper, and white pepper (if desired) to taste. Serve hot.',
2025-11-07T22:15:12.210499763Z       notes: 'Fish sauce or soy sauce provides a secret weapon for profound savory depth without overtly tasting like the ingredient itself.'
2025-11-07T22:15:12.210502483Z     }
2025-11-07T22:15:12.210505083Z   ],
2025-11-07T22:15:12.210508463Z   notes: 'The modified recipe introduces several layers of flavor complexity through additional aromatics (leek, ginger), umami boosters (tomato paste, Parmesan rind, fish/soy sauce), deglazing with white wine for acidity and depth, and emphasizing technique like more intense searing and caramelization. White pepper is added for a subtle, different kind of heat.',
2025-11-07T22:15:12.210511233Z   confidence: 1,
2025-11-07T22:15:12.210513894Z   created: 2025-11-07T22:14:58.208Z,
2025-11-07T22:15:12.210516604Z   expires: 2025-11-08T22:14:58.208Z
2025-11-07T22:15:12.210525545Z } => { request: '019a6063-16ce-7726-ba1a-c48c0f7883f8' }
2025-11-07T22:15:12.210527325Z 
2025-11-07T22:15:12.210530285Z 🔵 SYNC ENGINE: Found 0 syncs for this action
2025-11-07T22:15:12.210533466Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:15:12.210579549Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:15:12.21059114Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:15:12.210594471Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:15:12.210597391Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:15:12.210600031Z 🔵 SYNC ENGINE: where() returned 0 frames
2025-11-07T22:15:12.210602761Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:15:12.210605472Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:15:12.210607882Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:15:12.210610372Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:15:12.210613372Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:15:12.210616182Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:15:12.210618623Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:15:12.210621143Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:15:12.210627143Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:15:12.210629444Z 🔵 SYNC ENGINE: Checking sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:15:12.210642035Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:15:12.210645275Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginRequest
2025-11-07T22:15:12.210648205Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginRequest
2025-11-07T22:15:12.210650745Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseError
2025-11-07T22:15:12.210653406Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseError
2025-11-07T22:15:12.210656026Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseWithSession
2025-11-07T22:15:12.210659026Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseWithSession
2025-11-07T22:15:12.210662226Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:15:12.210665147Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:15:12.210668027Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:15:12.210679548Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:15:12.210682358Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:15:12.21070012Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:15:12.210710341Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:15:12.210714201Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:15:12.210717701Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:15:12.210740213Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:15:12.210742503Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:15:12.210746504Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:15:12.210748614Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:15:12.210779456Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:15:12.210784437Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:15:12.210790688Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:15:12.210793618Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:15:12.210857193Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:15:12.210861543Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:15:12.210864044Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:15:12.210866934Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Error
2025-11-07T22:15:12.210873035Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Error
2025-11-07T22:15:12.210875705Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Success
2025-11-07T22:15:12.210881185Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Success
2025-11-07T22:15:12.210884065Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:15:12.210921159Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:15:12.210923919Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:15:12.210959242Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:15:12.210963622Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:15:12.210966483Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:15:12.210969263Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:15:12.210977504Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:15:12.210981764Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:15:12.211014517Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:15:12.211018297Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:15:12.211040849Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:15:12.211047619Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:15:12.211077642Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:15:12.211081773Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:15:12.211108715Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:15:12.211113025Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:15:12.21116632Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:15:12.211188162Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:15:12.211233926Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:15:12.211238506Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:15:12.211280039Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:15:12.21128464Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:15:12.211296061Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:15:12.211300111Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:15:12.211338844Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:15:12.211343495Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:15:12.211346595Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:15:12.211353286Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateRequest
2025-11-07T22:15:12.2113983Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateRequest
2025-11-07T22:15:12.21140242Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponse
2025-11-07T22:15:12.211413371Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponse
2025-11-07T22:15:12.211420142Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponseError
2025-11-07T22:15:12.211468266Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponseError
2025-11-07T22:15:12.211471346Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:15:12.211473286Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:15:12.211481397Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationRequest
2025-11-07T22:15:12.21151836Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationRequest
2025-11-07T22:15:12.21152249Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponse
2025-11-07T22:15:12.211525231Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponse
2025-11-07T22:15:12.211528181Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:15:12.211591716Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:15:12.211600017Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:15:12.211601897Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:15:12.211603557Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationRequest
2025-11-07T22:15:12.211930995Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationRequest
2025-11-07T22:15:12.211935596Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponse
2025-11-07T22:15:12.211938306Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponse
2025-11-07T22:15:12.211940966Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponseError
2025-11-07T22:15:12.211947237Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponseError
2025-11-07T22:15:12.211951187Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:15:12.212018473Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:15:12.212033854Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationRequest
2025-11-07T22:15:12.212037075Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationRequest
2025-11-07T22:15:12.212039385Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponse
2025-11-07T22:15:12.212041535Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponse
2025-11-07T22:15:12.212043695Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:15:12.212055456Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:15:12.212059226Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:15:12.212068397Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:15:26.744940134Z [Requesting] Received request for path: /Recipe/updateRecipeDetails
2025-11-07T22:15:26.745062825Z 🟢 Requesting.request ACTION CALLED with inputs: {
2025-11-07T22:15:26.745076296Z   "session": "019a6048-1789-7e3c-be19-11db018ae8d9",
2025-11-07T22:15:26.745081117Z   "recipe": "019a6041-760f-7df4-a471-4e113581f824",
2025-11-07T22:15:26.745085907Z   "newTitle": "Chicken Noodle Soup",
2025-11-07T22:15:26.745090898Z   "newDescription": "",
2025-11-07T22:15:26.745095388Z   "newIngredients": [
2025-11-07T22:15:26.7451167Z     {
2025-11-07T22:15:26.74512134Z       "name": "Chicken",
2025-11-07T22:15:26.745125481Z       "quantity": "1.5",
2025-11-07T22:15:26.745129591Z       "unit": "lbs",
2025-11-07T22:15:26.745134641Z       "notes": "boneless, skinless thighs or breasts, for better searing potential"
2025-11-07T22:15:26.745138972Z     },
2025-11-07T22:15:26.745143032Z     {
2025-11-07T22:15:26.745147552Z       "name": "Egg Noodles",
2025-11-07T22:15:26.745151913Z       "quantity": "6",
2025-11-07T22:15:26.745155843Z       "unit": "ounces",
2025-11-07T22:15:26.745160073Z       "notes": ""
2025-11-07T22:15:26.745164294Z     },
2025-11-07T22:15:26.745168484Z     {
2025-11-07T22:15:26.745172605Z       "name": "Chicken Broth",
2025-11-07T22:15:26.745176885Z       "quantity": "8",
2025-11-07T22:15:26.745180835Z       "unit": "cups",
2025-11-07T22:15:26.745185186Z       "notes": "high-quality, low-sodium"
2025-11-07T22:15:26.745189416Z     },
2025-11-07T22:15:26.745193706Z     {
2025-11-07T22:15:26.745197847Z       "name": "Carrots",
2025-11-07T22:15:26.745202387Z       "quantity": "2",
2025-11-07T22:15:26.745206667Z       "unit": "medium",
2025-11-07T22:15:26.745211058Z       "notes": "diced"
2025-11-07T22:15:26.745215018Z     },
2025-11-07T22:15:26.745218849Z     {
2025-11-07T22:15:26.745223069Z       "name": "Celery Stalks",
2025-11-07T22:15:26.745227249Z       "quantity": "2",
2025-11-07T22:15:26.74523117Z       "unit": "",
2025-11-07T22:15:26.74523517Z       "notes": "diced"
2025-11-07T22:15:26.74523957Z     },
2025-11-07T22:15:26.74524366Z     {
2025-11-07T22:15:26.745247811Z       "name": "Yellow Onion",
2025-11-07T22:15:26.745252141Z       "quantity": "1",
2025-11-07T22:15:26.745256082Z       "unit": "medium",
2025-11-07T22:15:26.745260432Z       "notes": "diced"
2025-11-07T22:15:26.745265102Z     },
2025-11-07T22:15:26.745269793Z     {
2025-11-07T22:15:26.745274373Z       "name": "Leek",
2025-11-07T22:15:26.745278394Z       "quantity": "1",
2025-11-07T22:15:26.745282224Z       "unit": "medium",
2025-11-07T22:15:26.745298165Z       "notes": "white and light green parts, thinly sliced and thoroughly washed"
2025-11-07T22:15:26.745300825Z     },
2025-11-07T22:15:26.745303566Z     {
2025-11-07T22:15:26.745306036Z       "name": "Garlic",
2025-11-07T22:15:26.745308436Z       "quantity": "4",
2025-11-07T22:15:26.745310786Z       "unit": "cloves",
2025-11-07T22:15:26.745313226Z       "notes": "minced"
2025-11-07T22:15:26.745315817Z     },
2025-11-07T22:15:26.745318187Z     {
2025-11-07T22:15:26.745320857Z       "name": "Fresh Ginger",
2025-11-07T22:15:26.745323247Z       "quantity": "1",
2025-11-07T22:15:26.745325648Z       "unit": "inch",
2025-11-07T22:15:26.745328228Z       "notes": "grated"
2025-11-07T22:15:26.745330788Z     },
2025-11-07T22:15:26.745333658Z     {
2025-11-07T22:15:26.745336279Z       "name": "Olive Oil",
2025-11-07T22:15:26.745338819Z       "quantity": "1",
2025-11-07T22:15:26.745341379Z       "unit": "tablespoon",
2025-11-07T22:15:26.745344129Z       "notes": ""
2025-11-07T22:15:26.745346489Z     },
2025-11-07T22:15:26.74534882Z     {
2025-11-07T22:15:26.74535126Z       "name": "Unsalted Butter",
2025-11-07T22:15:26.74535364Z       "quantity": "1",
2025-11-07T22:15:26.74535605Z       "unit": "tablespoon",
2025-11-07T22:15:26.74535843Z       "notes": ""
2025-11-07T22:15:26.745360791Z     },
2025-11-07T22:15:26.745363271Z     {
2025-11-07T22:15:26.745365581Z       "name": "Tomato Paste",
2025-11-07T22:15:26.745368081Z       "quantity": "1",
2025-11-07T22:15:26.745370431Z       "unit": "tablespoon",
2025-11-07T22:15:26.745372902Z       "notes": ""
2025-11-07T22:15:26.745375492Z     },
2025-11-07T22:15:26.745378092Z     {
2025-11-07T22:15:26.745380382Z       "name": "Dry White Wine",
2025-11-07T22:15:26.745382812Z       "quantity": "0.5",
2025-11-07T22:15:26.745385183Z       "unit": "cup",
2025-11-07T22:15:26.745388073Z       "notes": "e.g., Sauvignon Blanc, Pinot Grigio (optional, for deglazing)"
2025-11-07T22:15:26.745390363Z     },
2025-11-07T22:15:26.745392663Z     {
2025-11-07T22:15:26.745395124Z       "name": "Fresh Thyme",
2025-11-07T22:15:26.745397364Z       "quantity": "1",
2025-11-07T22:15:26.745399834Z       "unit": "tablespoon",
2025-11-07T22:15:26.745404044Z       "notes": "chopped"
2025-11-07T22:15:26.745406785Z     },
2025-11-07T22:15:26.745409565Z     {
2025-11-07T22:15:26.745412435Z       "name": "Bay Leaf",
2025-11-07T22:15:26.745415165Z       "quantity": "1",
2025-11-07T22:15:26.745417746Z       "unit": "",
2025-11-07T22:15:26.745420316Z       "notes": ""
2025-11-07T22:15:26.745422816Z     },
2025-11-07T22:15:26.745425106Z     {
2025-11-07T22:15:26.745427416Z       "name": "Parmesan Rind",
2025-11-07T22:15:26.745429856Z       "quantity": "1",
2025-11-07T22:15:26.745432137Z       "unit": "",
2025-11-07T22:15:26.745434587Z       "notes": "approximately 3-4 inches (optional, for umami depth)"
2025-11-07T22:15:26.745436927Z     },
2025-11-07T22:15:26.745439267Z     {
2025-11-07T22:15:26.745441557Z       "name": "Fresh Parsley",
2025-11-07T22:15:26.745443928Z       "quantity": "2",
2025-11-07T22:15:26.745446288Z       "unit": "tablespoons",
2025-11-07T22:15:26.745448578Z       "notes": "chopped"
2025-11-07T22:15:26.745450848Z     },
2025-11-07T22:15:26.745454179Z     {
2025-11-07T22:15:26.745456649Z       "name": "Lemon",
2025-11-07T22:15:26.745458989Z       "quantity": "0.5",
2025-11-07T22:15:26.745461449Z       "unit": "",
2025-11-07T22:15:26.74546409Z       "notes": "for fresh juice"
2025-11-07T22:15:26.745481761Z     },
2025-11-07T22:15:26.745484481Z     {
2025-11-07T22:15:26.745487212Z       "name": "Fish Sauce or Soy Sauce",
2025-11-07T22:15:26.745489962Z       "quantity": "1",
2025-11-07T22:15:26.745492392Z       "unit": "teaspoon",
2025-11-07T22:15:26.745494912Z       "notes": "optional, for additional umami"
2025-11-07T22:15:26.745497262Z     },
2025-11-07T22:15:26.745499713Z     {
2025-11-07T22:15:26.745502163Z       "name": "Salt",
2025-11-07T22:15:26.745504543Z       "quantity": "to",
2025-11-07T22:15:26.745506943Z       "unit": "taste",
2025-11-07T22:15:26.745509403Z       "notes": ""
2025-11-07T22:15:26.745511863Z     },
2025-11-07T22:15:26.745514214Z     {
2025-11-07T22:15:26.745516544Z       "name": "Black Pepper",
2025-11-07T22:15:26.745518944Z       "quantity": "to",
2025-11-07T22:15:26.745521394Z       "unit": "taste",
2025-11-07T22:15:26.745523765Z       "notes": ""
2025-11-07T22:15:26.745526045Z     },
2025-11-07T22:15:26.745528465Z     {
2025-11-07T22:15:26.745530795Z       "name": "White Pepper",
2025-11-07T22:15:26.745533265Z       "quantity": "0.25",
2025-11-07T22:15:26.745535816Z       "unit": "teaspoon",
2025-11-07T22:15:26.745538506Z       "notes": "optional, for subtle heat and brightness"
2025-11-07T22:15:26.745540846Z     }
2025-11-07T22:15:26.745543356Z   ],
2025-11-07T22:15:26.74558638Z   "newSteps": [
2025-11-07T22:15:26.74558893Z     {
2025-11-07T22:15:26.745593441Z       "description": "Pat chicken dry and season generously with salt, black pepper, and a pinch of white pepper (if using). Heat olive oil and butter in a large pot or Dutch oven over medium-high heat. Add chicken and sear for 4-6 minutes per side, until deeply golden brown with a rich crust. Remove chicken from the pot and set aside on a plate.",
2025-11-07T22:15:26.745596941Z       "notes": "Deeper sear creates more flavor. White pepper adds a different layer of subtle heat."
2025-11-07T22:15:26.745599581Z     },
2025-11-07T22:15:26.745602261Z     {
2025-11-07T22:15:26.745606782Z       "description": "Reduce heat to medium. Add diced carrots, celery, onion, and sliced leeks to the pot. Sauté for 8-12 minutes, stirring occasionally, until vegetables are softened and translucent, scraping up any browned bits from the bottom of the pot.",
2025-11-07T22:15:26.745609652Z       "notes": "Leeks add a sweeter, more nuanced allium flavor."
2025-11-07T22:15:26.745612162Z     },
2025-11-07T22:15:26.745614712Z     {
2025-11-07T22:15:26.745617903Z       "description": "Add minced garlic, grated fresh ginger, and tomato paste. Cook for 2 minutes more, stirring constantly, allowing the tomato paste to caramelize slightly and deepen in color, until fragrant.",
2025-11-07T22:15:26.745635614Z       "notes": "Ginger adds a fresh, warming complexity. Caramelizing tomato paste builds umami and richness."
2025-11-07T22:15:26.745638465Z     },
2025-11-07T22:15:26.745641075Z     {
2025-11-07T22:15:26.745644375Z       "description": "If using, pour in dry white wine to deglaze the pot, scraping the bottom vigorously to loosen any browned bits. Let the wine reduce by half, about 2-3 minutes.",
2025-11-07T22:15:26.745647025Z       "notes": "Deglazing with wine adds acidity and depth, capturing all the flavorful fond."
2025-11-07T22:15:26.745649475Z     },
2025-11-07T22:15:26.745652055Z     {
2025-11-07T22:15:26.745654596Z       "description": "Pour in high-quality chicken broth, add the bay leaf, fresh thyme, and the Parmesan rind (if using). Bring the mixture to a gentle boil, then reduce heat to medium-low and simmer for 20-25 minutes to allow flavors to meld and deepen.",
2025-11-07T22:15:26.745657766Z       "notes": "Using high-quality broth and adding Parmesan rind significantly boosts umami and savory depth during simmering."
2025-11-07T22:15:26.745665817Z     },
2025-11-07T22:15:26.745668527Z     {
2025-11-07T22:15:26.745671067Z       "description": "Shred or dice the browned chicken. Add the shredded chicken back to the pot.",
2025-11-07T22:15:26.745673777Z       "notes": ""
2025-11-07T22:15:26.745676258Z     },
2025-11-07T22:15:26.745679048Z     {
2025-11-07T22:15:26.745681778Z       "description": "Add the egg noodles to the pot and simmer for 8-10 minutes, or until noodles are tender to your liking.",
2025-11-07T22:15:26.745684318Z       "notes": ""
2025-11-07T22:15:26.745686889Z     },
2025-11-07T22:15:26.745689329Z     {
2025-11-07T22:15:26.745692469Z       "description": "Remove and discard the bay leaf and Parmesan rind. Stir in the chopped fresh parsley and fresh lemon juice.",
2025-11-07T22:15:26.745695339Z       "notes": "The rind has imparted its flavor and is no longer needed."
2025-11-07T22:15:26.74569779Z     },
2025-11-07T22:15:26.74570028Z     {
2025-11-07T22:15:26.74570309Z       "description": "Stir in fish sauce or soy sauce (if using) for an extra layer of umami. Season with additional salt, black pepper, and white pepper (if desired) to taste. Serve hot.",
2025-11-07T22:15:26.74570588Z       "notes": "Fish sauce or soy sauce provides a secret weapon for profound savory depth without overtly tasting like the ingredient itself."
2025-11-07T22:15:26.745708491Z     }
2025-11-07T22:15:26.745711171Z   ],
2025-11-07T22:15:26.745714121Z   "path": "/Recipe/updateRecipeDetails"
2025-11-07T22:15:26.745716521Z }
2025-11-07T22:15:26.745731102Z 🟢 Generated request ID: 019a6063-8718-7ae2-b05b-04fea85e8116
2025-11-07T22:15:26.745734313Z 🟢 Inserting request doc into database...
2025-11-07T22:15:26.813251782Z 🟢 Request doc inserted successfully
2025-11-07T22:15:26.813270144Z 🟢 Returning request ID to sync engine: 019a6063-8718-7ae2-b05b-04fea85e8116
2025-11-07T22:15:26.813279134Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:15:26.815664849Z 
2025-11-07T22:15:26.81567665Z Requesting.request {
2025-11-07T22:15:26.81567987Z   session: '019a6048-1789-7e3c-be19-11db018ae8d9',
2025-11-07T22:15:26.81568218Z   recipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:15:26.815684871Z   newTitle: 'Chicken Noodle Soup',
2025-11-07T22:15:26.815687321Z   newDescription: '',
2025-11-07T22:15:26.815689571Z   newIngredients: [
2025-11-07T22:15:26.815691712Z     {
2025-11-07T22:15:26.815693962Z       name: 'Chicken',
2025-11-07T22:15:26.815696302Z       quantity: '1.5',
2025-11-07T22:15:26.815698342Z       unit: 'lbs',
2025-11-07T22:15:26.815701212Z       notes: 'boneless, skinless thighs or breasts, for better searing potential'
2025-11-07T22:15:26.815703402Z     },
2025-11-07T22:15:26.815706783Z     { name: 'Egg Noodles', quantity: '6', unit: 'ounces', notes: '' },
2025-11-07T22:15:26.815710353Z     {
2025-11-07T22:15:26.815714773Z       name: 'Chicken Broth',
2025-11-07T22:15:26.815718214Z       quantity: '8',
2025-11-07T22:15:26.815721974Z       unit: 'cups',
2025-11-07T22:15:26.815725514Z       notes: 'high-quality, low-sodium'
2025-11-07T22:15:26.815728575Z     },
2025-11-07T22:15:26.815731415Z     { name: 'Carrots', quantity: '2', unit: 'medium', notes: 'diced' },
2025-11-07T22:15:26.815734675Z     { name: 'Celery Stalks', quantity: '2', unit: '', notes: 'diced' },
2025-11-07T22:15:26.815738185Z     {
2025-11-07T22:15:26.815741976Z       name: 'Yellow Onion',
2025-11-07T22:15:26.815745686Z       quantity: '1',
2025-11-07T22:15:26.815749076Z       unit: 'medium',
2025-11-07T22:15:26.815765598Z       notes: 'diced'
2025-11-07T22:15:26.815768048Z     },
2025-11-07T22:15:26.815770208Z     {
2025-11-07T22:15:26.815772388Z       name: 'Leek',
2025-11-07T22:15:26.815774959Z       quantity: '1',
2025-11-07T22:15:26.815777059Z       unit: 'medium',
2025-11-07T22:15:26.815779239Z       notes: 'white and light green parts, thinly sliced and thoroughly washed'
2025-11-07T22:15:26.815781399Z     },
2025-11-07T22:15:26.815783619Z     { name: 'Garlic', quantity: '4', unit: 'cloves', notes: 'minced' },
2025-11-07T22:15:26.815785769Z     {
2025-11-07T22:15:26.81578787Z       name: 'Fresh Ginger',
2025-11-07T22:15:26.81579001Z       quantity: '1',
2025-11-07T22:15:26.81579214Z       unit: 'inch',
2025-11-07T22:15:26.8157942Z       notes: 'grated'
2025-11-07T22:15:26.81579628Z     },
2025-11-07T22:15:26.815798381Z     { name: 'Olive Oil', quantity: '1', unit: 'tablespoon', notes: '' },
2025-11-07T22:15:26.815800501Z     {
2025-11-07T22:15:26.815802581Z       name: 'Unsalted Butter',
2025-11-07T22:15:26.815804681Z       quantity: '1',
2025-11-07T22:15:26.815806811Z       unit: 'tablespoon',
2025-11-07T22:15:26.815808991Z       notes: ''
2025-11-07T22:15:26.815811142Z     },
2025-11-07T22:15:26.815813222Z     {
2025-11-07T22:15:26.815815262Z       name: 'Tomato Paste',
2025-11-07T22:15:26.815817482Z       quantity: '1',
2025-11-07T22:15:26.815819652Z       unit: 'tablespoon',
2025-11-07T22:15:26.815821763Z       notes: ''
2025-11-07T22:15:26.815823883Z     },
2025-11-07T22:15:26.815830413Z     {
2025-11-07T22:15:26.815834274Z       name: 'Dry White Wine',
2025-11-07T22:15:26.815837824Z       quantity: '0.5',
2025-11-07T22:15:26.815841034Z       unit: 'cup',
2025-11-07T22:15:26.815844485Z       notes: 'e.g., Sauvignon Blanc, Pinot Grigio (optional, for deglazing)'
2025-11-07T22:15:26.815847845Z     },
2025-11-07T22:15:26.815851515Z     {
2025-11-07T22:15:26.815854535Z       name: 'Fresh Thyme',
2025-11-07T22:15:26.815856735Z       quantity: '1',
2025-11-07T22:15:26.815858806Z       unit: 'tablespoon',
2025-11-07T22:15:26.815860886Z       notes: 'chopped'
2025-11-07T22:15:26.815864496Z     },
2025-11-07T22:15:26.815868227Z     { name: 'Bay Leaf', quantity: '1', unit: '', notes: '' },
2025-11-07T22:15:26.815871637Z     {
2025-11-07T22:15:26.815875057Z       name: 'Parmesan Rind',
2025-11-07T22:15:26.815878708Z       quantity: '1',
2025-11-07T22:15:26.815882338Z       unit: '',
2025-11-07T22:15:26.815885678Z       notes: 'approximately 3-4 inches (optional, for umami depth)'
2025-11-07T22:15:26.815887838Z     },
2025-11-07T22:15:26.815889909Z     {
2025-11-07T22:15:26.815891978Z       name: 'Fresh Parsley',
2025-11-07T22:15:26.815894389Z       quantity: '2',
2025-11-07T22:15:26.815896509Z       unit: 'tablespoons',
2025-11-07T22:15:26.815899269Z       notes: 'chopped'
2025-11-07T22:15:26.815901349Z     },
2025-11-07T22:15:26.815903579Z     {
2025-11-07T22:15:26.81590565Z       name: 'Lemon',
2025-11-07T22:15:26.81590778Z       quantity: '0.5',
2025-11-07T22:15:26.81591193Z       unit: '',
2025-11-07T22:15:26.81591414Z       notes: 'for fresh juice'
2025-11-07T22:15:26.815916211Z     },
2025-11-07T22:15:26.815918361Z     {
2025-11-07T22:15:26.815920581Z       name: 'Fish Sauce or Soy Sauce',
2025-11-07T22:15:26.815922811Z       quantity: '1',
2025-11-07T22:15:26.815925032Z       unit: 'teaspoon',
2025-11-07T22:15:26.815927242Z       notes: 'optional, for additional umami'
2025-11-07T22:15:26.815929372Z     },
2025-11-07T22:15:26.815936242Z     { name: 'Salt', quantity: 'to', unit: 'taste', notes: '' },
2025-11-07T22:15:26.815938662Z     { name: 'Black Pepper', quantity: 'to', unit: 'taste', notes: '' },
2025-11-07T22:15:26.815940893Z     {
2025-11-07T22:15:26.815943023Z       name: 'White Pepper',
2025-11-07T22:15:26.815945893Z       quantity: '0.25',
2025-11-07T22:15:26.815949623Z       unit: 'teaspoon',
2025-11-07T22:15:26.815953634Z       notes: 'optional, for subtle heat and brightness'
2025-11-07T22:15:26.815957024Z     }
2025-11-07T22:15:26.815960415Z   ],
2025-11-07T22:15:26.815963805Z   newSteps: [
2025-11-07T22:15:26.815967045Z     {
2025-11-07T22:15:26.815971636Z       description: 'Pat chicken dry and season generously with salt, black pepper, and a pinch of white pepper (if using). Heat olive oil and butter in a large pot or Dutch oven over medium-high heat. Add chicken and sear for 4-6 minutes per side, until deeply golden brown with a rich crust. Remove chicken from the pot and set aside on a plate.',
2025-11-07T22:15:26.815975146Z       notes: 'Deeper sear creates more flavor. White pepper adds a different layer of subtle heat.'
2025-11-07T22:15:26.815977326Z     },
2025-11-07T22:15:26.815979416Z     {
2025-11-07T22:15:26.815983657Z       description: 'Reduce heat to medium. Add diced carrots, celery, onion, and sliced leeks to the pot. Sauté for 8-12 minutes, stirring occasionally, until vegetables are softened and translucent, scraping up any browned bits from the bottom of the pot.',
2025-11-07T22:15:26.815985877Z       notes: 'Leeks add a sweeter, more nuanced allium flavor.'
2025-11-07T22:15:26.815987977Z     },
2025-11-07T22:15:26.815990097Z     {
2025-11-07T22:15:26.815992967Z       description: 'Add minced garlic, grated fresh ginger, and tomato paste. Cook for 2 minutes more, stirring constantly, allowing the tomato paste to caramelize slightly and deepen in color, until fragrant.',
2025-11-07T22:15:26.815995678Z       notes: 'Ginger adds a fresh, warming complexity. Caramelizing tomato paste builds umami and richness.'
2025-11-07T22:15:26.815999078Z     },
2025-11-07T22:15:26.816002528Z     {
2025-11-07T22:15:26.816009329Z       description: 'If using, pour in dry white wine to deglaze the pot, scraping the bottom vigorously to loosen any browned bits. Let the wine reduce by half, about 2-3 minutes.',
2025-11-07T22:15:26.816012959Z       notes: 'Deglazing with wine adds acidity and depth, capturing all the flavorful fond.'
2025-11-07T22:15:26.816016569Z     },
2025-11-07T22:15:26.816020269Z     {
2025-11-07T22:15:26.816035031Z       description: 'Pour in high-quality chicken broth, add the bay leaf, fresh thyme, and the Parmesan rind (if using). Bring the mixture to a gentle boil, then reduce heat to medium-low and simmer for 20-25 minutes to allow flavors to meld and deepen.',
2025-11-07T22:15:26.816039741Z       notes: 'Using high-quality broth and adding Parmesan rind significantly boosts umami and savory depth during simmering.'
2025-11-07T22:15:26.816042922Z     },
2025-11-07T22:15:26.816046162Z     {
2025-11-07T22:15:26.816049352Z       description: 'Shred or dice the browned chicken. Add the shredded chicken back to the pot.',
2025-11-07T22:15:26.816052172Z       notes: ''
2025-11-07T22:15:26.816055063Z     },
2025-11-07T22:15:26.816057723Z     {
2025-11-07T22:15:26.816060853Z       description: 'Add the egg noodles to the pot and simmer for 8-10 minutes, or until noodles are tender to your liking.',
2025-11-07T22:15:26.816064073Z       notes: ''
2025-11-07T22:15:26.816067534Z     },
2025-11-07T22:15:26.816070674Z     {
2025-11-07T22:15:26.816074624Z       description: 'Remove and discard the bay leaf and Parmesan rind. Stir in the chopped fresh parsley and fresh lemon juice.',
2025-11-07T22:15:26.816085315Z       notes: 'The rind has imparted its flavor and is no longer needed.'
2025-11-07T22:15:26.816088215Z     },
2025-11-07T22:15:26.816090766Z     {
2025-11-07T22:15:26.816093756Z       description: 'Stir in fish sauce or soy sauce (if using) for an extra layer of umami. Season with additional salt, black pepper, and white pepper (if desired) to taste. Serve hot.',
2025-11-07T22:15:26.816096656Z       notes: 'Fish sauce or soy sauce provides a secret weapon for profound savory depth without overtly tasting like the ingredient itself.'
2025-11-07T22:15:26.816099316Z     }
2025-11-07T22:15:26.816101907Z   ],
2025-11-07T22:15:26.816104237Z   path: '/Recipe/updateRecipeDetails'
2025-11-07T22:15:26.816106527Z } => { request: '019a6063-8718-7ae2-b05b-04fea85e8116' }
2025-11-07T22:15:26.816108707Z 
2025-11-07T22:15:26.816111157Z 🔵 SYNC ENGINE: Found 66 syncs for this action
2025-11-07T22:15:26.816114098Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:15:26.816130659Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:15:26.816133789Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:15:26.81613655Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:15:26.81613911Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftRequest
2025-11-07T22:15:26.81614146Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftRequest
2025-11-07T22:15:26.81614401Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftResponse
2025-11-07T22:15:26.81614652Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftResponse
2025-11-07T22:15:26.816148911Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:15:26.816151691Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:15:26.816154571Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeRequest
2025-11-07T22:15:26.816157161Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeRequest
2025-11-07T22:15:26.816159912Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeResponse
2025-11-07T22:15:26.816162322Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeResponse
2025-11-07T22:15:26.816165202Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:15:26.816167452Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:15:26.816169512Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:15:26.816171903Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:15:26.816174463Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:15:26.816177203Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:15:26.816190214Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeRequest
2025-11-07T22:15:26.816192914Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeRequest
2025-11-07T22:15:26.816195655Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeResponse
2025-11-07T22:15:26.816301104Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeResponse
2025-11-07T22:15:26.816308844Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:15:26.816311835Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:15:26.816315155Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:15:26.816328806Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:15:26.816331746Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:15:26.816333936Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:15:26.816336357Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:15:26.816344948Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:15:26.816347918Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:15:26.816411203Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:15:26.816444326Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:15:26.816503741Z 🔵 SYNC ENGINE: where() returned 0 frames
2025-11-07T22:15:26.816508242Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:15:26.816510322Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:15:26.816584618Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:15:26.816594749Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:15:26.816634042Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:15:26.816638433Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:15:26.881767037Z 🔧 _getUser called with session: 019a6048-1789-7e3c-be19-11db018ae8d9
2025-11-07T22:15:26.946702715Z ✅ _getUser - Found user: 019a6041-1e82-76f1-be1b-19ebde0a35e0
2025-11-07T22:15:27.011421825Z 🔵 SYNC ENGINE: where() returned 1 frames
2025-11-07T22:15:27.011450107Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:15:27.144353594Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:15:27.145572748Z 
2025-11-07T22:15:27.14559046Z Recipe.updateRecipeDetails {
2025-11-07T22:15:27.145598461Z   owner: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:15:27.145605171Z   recipe: '019a6041-760f-7df4-a471-4e113581f824',
2025-11-07T22:15:27.145610612Z   newTitle: 'Chicken Noodle Soup',
2025-11-07T22:15:27.145617392Z   newDescription: '',
2025-11-07T22:15:27.145623803Z   newIngredients: [
2025-11-07T22:15:27.145629833Z     {
2025-11-07T22:15:27.145635564Z       name: 'Chicken',
2025-11-07T22:15:27.145641164Z       quantity: '1.5',
2025-11-07T22:15:27.145646995Z       unit: 'lbs',
2025-11-07T22:15:27.145653835Z       notes: 'boneless, skinless thighs or breasts, for better searing potential'
2025-11-07T22:15:27.145660016Z     },
2025-11-07T22:15:27.145666487Z     { name: 'Egg Noodles', quantity: '6', unit: 'ounces', notes: '' },
2025-11-07T22:15:27.145671917Z     {
2025-11-07T22:15:27.145677077Z       name: 'Chicken Broth',
2025-11-07T22:15:27.145682638Z       quantity: '8',
2025-11-07T22:15:27.145688218Z       unit: 'cups',
2025-11-07T22:15:27.145694139Z       notes: 'high-quality, low-sodium'
2025-11-07T22:15:27.145699949Z     },
2025-11-07T22:15:27.14570368Z     { name: 'Carrots', quantity: '2', unit: 'medium', notes: 'diced' },
2025-11-07T22:15:27.14570726Z     { name: 'Celery Stalks', quantity: '2', unit: '', notes: 'diced' },
2025-11-07T22:15:27.14571073Z     {
2025-11-07T22:15:27.145714191Z       name: 'Yellow Onion',
2025-11-07T22:15:27.145728782Z       quantity: '1',
2025-11-07T22:15:27.145731032Z       unit: 'medium',
2025-11-07T22:15:27.145733522Z       notes: 'diced'
2025-11-07T22:15:27.145735593Z     },
2025-11-07T22:15:27.145737733Z     {
2025-11-07T22:15:27.145740143Z       name: 'Leek',
2025-11-07T22:15:27.145742263Z       quantity: '1',
2025-11-07T22:15:27.145744413Z       unit: 'medium',
2025-11-07T22:15:27.145746543Z       notes: 'white and light green parts, thinly sliced and thoroughly washed'
2025-11-07T22:15:27.145748714Z     },
2025-11-07T22:15:27.145750824Z     { name: 'Garlic', quantity: '4', unit: 'cloves', notes: 'minced' },
2025-11-07T22:15:27.145752954Z     {
2025-11-07T22:15:27.145755024Z       name: 'Fresh Ginger',
2025-11-07T22:15:27.145757084Z       quantity: '1',
2025-11-07T22:15:27.145759144Z       unit: 'inch',
2025-11-07T22:15:27.145761205Z       notes: 'grated'
2025-11-07T22:15:27.145763245Z     },
2025-11-07T22:15:27.145765435Z     { name: 'Olive Oil', quantity: '1', unit: 'tablespoon', notes: '' },
2025-11-07T22:15:27.145767545Z     {
2025-11-07T22:15:27.145769585Z       name: 'Unsalted Butter',
2025-11-07T22:15:27.145771665Z       quantity: '1',
2025-11-07T22:15:27.145773716Z       unit: 'tablespoon',
2025-11-07T22:15:27.145775856Z       notes: ''
2025-11-07T22:15:27.145777946Z     },
2025-11-07T22:15:27.145780036Z     {
2025-11-07T22:15:27.145782166Z       name: 'Tomato Paste',
2025-11-07T22:15:27.145784277Z       quantity: '1',
2025-11-07T22:15:27.145786377Z       unit: 'tablespoon',
2025-11-07T22:15:27.145788447Z       notes: ''
2025-11-07T22:15:27.145790517Z     },
2025-11-07T22:15:27.145792607Z     {
2025-11-07T22:15:27.145794667Z       name: 'Dry White Wine',
2025-11-07T22:15:27.145796748Z       quantity: '0.5',
2025-11-07T22:15:27.145798848Z       unit: 'cup',
2025-11-07T22:15:27.145800948Z       notes: 'e.g., Sauvignon Blanc, Pinot Grigio (optional, for deglazing)'
2025-11-07T22:15:27.145803018Z     },
2025-11-07T22:15:27.145805079Z     {
2025-11-07T22:15:27.145807119Z       name: 'Fresh Thyme',
2025-11-07T22:15:27.145809179Z       quantity: '1',
2025-11-07T22:15:27.145811389Z       unit: 'tablespoon',
2025-11-07T22:15:27.145813459Z       notes: 'chopped'
2025-11-07T22:15:27.145815549Z     },
2025-11-07T22:15:27.145817649Z     { name: 'Bay Leaf', quantity: '1', unit: '', notes: '' },
2025-11-07T22:15:27.14581971Z     {
2025-11-07T22:15:27.14582178Z       name: 'Parmesan Rind',
2025-11-07T22:15:27.14582387Z       quantity: '1',
2025-11-07T22:15:27.14582594Z       unit: '',
2025-11-07T22:15:27.145831481Z       notes: 'approximately 3-4 inches (optional, for umami depth)'
2025-11-07T22:15:27.145833781Z     },
2025-11-07T22:15:27.145835971Z     {
2025-11-07T22:15:27.145838081Z       name: 'Fresh Parsley',
2025-11-07T22:15:27.145840131Z       quantity: '2',
2025-11-07T22:15:27.145842202Z       unit: 'tablespoons',
2025-11-07T22:15:27.145844242Z       notes: 'chopped'
2025-11-07T22:15:27.145846352Z     },
2025-11-07T22:15:27.145848472Z     {
2025-11-07T22:15:27.145850532Z       name: 'Lemon',
2025-11-07T22:15:27.145852612Z       quantity: '0.5',
2025-11-07T22:15:27.145854713Z       unit: '',
2025-11-07T22:15:27.145856793Z       notes: 'for fresh juice'
2025-11-07T22:15:27.145858833Z     },
2025-11-07T22:15:27.145860903Z     {
2025-11-07T22:15:27.145863023Z       name: 'Fish Sauce or Soy Sauce',
2025-11-07T22:15:27.145865073Z       quantity: '1',
2025-11-07T22:15:27.145867134Z       unit: 'teaspoon',
2025-11-07T22:15:27.145873254Z       notes: 'optional, for additional umami'
2025-11-07T22:15:27.145875485Z     },
2025-11-07T22:15:27.145877585Z     { name: 'Salt', quantity: 'to', unit: 'taste', notes: '' },
2025-11-07T22:15:27.145879795Z     { name: 'Black Pepper', quantity: 'to', unit: 'taste', notes: '' },
2025-11-07T22:15:27.145881885Z     {
2025-11-07T22:15:27.145883975Z       name: 'White Pepper',
2025-11-07T22:15:27.145886105Z       quantity: '0.25',
2025-11-07T22:15:27.145888186Z       unit: 'teaspoon',
2025-11-07T22:15:27.145890386Z       notes: 'optional, for subtle heat and brightness'
2025-11-07T22:15:27.145892516Z     }
2025-11-07T22:15:27.145894646Z   ],
2025-11-07T22:15:27.145896806Z   newSteps: [
2025-11-07T22:15:27.145898936Z     {
2025-11-07T22:15:27.145903747Z       description: 'Pat chicken dry and season generously with salt, black pepper, and a pinch of white pepper (if using). Heat olive oil and butter in a large pot or Dutch oven over medium-high heat. Add chicken and sear for 4-6 minutes per side, until deeply golden brown with a rich crust. Remove chicken from the pot and set aside on a plate.',
2025-11-07T22:15:27.145906537Z       notes: 'Deeper sear creates more flavor. White pepper adds a different layer of subtle heat.'
2025-11-07T22:15:27.145908667Z     },
2025-11-07T22:15:27.145910808Z     {
2025-11-07T22:15:27.145913588Z       description: 'Reduce heat to medium. Add diced carrots, celery, onion, and sliced leeks to the pot. Sauté for 8-12 minutes, stirring occasionally, until vegetables are softened and translucent, scraping up any browned bits from the bottom of the pot.',
2025-11-07T22:15:27.145915738Z       notes: 'Leeks add a sweeter, more nuanced allium flavor.'
2025-11-07T22:15:27.145917888Z     },
2025-11-07T22:15:27.145920008Z     {
2025-11-07T22:15:27.145922889Z       description: 'Add minced garlic, grated fresh ginger, and tomato paste. Cook for 2 minutes more, stirring constantly, allowing the tomato paste to caramelize slightly and deepen in color, until fragrant.',
2025-11-07T22:15:27.145925109Z       notes: 'Ginger adds a fresh, warming complexity. Caramelizing tomato paste builds umami and richness.'
2025-11-07T22:15:27.145927239Z     },
2025-11-07T22:15:27.145929339Z     {
2025-11-07T22:15:27.145932049Z       description: 'If using, pour in dry white wine to deglaze the pot, scraping the bottom vigorously to loosen any browned bits. Let the wine reduce by half, about 2-3 minutes.',
2025-11-07T22:15:27.14593421Z       notes: 'Deglazing with wine adds acidity and depth, capturing all the flavorful fond.'
2025-11-07T22:15:27.14593633Z     },
2025-11-07T22:15:27.1459384Z     {
2025-11-07T22:15:27.145953681Z       description: 'Pour in high-quality chicken broth, add the bay leaf, fresh thyme, and the Parmesan rind (if using). Bring the mixture to a gentle boil, then reduce heat to medium-low and simmer for 20-25 minutes to allow flavors to meld and deepen.',
2025-11-07T22:15:27.145956861Z       notes: 'Using high-quality broth and adding Parmesan rind significantly boosts umami and savory depth during simmering.'
2025-11-07T22:15:27.145959112Z     },
2025-11-07T22:15:27.145961212Z     {
2025-11-07T22:15:27.145963322Z       description: 'Shred or dice the browned chicken. Add the shredded chicken back to the pot.',
2025-11-07T22:15:27.145965622Z       notes: ''
2025-11-07T22:15:27.145967722Z     },
2025-11-07T22:15:27.145969813Z     {
2025-11-07T22:15:27.145971893Z       description: 'Add the egg noodles to the pot and simmer for 8-10 minutes, or until noodles are tender to your liking.',
2025-11-07T22:15:27.145974033Z       notes: ''
2025-11-07T22:15:27.145976183Z     },
2025-11-07T22:15:27.145978253Z     {
2025-11-07T22:15:27.145980894Z       description: 'Remove and discard the bay leaf and Parmesan rind. Stir in the chopped fresh parsley and fresh lemon juice.',
2025-11-07T22:15:27.145986404Z       notes: 'The rind has imparted its flavor and is no longer needed.'
2025-11-07T22:15:27.145988584Z     },
2025-11-07T22:15:27.145990634Z     {
2025-11-07T22:15:27.145992755Z       description: 'Stir in fish sauce or soy sauce (if using) for an extra layer of umami. Season with additional salt, black pepper, and white pepper (if desired) to taste. Serve hot.',
2025-11-07T22:15:27.145994925Z       notes: 'Fish sauce or soy sauce provides a secret weapon for profound savory depth without overtly tasting like the ingredient itself.'
2025-11-07T22:15:27.145997095Z     }
2025-11-07T22:15:27.145999155Z   ]
2025-11-07T22:15:27.146001295Z } => {}
2025-11-07T22:15:27.146003276Z 
2025-11-07T22:15:27.146005476Z 🔵 SYNC ENGINE: Found 2 syncs for this action
2025-11-07T22:15:27.146007696Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:15:27.146017006Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:15:27.146019457Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:15:27.146021627Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:15:27.146023747Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:15:27.225762045Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:15:27.225795668Z 
2025-11-07T22:15:27.225800028Z Requesting.respond { request: '019a6063-8718-7ae2-b05b-04fea85e8116' } => { request: '019a6063-8718-7ae2-b05b-04fea85e8116' }
2025-11-07T22:15:27.225803598Z 
2025-11-07T22:15:27.225807269Z 🔵 SYNC ENGINE: Found 0 syncs for this action
2025-11-07T22:15:27.22605584Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:15:27.226065831Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:15:27.226069111Z 🔵 SYNC ENGINE: Checking sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:15:27.226072351Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:15:27.226075422Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginRequest
2025-11-07T22:15:27.226078232Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginRequest
2025-11-07T22:15:27.226080822Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseError
2025-11-07T22:15:27.226083402Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseError
2025-11-07T22:15:27.226086303Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseWithSession
2025-11-07T22:15:27.226089343Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseWithSession
2025-11-07T22:15:27.226092213Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:15:27.226096233Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:15:27.226099014Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:15:27.226102084Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:15:27.226105824Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:15:27.226108234Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:15:27.226110805Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:15:27.22616779Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:15:27.22617224Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:15:27.22617495Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:15:27.226178151Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:15:27.226180701Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:15:27.226183571Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:15:27.226186201Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:15:27.226188731Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:15:27.226195372Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:15:27.226299191Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:15:27.226305551Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:15:27.226308502Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:15:27.226311662Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:15:27.226314272Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Error
2025-11-07T22:15:27.226316802Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Error
2025-11-07T22:15:27.226319803Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Success
2025-11-07T22:15:27.226369417Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Success
2025-11-07T22:15:27.226374567Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:15:27.226377597Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:15:27.226380228Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:15:27.226386818Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:15:27.226460705Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:15:27.226465855Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:15:27.226468725Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:15:27.226504348Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:15:27.226508469Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:15:27.22652054Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:15:27.22652448Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:15:27.226579445Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:15:27.226592716Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:15:27.22664239Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:15:27.226647571Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:15:27.226654491Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:15:27.226664792Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:15:27.226686514Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:15:27.226690144Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:15:27.226725477Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:15:27.226729888Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:15:27.226775372Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:15:27.226781852Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:15:27.226790063Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:15:27.226793773Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:15:27.226800434Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:15:27.226807254Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:15:27.226813725Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:15:27.226835837Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateRequest
2025-11-07T22:15:27.226842437Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateRequest
2025-11-07T22:15:27.226845648Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponse
2025-11-07T22:15:27.226886901Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponse
2025-11-07T22:15:27.226893762Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponseError
2025-11-07T22:15:27.226901312Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponseError
2025-11-07T22:15:27.226904083Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:15:27.226909743Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:15:27.226912453Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationRequest
2025-11-07T22:15:27.226924734Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationRequest
2025-11-07T22:15:27.226927665Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponse
2025-11-07T22:15:27.226942536Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponse
2025-11-07T22:15:27.226945846Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:15:27.22698816Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:15:27.22699303Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:15:27.22699607Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:15:27.226998961Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationRequest
2025-11-07T22:15:27.227007022Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationRequest
2025-11-07T22:15:27.227011822Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponse
2025-11-07T22:15:27.227018082Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponse
2025-11-07T22:15:27.227020853Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponseError
2025-11-07T22:15:27.227026553Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponseError
2025-11-07T22:15:27.227047385Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:15:27.227053426Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:15:27.227056266Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationRequest
2025-11-07T22:15:27.227095489Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationRequest
2025-11-07T22:15:27.227099819Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponse
2025-11-07T22:15:27.227139173Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponse
2025-11-07T22:15:27.227145573Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:15:27.227155384Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:15:27.227158454Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:15:27.227182357Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:16:17.260383146Z [Requesting] Received request for path: /Recipe/createRecipe
2025-11-07T22:16:17.260461523Z 🟢 Requesting.request ACTION CALLED with inputs: {
2025-11-07T22:16:17.260466303Z   "session": "019a6048-1789-7e3c-be19-11db018ae8d9",
2025-11-07T22:16:17.260470883Z   "title": "lychee martini (Fork)",
2025-11-07T22:16:17.260475334Z   "description": null,
2025-11-07T22:16:17.260479174Z   "ingredients": [
2025-11-07T22:16:17.260483084Z     {
2025-11-07T22:16:17.260487445Z       "name": "Vodka",
2025-11-07T22:16:17.260491185Z       "quantity": "2",
2025-11-07T22:16:17.260494925Z       "unit": "oz",
2025-11-07T22:16:17.260498836Z       "notes": "Premium quality recommended"
2025-11-07T22:16:17.260502866Z     },
2025-11-07T22:16:17.260506756Z     {
2025-11-07T22:16:17.260511127Z       "name": "Lychee Liqueur",
2025-11-07T22:16:17.260515007Z       "quantity": "1",
2025-11-07T22:16:17.260519037Z       "unit": "oz",
2025-11-07T22:16:17.260523388Z       "notes": "Alternatively, use 1 oz lychee juice from canned lychees and a splash of simple syrup if desired"
2025-11-07T22:16:17.260527208Z     },
2025-11-07T22:16:17.260531438Z     {
2025-11-07T22:16:17.260535259Z       "name": "Dry Vermouth",
2025-11-07T22:16:17.260539059Z       "quantity": "0.5",
2025-11-07T22:16:17.26054327Z       "unit": "oz",
2025-11-07T22:16:17.260569612Z       "notes": "Optional, for a drier martini"
2025-11-07T22:16:17.260573712Z     },
2025-11-07T22:16:17.260577522Z     {
2025-11-07T22:16:17.260581263Z       "name": "Fresh Lychee",
2025-11-07T22:16:17.260585103Z       "quantity": "1-2",
2025-11-07T22:16:17.260588863Z       "unit": "",
2025-11-07T22:16:17.260592564Z       "notes": "For garnish, or a canned lychee"
2025-11-07T22:16:17.260596454Z     },
2025-11-07T22:16:17.260600244Z     {
2025-11-07T22:16:17.260603995Z       "name": "Ice",
2025-11-07T22:16:17.260607875Z       "quantity": "as needed",
2025-11-07T22:16:17.260611705Z       "unit": "",
2025-11-07T22:16:17.260615616Z       "notes": ""
2025-11-07T22:16:17.260619866Z     }
2025-11-07T22:16:17.260623656Z   ],
2025-11-07T22:16:17.260627647Z   "steps": [
2025-11-07T22:16:17.260631557Z     {
2025-11-07T22:16:17.260636218Z       "description": "Chill a martini glass by placing it in the freezer or filling it with ice water and letting it sit for a few minutes.",
2025-11-07T22:16:17.260652419Z       "notes": ""
2025-11-07T22:16:17.260654889Z     },
2025-11-07T22:16:17.260657169Z     {
2025-11-07T22:16:17.260659509Z       "description": "Fill a cocktail shaker with ice.",
2025-11-07T22:16:17.26066188Z       "notes": ""
2025-11-07T22:16:17.26066407Z     },
2025-11-07T22:16:17.26066632Z     {
2025-11-07T22:16:17.26066859Z       "description": "Add the vodka, lychee liqueur (or lychee juice/syrup), and dry vermouth (if using) to the shaker.",
2025-11-07T22:16:17.26067085Z       "notes": ""
2025-11-07T22:16:17.260673071Z     },
2025-11-07T22:16:17.260675411Z     {
2025-11-07T22:16:17.260678251Z       "description": "Shake vigorously for about 15-20 seconds until the mixture is thoroughly chilled.",
2025-11-07T22:16:17.260680431Z       "notes": ""
2025-11-07T22:16:17.260682662Z     },
2025-11-07T22:16:17.260684812Z     {
2025-11-07T22:16:17.260687102Z       "description": "Discard the ice from the chilled martini glass (if used). Strain the contents of the shaker into the cold martini glass.",
2025-11-07T22:16:17.260689342Z       "notes": ""
2025-11-07T22:16:17.260691472Z     },
2025-11-07T22:16:17.260693672Z     {
2025-11-07T22:16:17.260695943Z       "description": "Garnish with a fresh lychee or a lychee from a can, perhaps speared on a cocktail pick.",
2025-11-07T22:16:17.260698753Z       "notes": "You can also add a small lychee slice to the rim."
2025-11-07T22:16:17.260700923Z     }
2025-11-07T22:16:17.260703133Z   ],
2025-11-07T22:16:17.260705363Z   "tags": [],
2025-11-07T22:16:17.260707653Z   "forkedFrom": "019a6047-6091-77ff-8795-80c360bb5871",
2025-11-07T22:16:17.260710034Z   "path": "/Recipe/createRecipe"
2025-11-07T22:16:17.260712174Z }
2025-11-07T22:16:17.260714494Z 🟢 Generated request ID: 019a6064-4c69-7de1-a58c-22fe3d0b62d8
2025-11-07T22:16:17.260716774Z 🟢 Inserting request doc into database...
2025-11-07T22:16:17.32492585Z 🟢 Request doc inserted successfully
2025-11-07T22:16:17.325069092Z 🟢 Returning request ID to sync engine: 019a6064-4c69-7de1-a58c-22fe3d0b62d8
2025-11-07T22:16:17.325074923Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:16:17.325686075Z 
2025-11-07T22:16:17.325705657Z Requesting.request {
2025-11-07T22:16:17.325709427Z   session: '019a6048-1789-7e3c-be19-11db018ae8d9',
2025-11-07T22:16:17.325712348Z   title: 'lychee martini (Fork)',
2025-11-07T22:16:17.325714768Z   description: null,
2025-11-07T22:16:17.325717018Z   ingredients: [
2025-11-07T22:16:17.325719448Z     {
2025-11-07T22:16:17.325721719Z       name: 'Vodka',
2025-11-07T22:16:17.325723919Z       quantity: '2',
2025-11-07T22:16:17.325726099Z       unit: 'oz',
2025-11-07T22:16:17.325728709Z       notes: 'Premium quality recommended'
2025-11-07T22:16:17.325731139Z     },
2025-11-07T22:16:17.32573338Z     {
2025-11-07T22:16:17.32573607Z       name: 'Lychee Liqueur',
2025-11-07T22:16:17.32573817Z       quantity: '1',
2025-11-07T22:16:17.3257403Z       unit: 'oz',
2025-11-07T22:16:17.32574313Z       notes: 'Alternatively, use 1 oz lychee juice from canned lychees and a splash of simple syrup if desired'
2025-11-07T22:16:17.325745401Z     },
2025-11-07T22:16:17.325747691Z     {
2025-11-07T22:16:17.325749821Z       name: 'Dry Vermouth',
2025-11-07T22:16:17.325752421Z       quantity: '0.5',
2025-11-07T22:16:17.325754661Z       unit: 'oz',
2025-11-07T22:16:17.325756862Z       notes: 'Optional, for a drier martini'
2025-11-07T22:16:17.325759212Z     },
2025-11-07T22:16:17.325761352Z     {
2025-11-07T22:16:17.325763482Z       name: 'Fresh Lychee',
2025-11-07T22:16:17.325765622Z       quantity: '1-2',
2025-11-07T22:16:17.325781933Z       unit: '',
2025-11-07T22:16:17.325786414Z       notes: 'For garnish, or a canned lychee'
2025-11-07T22:16:17.325788984Z     },
2025-11-07T22:16:17.325791354Z     { name: 'Ice', quantity: 'as needed', unit: '', notes: '' }
2025-11-07T22:16:17.325793485Z   ],
2025-11-07T22:16:17.325795635Z   steps: [
2025-11-07T22:16:17.325798365Z     {
2025-11-07T22:16:17.325801755Z       description: 'Chill a martini glass by placing it in the freezer or filling it with ice water and letting it sit for a few minutes.',
2025-11-07T22:16:17.325804275Z       notes: ''
2025-11-07T22:16:17.325806796Z     },
2025-11-07T22:16:17.325809926Z     { description: 'Fill a cocktail shaker with ice.', notes: '' },
2025-11-07T22:16:17.325812506Z     {
2025-11-07T22:16:17.325815587Z       description: 'Add the vodka, lychee liqueur (or lychee juice/syrup), and dry vermouth (if using) to the shaker.',
2025-11-07T22:16:17.325818077Z       notes: ''
2025-11-07T22:16:17.325820757Z     },
2025-11-07T22:16:17.325823297Z     {
2025-11-07T22:16:17.325825937Z       description: 'Shake vigorously for about 15-20 seconds until the mixture is thoroughly chilled.',
2025-11-07T22:16:17.325828568Z       notes: ''
2025-11-07T22:16:17.325831228Z     },
2025-11-07T22:16:17.325833858Z     {
2025-11-07T22:16:17.325836358Z       description: 'Discard the ice from the chilled martini glass (if used). Strain the contents of the shaker into the cold martini glass.',
2025-11-07T22:16:17.325838909Z       notes: ''
2025-11-07T22:16:17.325841709Z     },
2025-11-07T22:16:17.325844189Z     {
2025-11-07T22:16:17.325846489Z       description: 'Garnish with a fresh lychee or a lychee from a can, perhaps speared on a cocktail pick.',
2025-11-07T22:16:17.325848999Z       notes: 'You can also add a small lychee slice to the rim.'
2025-11-07T22:16:17.325851719Z     }
2025-11-07T22:16:17.32585435Z   ],
2025-11-07T22:16:17.32585673Z   tags: [],
2025-11-07T22:16:17.32585934Z   forkedFrom: '019a6047-6091-77ff-8795-80c360bb5871',
2025-11-07T22:16:17.325862111Z   path: '/Recipe/createRecipe'
2025-11-07T22:16:17.325864621Z } => { request: '019a6064-4c69-7de1-a58c-22fe3d0b62d8' }
2025-11-07T22:16:17.325867161Z 
2025-11-07T22:16:17.325877822Z 🔵 SYNC ENGINE: Found 66 syncs for this action
2025-11-07T22:16:17.325880682Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:16:17.325883832Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:16:17.325889883Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:16:17.325998242Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:16:17.326078229Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftRequest
2025-11-07T22:16:17.326188218Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftRequest
2025-11-07T22:16:17.326265715Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftResponse
2025-11-07T22:16:17.326616805Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftResponse
2025-11-07T22:16:17.326630886Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:16:17.326634527Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:16:17.326637637Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeRequest
2025-11-07T22:16:17.326640657Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.CreateRecipeRequest
2025-11-07T22:16:17.326643637Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.CreateRecipeRequest
2025-11-07T22:16:17.328524869Z 🔧 _getUser called with session: 019a6048-1789-7e3c-be19-11db018ae8d9
2025-11-07T22:16:17.392459601Z ✅ _getUser - Found user: 019a6041-1e82-76f1-be1b-19ebde0a35e0
2025-11-07T22:16:17.392716413Z 🔵 SYNC ENGINE: where() returned 1 frames
2025-11-07T22:16:17.392729784Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.CreateRecipeRequest
2025-11-07T22:16:17.462017015Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:16:17.462050228Z 
2025-11-07T22:16:17.462054899Z Recipe.createRecipe {
2025-11-07T22:16:17.462058399Z   owner: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:16:17.462061569Z   title: 'lychee martini (Fork)',
2025-11-07T22:16:17.462064519Z   ingredients: [
2025-11-07T22:16:17.46206647Z     {
2025-11-07T22:16:17.46206834Z       name: 'Vodka',
2025-11-07T22:16:17.46207003Z       quantity: '2',
2025-11-07T22:16:17.46207241Z       unit: 'oz',
2025-11-07T22:16:17.46207436Z       notes: 'Premium quality recommended'
2025-11-07T22:16:17.46207608Z     },
2025-11-07T22:16:17.462077741Z     {
2025-11-07T22:16:17.462079971Z       name: 'Lychee Liqueur',
2025-11-07T22:16:17.462081691Z       quantity: '1',
2025-11-07T22:16:17.462083341Z       unit: 'oz',
2025-11-07T22:16:17.462085981Z       notes: 'Alternatively, use 1 oz lychee juice from canned lychees and a splash of simple syrup if desired'
2025-11-07T22:16:17.462087761Z     },
2025-11-07T22:16:17.462089442Z     {
2025-11-07T22:16:17.462091082Z       name: 'Dry Vermouth',
2025-11-07T22:16:17.462092722Z       quantity: '0.5',
2025-11-07T22:16:17.462094362Z       unit: 'oz',
2025-11-07T22:16:17.462096012Z       notes: 'Optional, for a drier martini'
2025-11-07T22:16:17.462098282Z     },
2025-11-07T22:16:17.462100913Z     {
2025-11-07T22:16:17.462103833Z       name: 'Fresh Lychee',
2025-11-07T22:16:17.462106503Z       quantity: '1-2',
2025-11-07T22:16:17.462109213Z       unit: '',
2025-11-07T22:16:17.462112074Z       notes: 'For garnish, or a canned lychee'
2025-11-07T22:16:17.462115284Z     },
2025-11-07T22:16:17.462118144Z     { name: 'Ice', quantity: 'as needed', unit: '', notes: '' }
2025-11-07T22:16:17.462120874Z   ],
2025-11-07T22:16:17.462123455Z   steps: [
2025-11-07T22:16:17.462126055Z     {
2025-11-07T22:16:17.462129235Z       description: 'Chill a martini glass by placing it in the freezer or filling it with ice water and letting it sit for a few minutes.',
2025-11-07T22:16:17.462131925Z       notes: ''
2025-11-07T22:16:17.462134276Z     },
2025-11-07T22:16:17.462137376Z     { description: 'Fill a cocktail shaker with ice.', notes: '' },
2025-11-07T22:16:17.462140156Z     {
2025-11-07T22:16:17.462143366Z       description: 'Add the vodka, lychee liqueur (or lychee juice/syrup), and dry vermouth (if using) to the shaker.',
2025-11-07T22:16:17.462145977Z       notes: ''
2025-11-07T22:16:17.462148327Z     },
2025-11-07T22:16:17.462151157Z     {
2025-11-07T22:16:17.462153627Z       description: 'Shake vigorously for about 15-20 seconds until the mixture is thoroughly chilled.',
2025-11-07T22:16:17.462156167Z       notes: ''
2025-11-07T22:16:17.462158678Z     },
2025-11-07T22:16:17.462161018Z     {
2025-11-07T22:16:17.462163588Z       description: 'Discard the ice from the chilled martini glass (if used). Strain the contents of the shaker into the cold martini glass.',
2025-11-07T22:16:17.462166198Z       notes: ''
2025-11-07T22:16:17.462168548Z     },
2025-11-07T22:16:17.462171029Z     {
2025-11-07T22:16:17.462173989Z       description: 'Garnish with a fresh lychee or a lychee from a can, perhaps speared on a cocktail pick.',
2025-11-07T22:16:17.46219159Z       notes: 'You can also add a small lychee slice to the rim.'
2025-11-07T22:16:17.462194911Z     }
2025-11-07T22:16:17.462197891Z   ],
2025-11-07T22:16:17.462204222Z   description: undefined,
2025-11-07T22:16:17.462210472Z   forkedFrom: undefined
2025-11-07T22:16:17.462213452Z } => { recipe: '019a6064-4cf0-70ea-bb39-efcf7013a1bf' }
2025-11-07T22:16:17.462216012Z 
2025-11-07T22:16:17.462218623Z 🔵 SYNC ENGINE: Found 2 syncs for this action
2025-11-07T22:16:17.462221373Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:16:17.462224383Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:16:17.462227173Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeResponse
2025-11-07T22:16:17.462229724Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.CreateRecipeResponse
2025-11-07T22:16:17.462232444Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.CreateRecipeResponse
2025-11-07T22:16:17.542491706Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:16:17.542599865Z 
2025-11-07T22:16:17.542613317Z Requesting.respond {
2025-11-07T22:16:17.542617667Z   request: '019a6064-4c69-7de1-a58c-22fe3d0b62d8',
2025-11-07T22:16:17.542622627Z   recipe: '019a6064-4cf0-70ea-bb39-efcf7013a1bf'
2025-11-07T22:16:17.542626948Z } => { request: '019a6064-4c69-7de1-a58c-22fe3d0b62d8' }
2025-11-07T22:16:17.542630798Z 
2025-11-07T22:16:17.542634938Z 🔵 SYNC ENGINE: Found 0 syncs for this action
2025-11-07T22:16:17.542678972Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeResponse
2025-11-07T22:16:17.542685563Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeResponse
2025-11-07T22:16:17.542689943Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:16:17.544766171Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:16:17.544779502Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:16:17.544784492Z 🔵 SYNC ENGINE: where() returned 0 frames
2025-11-07T22:16:17.544788843Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:16:17.544793333Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:16:17.544796924Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:16:17.544800744Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:16:17.544804774Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:16:17.544808685Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeRequest
2025-11-07T22:16:17.544812565Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeRequest
2025-11-07T22:16:17.544816425Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeResponse
2025-11-07T22:16:17.544820546Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeResponse
2025-11-07T22:16:17.544828686Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:16:17.544832427Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:16:17.544836087Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:16:17.544839947Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:16:17.544843698Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:16:17.544849538Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:16:17.54486509Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:16:17.54486824Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:16:17.54487054Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:16:17.54487279Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:16:17.54487499Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:16:17.544877231Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:16:17.544879811Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:16:17.544882751Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:16:17.544885061Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:16:17.544887711Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:16:17.544890452Z 🔵 SYNC ENGINE: Checking sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:16:17.544892772Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:16:17.544894982Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginRequest
2025-11-07T22:16:17.544897232Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginRequest
2025-11-07T22:16:17.544899693Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseError
2025-11-07T22:16:17.544901863Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseError
2025-11-07T22:16:17.544904043Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseWithSession
2025-11-07T22:16:17.544906503Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseWithSession
2025-11-07T22:16:17.544909073Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:16:17.544911374Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:16:17.544913604Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:16:17.544916084Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:16:17.544918404Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:16:17.544920604Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:16:17.544922815Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:16:17.544925035Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:16:17.544927245Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:16:17.544929515Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:16:17.544931825Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:16:17.544934215Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:16:17.544936545Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:16:17.544938706Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:16:17.544943726Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:16:17.544951157Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:16:17.544954097Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:16:17.544959387Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:16:17.544962088Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:16:17.544964488Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:16:17.544967008Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Error
2025-11-07T22:16:17.544969468Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Error
2025-11-07T22:16:17.544972139Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Success
2025-11-07T22:16:17.544974729Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Success
2025-11-07T22:16:17.544977039Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:16:17.544979459Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:16:17.5449817Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:16:17.54498391Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:16:17.54498611Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:16:17.5449884Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:16:17.54499088Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:16:17.544993501Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:16:17.544996061Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:16:17.544998241Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:16:17.545000421Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:16:17.545002561Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:16:17.545004702Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:16:17.545007282Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:16:17.545009512Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:16:17.545011642Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:16:17.545013972Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:16:17.54533476Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:16:17.54533873Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:16:17.54534104Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:16:17.545343371Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:16:17.545346041Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:16:17.545348601Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:16:17.545350931Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:16:17.545358462Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:16:17.545360852Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:16:17.545363282Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:16:17.545365502Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:16:17.545367842Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateRequest
2025-11-07T22:16:17.545370223Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateRequest
2025-11-07T22:16:17.545372603Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponse
2025-11-07T22:16:17.545375193Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponse
2025-11-07T22:16:17.545377643Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponseError
2025-11-07T22:16:17.545379954Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponseError
2025-11-07T22:16:17.545382594Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:16:17.545385134Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:16:17.545387734Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationRequest
2025-11-07T22:16:17.545390015Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationRequest
2025-11-07T22:16:17.545392555Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponse
2025-11-07T22:16:17.545410746Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponse
2025-11-07T22:16:17.545413386Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:16:17.545415547Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:16:17.545417867Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:16:17.545420197Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:16:17.545422457Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationRequest
2025-11-07T22:16:17.545424747Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationRequest
2025-11-07T22:16:17.545426958Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponse
2025-11-07T22:16:17.545429548Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponse
2025-11-07T22:16:17.545432018Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponseError
2025-11-07T22:16:17.545434478Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponseError
2025-11-07T22:16:17.545437019Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:16:17.545439579Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:16:17.545442039Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationRequest
2025-11-07T22:16:17.545444509Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationRequest
2025-11-07T22:16:17.545446749Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponse
2025-11-07T22:16:17.545449Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponse
2025-11-07T22:16:17.54545119Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:16:17.54545757Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:16:17.545459861Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:16:17.545462101Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:16:18.1197003Z [Requesting] Received request for path: /Notebook/shareRecipe
2025-11-07T22:16:18.119799499Z 🟢 Requesting.request ACTION CALLED with inputs: {
2025-11-07T22:16:18.11981344Z   "session": "019a6048-1789-7e3c-be19-11db018ae8d9",
2025-11-07T22:16:18.119818131Z   "recipe": "019a6064-4cf0-70ea-bb39-efcf7013a1bf",
2025-11-07T22:16:18.119822081Z   "notebook": "019a6047-47b0-7941-86b6-b578d334be0e",
2025-11-07T22:16:18.119826711Z   "path": "/Notebook/shareRecipe"
2025-11-07T22:16:18.119830601Z }
2025-11-07T22:16:18.119834672Z 🟢 Generated request ID: 019a6064-4fc6-754d-a9d1-bb3e68e8bc30
2025-11-07T22:16:18.119838742Z 🟢 Inserting request doc into database...
2025-11-07T22:16:18.188168591Z 🟢 Request doc inserted successfully
2025-11-07T22:16:18.188199174Z 🟢 Returning request ID to sync engine: 019a6064-4fc6-754d-a9d1-bb3e68e8bc30
2025-11-07T22:16:18.188204594Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:16:18.188208755Z 
2025-11-07T22:16:18.188214055Z Requesting.request {
2025-11-07T22:16:18.188218305Z   session: '019a6048-1789-7e3c-be19-11db018ae8d9',
2025-11-07T22:16:18.188222796Z   recipe: '019a6064-4cf0-70ea-bb39-efcf7013a1bf',
2025-11-07T22:16:18.188226556Z   notebook: '019a6047-47b0-7941-86b6-b578d334be0e',
2025-11-07T22:16:18.188231107Z   path: '/Notebook/shareRecipe'
2025-11-07T22:16:18.188235627Z } => { request: '019a6064-4fc6-754d-a9d1-bb3e68e8bc30' }
2025-11-07T22:16:18.188239527Z 
2025-11-07T22:16:18.188243668Z 🔵 SYNC ENGINE: Found 66 syncs for this action
2025-11-07T22:16:18.188248228Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:16:18.188253388Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:16:18.188257609Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:16:18.188261849Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:16:18.18826582Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftRequest
2025-11-07T22:16:18.18826975Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftRequest
2025-11-07T22:16:18.18827408Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftResponse
2025-11-07T22:16:18.188277921Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftResponse
2025-11-07T22:16:18.188281871Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:16:18.188285531Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:16:18.188289272Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeRequest
2025-11-07T22:16:18.188293292Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeRequest
2025-11-07T22:16:18.188297242Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeResponse
2025-11-07T22:16:18.188301203Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeResponse
2025-11-07T22:16:18.188305053Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:16:18.188309573Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:16:18.188313764Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:16:18.188335966Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:16:18.188339496Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:16:18.188342146Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:16:18.188344796Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeRequest
2025-11-07T22:16:18.188347247Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeRequest
2025-11-07T22:16:18.188349837Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeResponse
2025-11-07T22:16:18.188351917Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeResponse
2025-11-07T22:16:18.188354407Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:16:18.188357068Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:16:18.188359968Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:16:18.188362648Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:16:18.188365038Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:16:18.188367518Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:16:18.188370309Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:16:18.188373399Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:16:18.188376419Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:16:18.188378799Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:16:18.18838137Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:16:18.18838372Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:16:18.18838601Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:16:18.18838831Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:16:18.18839093Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:16:18.18839358Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:16:18.188396291Z 🔵 SYNC ENGINE: Checking sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:16:18.188398921Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:16:18.188401471Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginRequest
2025-11-07T22:16:18.188404061Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginRequest
2025-11-07T22:16:18.188406832Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseError
2025-11-07T22:16:18.188409352Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseError
2025-11-07T22:16:18.188416782Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseWithSession
2025-11-07T22:16:18.188419813Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseWithSession
2025-11-07T22:16:18.188422323Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:16:18.188425133Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:16:18.188427523Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:16:18.188429944Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:16:18.188439144Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:16:18.188441925Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:16:18.188444815Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:16:18.188447385Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:16:18.188450105Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:16:18.188452956Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:16:18.188455506Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:16:18.188457966Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:16:18.188460686Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:16:18.188463006Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:16:18.188465247Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:16:18.188467487Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:16:18.188469917Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:16:18.188472727Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:16:18.188474967Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:16:18.188477398Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:16:18.188479698Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Error
2025-11-07T22:16:18.188482198Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Error
2025-11-07T22:16:18.188484668Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Success
2025-11-07T22:16:18.188487239Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Success
2025-11-07T22:16:18.188489439Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:16:18.188491829Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:16:18.188494569Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:16:18.188497549Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:16:18.18850007Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:16:18.18850331Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:16:18.18850588Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:16:18.18850813Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:16:18.188510721Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:16:18.188513391Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:16:18.188516101Z 🔵 SYNC ENGINE: Calling where() for sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:16:18.188518811Z 🔵 SYNC ENGINE: where() returned 0 frames
2025-11-07T22:16:18.188526912Z 🔵 SYNC ENGINE: Calling addThen for sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:16:18.188529562Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:16:18.188531992Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:16:18.188534293Z 🔵 SYNC ENGINE: Calling where() for sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:16:18.188536653Z 🔧 _getUser called with session: 019a6048-1789-7e3c-be19-11db018ae8d9
2025-11-07T22:16:18.252622888Z ✅ _getUser - Found user: 019a6041-1e82-76f1-be1b-19ebde0a35e0
2025-11-07T22:16:18.382483713Z 🔵 SYNC ENGINE: where() returned 1 frames
2025-11-07T22:16:18.382510276Z 🔵 SYNC ENGINE: Calling addThen for sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:16:18.527811355Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:16:18.527938396Z 
2025-11-07T22:16:18.527946207Z Notebook.shareRecipe {
2025-11-07T22:16:18.527949817Z   sharer: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:16:18.527952047Z   recipe: '019a6064-4cf0-70ea-bb39-efcf7013a1bf',
2025-11-07T22:16:18.527954287Z   notebook: '019a6047-47b0-7941-86b6-b578d334be0e'
2025-11-07T22:16:18.527956397Z } => {}
2025-11-07T22:16:18.527958277Z 
2025-11-07T22:16:18.527960848Z 🔵 SYNC ENGINE: Found 2 syncs for this action
2025-11-07T22:16:18.527963788Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:16:18.527971019Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:16:18.527973869Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:16:18.528049936Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:16:18.528058736Z 🔵 SYNC ENGINE: Calling addThen for sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:16:18.608484093Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:16:18.608538957Z 
2025-11-07T22:16:18.608543318Z Requesting.respond {
2025-11-07T22:16:18.60857145Z   request: '019a6064-4fc6-754d-a9d1-bb3e68e8bc30',
2025-11-07T22:16:18.608575Z   status: 'Recipe shared successfully.'
2025-11-07T22:16:18.608578191Z } => { request: '019a6064-4fc6-754d-a9d1-bb3e68e8bc30' }
2025-11-07T22:16:18.608580461Z 
2025-11-07T22:16:18.608583141Z 🔵 SYNC ENGINE: Found 0 syncs for this action
2025-11-07T22:16:18.608586881Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:16:18.60869444Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:16:18.608701401Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:16:18.608704232Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:16:18.608706462Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:16:18.608713332Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:16:18.608715853Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:16:18.608758386Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:16:18.608762457Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:16:18.608765347Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:16:18.608774547Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:16:18.608798609Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:16:18.60880155Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:16:18.608836493Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:16:18.608840143Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:16:18.608848334Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:16:18.608851634Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateRequest
2025-11-07T22:16:18.608889907Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateRequest
2025-11-07T22:16:18.608893588Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponse
2025-11-07T22:16:18.608895908Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponse
2025-11-07T22:16:18.608898038Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponseError
2025-11-07T22:16:18.608929731Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponseError
2025-11-07T22:16:18.609091985Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:16:18.609676535Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:16:18.609690696Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationRequest
2025-11-07T22:16:18.609694046Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationRequest
2025-11-07T22:16:18.609696766Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponse
2025-11-07T22:16:18.609699557Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponse
2025-11-07T22:16:18.609702567Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:16:18.609705567Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:16:18.609717258Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:16:18.609720039Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:16:18.609721879Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationRequest
2025-11-07T22:16:18.609723859Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationRequest
2025-11-07T22:16:18.609726479Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponse
2025-11-07T22:16:18.609729509Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponse
2025-11-07T22:16:18.60973226Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponseError
2025-11-07T22:16:18.6097352Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponseError
2025-11-07T22:16:18.6097379Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:16:18.60974042Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:16:18.60974319Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationRequest
2025-11-07T22:16:18.609746411Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationRequest
2025-11-07T22:16:18.609748931Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponse
2025-11-07T22:16:18.609751151Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponse
2025-11-07T22:16:18.609753441Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:16:18.609768533Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:16:18.609771133Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:16:18.609773403Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:16:30.341252161Z [Requesting] Received request for path: /Recipe/draftRecipeWithAI
2025-11-07T22:16:30.341288864Z 🟢 Requesting.request ACTION CALLED with inputs: {
2025-11-07T22:16:30.341293875Z   "session": "019a6048-1789-7e3c-be19-11db018ae8d9",
2025-11-07T22:16:30.341298415Z   "recipe": "019a6064-4cf0-70ea-bb39-efcf7013a1bf",
2025-11-07T22:16:30.341302996Z   "goal": "make it non-alcoholic",
2025-11-07T22:16:30.341306826Z   "path": "/Recipe/draftRecipeWithAI"
2025-11-07T22:16:30.341310396Z }
2025-11-07T22:16:30.341321727Z 🟢 Generated request ID: 019a6064-7f85-7722-b853-fe226f980a54
2025-11-07T22:16:30.341326348Z 🟢 Inserting request doc into database...
2025-11-07T22:16:30.411818102Z 🟢 Request doc inserted successfully
2025-11-07T22:16:30.411846575Z 🟢 Returning request ID to sync engine: 019a6064-7f85-7722-b853-fe226f980a54
2025-11-07T22:16:30.411852005Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:16:30.411855646Z 
2025-11-07T22:16:30.411859966Z Requesting.request {
2025-11-07T22:16:30.411864446Z   session: '019a6048-1789-7e3c-be19-11db018ae8d9',
2025-11-07T22:16:30.411868727Z   recipe: '019a6064-4cf0-70ea-bb39-efcf7013a1bf',
2025-11-07T22:16:30.411873047Z   goal: 'make it non-alcoholic',
2025-11-07T22:16:30.411877077Z   path: '/Recipe/draftRecipeWithAI'
2025-11-07T22:16:30.411881118Z } => { request: '019a6064-7f85-7722-b853-fe226f980a54' }
2025-11-07T22:16:30.411884698Z 
2025-11-07T22:16:30.411888618Z 🔵 SYNC ENGINE: Found 66 syncs for this action
2025-11-07T22:16:30.411892819Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:16:30.411897179Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:16:30.411900999Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:16:30.41190503Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:16:30.41190908Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftRequest
2025-11-07T22:16:30.41191296Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftRequest
2025-11-07T22:16:30.411917471Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftResponse
2025-11-07T22:16:30.411921631Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftResponse
2025-11-07T22:16:30.411925641Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:16:30.411929512Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:16:30.411933322Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeRequest
2025-11-07T22:16:30.411937202Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeRequest
2025-11-07T22:16:30.411941193Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeResponse
2025-11-07T22:16:30.411944933Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeResponse
2025-11-07T22:16:30.411948773Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:16:30.411952544Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:16:30.411956384Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:16:30.411976576Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:16:30.411979166Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:16:30.411981386Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:16:30.411983776Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeRequest
2025-11-07T22:16:30.411986037Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeRequest
2025-11-07T22:16:30.411988397Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeResponse
2025-11-07T22:16:30.411990707Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeResponse
2025-11-07T22:16:30.411992957Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:16:30.411995237Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:16:30.411997558Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:16:30.411999898Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:16:30.412002338Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:16:30.412004708Z 🔧 _getUser called with session: 019a6048-1789-7e3c-be19-11db018ae8d9
2025-11-07T22:16:30.504937617Z ✅ _getUser - Found user: 019a6041-1e82-76f1-be1b-19ebde0a35e0
2025-11-07T22:16:30.504966429Z 🔵 SYNC ENGINE: where() returned 1 frames
2025-11-07T22:16:30.50496997Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:16:45.751939598Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:16:45.752850426Z 
2025-11-07T22:16:45.752870198Z Recipe.draftRecipeWithAI {
2025-11-07T22:16:45.752875388Z   author: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:16:45.752879688Z   recipe: '019a6064-4cf0-70ea-bb39-efcf7013a1bf',
2025-11-07T22:16:45.752883439Z   goal: 'make it non-alcoholic'
2025-11-07T22:16:45.752887299Z } => {
2025-11-07T22:16:45.752891609Z   draftId: '019a6064-8079-7d39-9446-22f2cd1f6dc7',
2025-11-07T22:16:45.75289553Z   baseRecipe: '019a6064-4cf0-70ea-bb39-efcf7013a1bf',
2025-11-07T22:16:45.752919182Z   requester: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:16:45.752923362Z   goal: 'make it non-alcoholic',
2025-11-07T22:16:45.752928723Z   title: 'Virgin Lychee Martini',
2025-11-07T22:16:45.752932993Z   ingredients: [
2025-11-07T22:16:45.752937053Z     {
2025-11-07T22:16:45.752940884Z       name: 'Lychee Juice',
2025-11-07T22:16:45.752946024Z       quantity: '3',
2025-11-07T22:16:45.752950044Z       unit: 'oz',
2025-11-07T22:16:45.752958325Z       notes: 'From canned lychees (blended with a little of their syrup) or freshly pureed lychees. This replaces the alcoholic base.'
2025-11-07T22:16:45.752962795Z     },
2025-11-07T22:16:45.753010699Z     {
2025-11-07T22:16:45.753029591Z       name: 'Simple Syrup',
2025-11-07T22:16:45.753034852Z       quantity: '0.5',
2025-11-07T22:16:45.753039382Z       unit: 'oz',
2025-11-07T22:16:45.753044213Z       notes: 'Optional, adjust to taste based on the sweetness of your lychee juice.'
2025-11-07T22:16:45.753048383Z     },
2025-11-07T22:16:45.753052703Z     {
2025-11-07T22:16:45.753056983Z       name: 'Fresh Lemon Juice',
2025-11-07T22:16:45.753061134Z       quantity: '0.25',
2025-11-07T22:16:45.753065474Z       unit: 'oz',
2025-11-07T22:16:45.753070345Z       notes: 'To add brightness and balance.'
2025-11-07T22:16:45.753074585Z     },
2025-11-07T22:16:45.753103467Z     {
2025-11-07T22:16:45.753106548Z       name: 'Sparkling Water',
2025-11-07T22:16:45.753109068Z       quantity: '1',
2025-11-07T22:16:45.753111398Z       unit: 'oz',
2025-11-07T22:16:45.753113698Z       notes: 'Optional, for a light effervescence and body.'
2025-11-07T22:16:45.753116008Z     },
2025-11-07T22:16:45.753118369Z     {
2025-11-07T22:16:45.753120569Z       name: 'Fresh Lychee',
2025-11-07T22:16:45.753123249Z       quantity: '1-2',
2025-11-07T22:16:45.753125789Z       unit: 'piece',
2025-11-07T22:16:45.75312827Z       notes: 'For garnish, or a lychee from a can.'
2025-11-07T22:16:45.75313144Z     },
2025-11-07T22:16:45.75313439Z     { name: 'Ice', quantity: 'as needed' }
2025-11-07T22:16:45.75313683Z   ],
2025-11-07T22:16:45.753139161Z   steps: [
2025-11-07T22:16:45.753141461Z     {
2025-11-07T22:16:45.753144451Z       description: 'Chill a martini glass by placing it in the freezer or filling it with ice water and letting it sit for a few minutes.'
2025-11-07T22:16:45.753147011Z     },
2025-11-07T22:16:45.753149571Z     { description: 'Fill a cocktail shaker with ice.' },
2025-11-07T22:16:45.753152072Z     {
2025-11-07T22:16:45.753155162Z       description: 'Add the lychee juice, simple syrup (if using), and fresh lemon juice to the shaker.'
2025-11-07T22:16:45.753157672Z     },
2025-11-07T22:16:45.753160172Z     {
2025-11-07T22:16:45.753162753Z       description: 'Shake vigorously for about 15-20 seconds until the mixture is thoroughly chilled.'
2025-11-07T22:16:45.753165363Z     },
2025-11-07T22:16:45.753167863Z     {
2025-11-07T22:16:45.753170663Z       description: 'Discard the ice from the chilled martini glass (if used). Strain the contents of the shaker into the cold martini glass.'
2025-11-07T22:16:45.753173124Z     },
2025-11-07T22:16:45.753175504Z     {
2025-11-07T22:16:45.753178574Z       description: 'If desired, gently top with 1 oz of sparkling water.',
2025-11-07T22:16:45.753180914Z       notes: "This step is optional if you prefer a 'still' mocktail."
2025-11-07T22:16:45.753183044Z     },
2025-11-07T22:16:45.753185354Z     {
2025-11-07T22:16:45.753188435Z       description: 'Garnish with a fresh lychee or a lychee from a can, perhaps speared on a cocktail pick. (You can also add a small lychee slice to the rim.)'
2025-11-07T22:16:45.753190915Z     }
2025-11-07T22:16:45.753193275Z   ],
2025-11-07T22:16:45.753196935Z   notes: 'Replaced vodka and lychee liqueur with lychee juice and simple syrup. Added fresh lemon juice for balance and an optional splash of sparkling water for effervescence, transforming it into a non-alcoholic mocktail.',
2025-11-07T22:16:45.753199516Z   confidence: 0.9,
2025-11-07T22:16:45.753201996Z   created: 2025-11-07T22:16:30.585Z,
2025-11-07T22:16:45.753204516Z   expires: 2025-11-08T22:16:30.585Z
2025-11-07T22:16:45.753207176Z }
2025-11-07T22:16:45.753209577Z 
2025-11-07T22:16:45.753231529Z 🔵 SYNC ENGINE: Found 2 syncs for this action
2025-11-07T22:16:45.753234869Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:16:45.753237609Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:16:45.753239999Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:16:45.7532524Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:16:45.753255211Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:16:45.822205853Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:16:45.82322321Z 
2025-11-07T22:16:45.823244992Z Requesting.respond {
2025-11-07T22:16:45.823267074Z   request: '019a6064-7f85-7722-b853-fe226f980a54',
2025-11-07T22:16:45.823306727Z   draftId: '019a6064-8079-7d39-9446-22f2cd1f6dc7',
2025-11-07T22:16:45.823309778Z   baseRecipe: '019a6064-4cf0-70ea-bb39-efcf7013a1bf',
2025-11-07T22:16:45.823312198Z   requester: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:16:45.823315358Z   goal: 'make it non-alcoholic',
2025-11-07T22:16:45.823318388Z   title: 'Virgin Lychee Martini',
2025-11-07T22:16:45.823320608Z   ingredients: [
2025-11-07T22:16:45.823322948Z     {
2025-11-07T22:16:45.823325279Z       name: 'Lychee Juice',
2025-11-07T22:16:45.823327799Z       quantity: '3',
2025-11-07T22:16:45.823330129Z       unit: 'oz',
2025-11-07T22:16:45.823332849Z       notes: 'From canned lychees (blended with a little of their syrup) or freshly pureed lychees. This replaces the alcoholic base.'
2025-11-07T22:16:45.82333535Z     },
2025-11-07T22:16:45.82333757Z     {
2025-11-07T22:16:45.8233404Z       name: 'Simple Syrup',
2025-11-07T22:16:45.82334266Z       quantity: '0.5',
2025-11-07T22:16:45.823344881Z       unit: 'oz',
2025-11-07T22:16:45.823347651Z       notes: 'Optional, adjust to taste based on the sweetness of your lychee juice.'
2025-11-07T22:16:45.823349921Z     },
2025-11-07T22:16:45.823352121Z     {
2025-11-07T22:16:45.823354341Z       name: 'Fresh Lemon Juice',
2025-11-07T22:16:45.823371573Z       quantity: '0.25',
2025-11-07T22:16:45.823374193Z       unit: 'oz',
2025-11-07T22:16:45.823376463Z       notes: 'To add brightness and balance.'
2025-11-07T22:16:45.823378703Z     },
2025-11-07T22:16:45.823381133Z     {
2025-11-07T22:16:45.823383464Z       name: 'Sparkling Water',
2025-11-07T22:16:45.823385634Z       quantity: '1',
2025-11-07T22:16:45.823387954Z       unit: 'oz',
2025-11-07T22:16:45.823390424Z       notes: 'Optional, for a light effervescence and body.'
2025-11-07T22:16:45.823392605Z     },
2025-11-07T22:16:45.823394795Z     {
2025-11-07T22:16:45.823396915Z       name: 'Fresh Lychee',
2025-11-07T22:16:45.823399065Z       quantity: '1-2',
2025-11-07T22:16:45.823401355Z       unit: 'piece',
2025-11-07T22:16:45.823403626Z       notes: 'For garnish, or a lychee from a can.'
2025-11-07T22:16:45.823405856Z     },
2025-11-07T22:16:45.823408126Z     { name: 'Ice', quantity: 'as needed' }
2025-11-07T22:16:45.823410266Z   ],
2025-11-07T22:16:45.823412446Z   steps: [
2025-11-07T22:16:45.823414696Z     {
2025-11-07T22:16:45.823417657Z       description: 'Chill a martini glass by placing it in the freezer or filling it with ice water and letting it sit for a few minutes.'
2025-11-07T22:16:45.823419987Z     },
2025-11-07T22:16:45.823422807Z     { description: 'Fill a cocktail shaker with ice.' },
2025-11-07T22:16:45.823424987Z     {
2025-11-07T22:16:45.823427908Z       description: 'Add the lychee juice, simple syrup (if using), and fresh lemon juice to the shaker.'
2025-11-07T22:16:45.823430188Z     },
2025-11-07T22:16:45.823432448Z     {
2025-11-07T22:16:45.823434768Z       description: 'Shake vigorously for about 15-20 seconds until the mixture is thoroughly chilled.'
2025-11-07T22:16:45.823436948Z     },
2025-11-07T22:16:45.823439189Z     {
2025-11-07T22:16:45.823441409Z       description: 'Discard the ice from the chilled martini glass (if used). Strain the contents of the shaker into the cold martini glass.'
2025-11-07T22:16:45.823443599Z     },
2025-11-07T22:16:45.823445769Z     {
2025-11-07T22:16:45.823448399Z       description: 'If desired, gently top with 1 oz of sparkling water.',
2025-11-07T22:16:45.82345067Z       notes: "This step is optional if you prefer a 'still' mocktail."
2025-11-07T22:16:45.82346037Z     },
2025-11-07T22:16:45.82346284Z     {
2025-11-07T22:16:45.823465991Z       description: 'Garnish with a fresh lychee or a lychee from a can, perhaps speared on a cocktail pick. (You can also add a small lychee slice to the rim.)'
2025-11-07T22:16:45.823468831Z     }
2025-11-07T22:16:45.823471511Z   ],
2025-11-07T22:16:45.823474922Z   notes: 'Replaced vodka and lychee liqueur with lychee juice and simple syrup. Added fresh lemon juice for balance and an optional splash of sparkling water for effervescence, transforming it into a non-alcoholic mocktail.',
2025-11-07T22:16:45.823477752Z   confidence: 0.9,
2025-11-07T22:16:45.823480152Z   created: 2025-11-07T22:16:30.585Z,
2025-11-07T22:16:45.823482482Z   expires: 2025-11-08T22:16:30.585Z
2025-11-07T22:16:45.823484733Z } => { request: '019a6064-7f85-7722-b853-fe226f980a54' }
2025-11-07T22:16:45.823486753Z 
2025-11-07T22:16:45.823503544Z 🔵 SYNC ENGINE: Found 0 syncs for this action
2025-11-07T22:16:45.823510045Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:16:45.823521896Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:16:45.823524546Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:16:45.823526876Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:16:45.823538347Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:16:45.825649078Z 🔵 SYNC ENGINE: where() returned 0 frames
2025-11-07T22:16:45.82567422Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:16:45.825685931Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:16:45.825804181Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:16:45.825812452Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:16:45.825896709Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:16:45.82591061Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:16:45.825981987Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:16:45.825989837Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:16:45.826092036Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:16:45.826102947Z 🔵 SYNC ENGINE: Checking sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:16:45.826180704Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:16:45.826189254Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginRequest
2025-11-07T22:16:45.826268041Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginRequest
2025-11-07T22:16:45.826276382Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseError
2025-11-07T22:16:45.826346368Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseError
2025-11-07T22:16:45.826380581Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseWithSession
2025-11-07T22:16:45.826463348Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseWithSession
2025-11-07T22:16:45.826470909Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:16:45.826539335Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:16:45.827633388Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:16:45.82765163Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:16:45.82765477Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:16:45.82765769Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:16:45.82766002Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:16:45.827662901Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:16:45.827665891Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:16:45.827668591Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:16:45.827671681Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:16:45.827674432Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:16:45.827677152Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:16:45.827701514Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:16:45.827704154Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:16:45.827706544Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:16:45.827708835Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:16:45.827711095Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:16:45.827713735Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:16:45.827716676Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:16:45.827719166Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Error
2025-11-07T22:16:45.827721456Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Error
2025-11-07T22:16:45.827723876Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Success
2025-11-07T22:16:45.827726146Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Success
2025-11-07T22:16:45.827728457Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:16:45.827730827Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:16:45.827733147Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:16:45.827735527Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:16:45.827737787Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:16:45.827739978Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:16:45.827742318Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:16:45.827744498Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:16:45.82777456Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:16:45.827778681Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:16:45.827793572Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:16:45.827796922Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:16:45.827799772Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:16:45.827802443Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:16:45.827805113Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:16:45.827807753Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:16:45.827825245Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:16:45.827828635Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:16:45.827831605Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:16:45.827834246Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:16:45.827836916Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:16:45.827839406Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:16:45.827841916Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:16:45.827844276Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:16:45.827846827Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:16:45.827854927Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:16:45.827857488Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:16:45.827860098Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:16:45.827862748Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateRequest
2025-11-07T22:16:45.827865228Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateRequest
2025-11-07T22:16:45.827867658Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponse
2025-11-07T22:16:45.827870258Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponse
2025-11-07T22:16:45.827873109Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponseError
2025-11-07T22:16:45.827875409Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponseError
2025-11-07T22:16:45.827877719Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:16:45.82788021Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:16:45.82788264Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationRequest
2025-11-07T22:16:45.82788519Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationRequest
2025-11-07T22:16:45.82788786Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponse
2025-11-07T22:16:45.82789026Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponse
2025-11-07T22:16:45.82789262Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:16:45.827895081Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:16:45.827897521Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:16:45.827900071Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:16:45.827909602Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationRequest
2025-11-07T22:16:45.827912282Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationRequest
2025-11-07T22:16:45.827914712Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponse
2025-11-07T22:16:45.827917393Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponse
2025-11-07T22:16:45.827919793Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponseError
2025-11-07T22:16:45.827922123Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponseError
2025-11-07T22:16:45.827924383Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:16:45.827926734Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:16:45.827929264Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationRequest
2025-11-07T22:16:45.827931704Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationRequest
2025-11-07T22:16:45.827934364Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponse
2025-11-07T22:16:45.827936894Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponse
2025-11-07T22:16:45.827939444Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:16:45.827942095Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:16:45.827944605Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:16:45.827947275Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:17:04.69433265Z [Requesting] Received request for path: /Recipe/updateRecipeDetails
2025-11-07T22:17:04.694360172Z 🟢 Requesting.request ACTION CALLED with inputs: {
2025-11-07T22:17:04.694362682Z   "session": "019a6048-1789-7e3c-be19-11db018ae8d9",
2025-11-07T22:17:04.694364853Z   "recipe": "019a6064-4cf0-70ea-bb39-efcf7013a1bf",
2025-11-07T22:17:04.694367083Z   "newTitle": "non-alcoholic lychee martini",
2025-11-07T22:17:04.694368973Z   "newDescription": "",
2025-11-07T22:17:04.694370663Z   "newIngredients": [
2025-11-07T22:17:04.694372443Z     {
2025-11-07T22:17:04.694374753Z       "name": "Lychee Juice",
2025-11-07T22:17:04.694376574Z       "quantity": "3",
2025-11-07T22:17:04.694378283Z       "unit": "oz",
2025-11-07T22:17:04.694381024Z       "notes": "From canned lychees (blended with a little of their syrup) or freshly pureed lychees. This replaces the alcoholic base."
2025-11-07T22:17:04.694382834Z     },
2025-11-07T22:17:04.694384584Z     {
2025-11-07T22:17:04.694386274Z       "name": "Simple Syrup",
2025-11-07T22:17:04.694388024Z       "quantity": "0.5",
2025-11-07T22:17:04.694389744Z       "unit": "oz",
2025-11-07T22:17:04.694392155Z       "notes": "Optional, adjust to taste based on the sweetness of your lychee juice."
2025-11-07T22:17:04.694393855Z     },
2025-11-07T22:17:04.694395525Z     {
2025-11-07T22:17:04.694397665Z       "name": "Fresh Lemon Juice",
2025-11-07T22:17:04.694400656Z       "quantity": "0.25",
2025-11-07T22:17:04.694403616Z       "unit": "oz",
2025-11-07T22:17:04.694406416Z       "notes": "To add brightness and balance."
2025-11-07T22:17:04.694411946Z     },
2025-11-07T22:17:04.694414797Z     {
2025-11-07T22:17:04.694418317Z       "name": "Sparkling Water",
2025-11-07T22:17:04.694421757Z       "quantity": "1",
2025-11-07T22:17:04.694435188Z       "unit": "oz",
2025-11-07T22:17:04.694438559Z       "notes": "Optional, for a light effervescence and body."
2025-11-07T22:17:04.694441119Z     },
2025-11-07T22:17:04.694443749Z     {
2025-11-07T22:17:04.694446749Z       "name": "Fresh Lychee",
2025-11-07T22:17:04.69444983Z       "quantity": "1-2",
2025-11-07T22:17:04.69445245Z       "unit": "piece",
2025-11-07T22:17:04.69445417Z       "notes": "For garnish, or a lychee from a can."
2025-11-07T22:17:04.6944559Z     },
2025-11-07T22:17:04.69445782Z     {
2025-11-07T22:17:04.69445949Z       "name": "Ice",
2025-11-07T22:17:04.694463111Z       "quantity": "as needed",
2025-11-07T22:17:04.694464901Z       "unit": "",
2025-11-07T22:17:04.694466571Z       "notes": ""
2025-11-07T22:17:04.694468271Z     }
2025-11-07T22:17:04.694470122Z   ],
2025-11-07T22:17:04.694471891Z   "newSteps": [
2025-11-07T22:17:04.694473602Z     {
2025-11-07T22:17:04.694475992Z       "description": "Chill a martini glass by placing it in the freezer or filling it with ice water and letting it sit for a few minutes.",
2025-11-07T22:17:04.694477752Z       "notes": ""
2025-11-07T22:17:04.694479572Z     },
2025-11-07T22:17:04.694481272Z     {
2025-11-07T22:17:04.694482963Z       "description": "Fill a cocktail shaker with ice.",
2025-11-07T22:17:04.694484823Z       "notes": ""
2025-11-07T22:17:04.694487143Z     },
2025-11-07T22:17:04.694488893Z     {
2025-11-07T22:17:04.694491283Z       "description": "Add the lychee juice, simple syrup (if using), and fresh lemon juice to the shaker.",
2025-11-07T22:17:04.694492993Z       "notes": ""
2025-11-07T22:17:04.694494804Z     },
2025-11-07T22:17:04.694496784Z     {
2025-11-07T22:17:04.694498524Z       "description": "Shake vigorously for about 15-20 seconds until the mixture is thoroughly chilled.",
2025-11-07T22:17:04.694502034Z       "notes": ""
2025-11-07T22:17:04.694503784Z     },
2025-11-07T22:17:04.694505474Z     {
2025-11-07T22:17:04.694507205Z       "description": "Discard the ice from the chilled martini glass (if used). Strain the contents of the shaker into the cold martini glass.",
2025-11-07T22:17:04.694509025Z       "notes": ""
2025-11-07T22:17:04.694510715Z     },
2025-11-07T22:17:04.694512375Z     {
2025-11-07T22:17:04.694514765Z       "description": "If desired, gently top with 1 oz of sparkling water.",
2025-11-07T22:17:04.694516566Z       "notes": "This step is optional if you prefer a 'still' mocktail."
2025-11-07T22:17:04.694518255Z     },
2025-11-07T22:17:04.694519946Z     {
2025-11-07T22:17:04.694522286Z       "description": "Garnish with a fresh lychee or a lychee from a can, perhaps speared on a cocktail pick. (You can also add a small lychee slice to the rim.)",
2025-11-07T22:17:04.694524016Z       "notes": ""
2025-11-07T22:17:04.694525706Z     }
2025-11-07T22:17:04.694527386Z   ],
2025-11-07T22:17:04.694529667Z   "path": "/Recipe/updateRecipeDetails"
2025-11-07T22:17:04.694531377Z }
2025-11-07T22:17:04.694560149Z 🟢 Generated request ID: 019a6065-05b6-7731-9da3-7de82ad597ab
2025-11-07T22:17:04.69456777Z 🟢 Inserting request doc into database...
2025-11-07T22:17:04.775727299Z 🟢 Request doc inserted successfully
2025-11-07T22:17:04.77574386Z 🟢 Returning request ID to sync engine: 019a6065-05b6-7731-9da3-7de82ad597ab
2025-11-07T22:17:04.775747831Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:17:04.77690325Z 
2025-11-07T22:17:04.776929192Z Requesting.request {
2025-11-07T22:17:04.776933102Z   session: '019a6048-1789-7e3c-be19-11db018ae8d9',
2025-11-07T22:17:04.776935573Z   recipe: '019a6064-4cf0-70ea-bb39-efcf7013a1bf',
2025-11-07T22:17:04.776948503Z   newTitle: 'non-alcoholic lychee martini',
2025-11-07T22:17:04.776951314Z   newDescription: '',
2025-11-07T22:17:04.776953734Z   newIngredients: [
2025-11-07T22:17:04.776956024Z     {
2025-11-07T22:17:04.776959095Z       name: 'Lychee Juice',
2025-11-07T22:17:04.776961535Z       quantity: '3',
2025-11-07T22:17:04.776963715Z       unit: 'oz',
2025-11-07T22:17:04.776966945Z       notes: 'From canned lychees (blended with a little of their syrup) or freshly pureed lychees. This replaces the alcoholic base.'
2025-11-07T22:17:04.776969865Z     },
2025-11-07T22:17:04.776972245Z     {
2025-11-07T22:17:04.776974386Z       name: 'Simple Syrup',
2025-11-07T22:17:04.776976446Z       quantity: '0.5',
2025-11-07T22:17:04.776978656Z       unit: 'oz',
2025-11-07T22:17:04.776981716Z       notes: 'Optional, adjust to taste based on the sweetness of your lychee juice.'
2025-11-07T22:17:04.776983766Z     },
2025-11-07T22:17:04.776985767Z     {
2025-11-07T22:17:04.776987847Z       name: 'Fresh Lemon Juice',
2025-11-07T22:17:04.776989827Z       quantity: '0.25',
2025-11-07T22:17:04.776992357Z       unit: 'oz',
2025-11-07T22:17:04.776994458Z       notes: 'To add brightness and balance.'
2025-11-07T22:17:04.776996558Z     },
2025-11-07T22:17:04.776998498Z     {
2025-11-07T22:17:04.777000648Z       name: 'Sparkling Water',
2025-11-07T22:17:04.777002728Z       quantity: '1',
2025-11-07T22:17:04.777004828Z       unit: 'oz',
2025-11-07T22:17:04.777007159Z       notes: 'Optional, for a light effervescence and body.'
2025-11-07T22:17:04.777009139Z     },
2025-11-07T22:17:04.777011209Z     {
2025-11-07T22:17:04.777013569Z       name: 'Fresh Lychee',
2025-11-07T22:17:04.777015979Z       quantity: '1-2',
2025-11-07T22:17:04.777018229Z       unit: 'piece',
2025-11-07T22:17:04.77702079Z       notes: 'For garnish, or a lychee from a can.'
2025-11-07T22:17:04.77702338Z     },
2025-11-07T22:17:04.77702629Z     { name: 'Ice', quantity: 'as needed', unit: '', notes: '' }
2025-11-07T22:17:04.77702865Z   ],
2025-11-07T22:17:04.777031031Z   newSteps: [
2025-11-07T22:17:04.777033941Z     {
2025-11-07T22:17:04.777036361Z       description: 'Chill a martini glass by placing it in the freezer or filling it with ice water and letting it sit for a few minutes.',
2025-11-07T22:17:04.777038861Z       notes: ''
2025-11-07T22:17:04.777041031Z     },
2025-11-07T22:17:04.777044062Z     { description: 'Fill a cocktail shaker with ice.', notes: '' },
2025-11-07T22:17:04.777046732Z     {
2025-11-07T22:17:04.777051332Z       description: 'Add the lychee juice, simple syrup (if using), and fresh lemon juice to the shaker.',
2025-11-07T22:17:04.777053603Z       notes: ''
2025-11-07T22:17:04.777055763Z     },
2025-11-07T22:17:04.777057933Z     {
2025-11-07T22:17:04.777060203Z       description: 'Shake vigorously for about 15-20 seconds until the mixture is thoroughly chilled.',
2025-11-07T22:17:04.777062423Z       notes: ''
2025-11-07T22:17:04.777064584Z     },
2025-11-07T22:17:04.777066714Z     {
2025-11-07T22:17:04.777068904Z       description: 'Discard the ice from the chilled martini glass (if used). Strain the contents of the shaker into the cold martini glass.',
2025-11-07T22:17:04.777071124Z       notes: ''
2025-11-07T22:17:04.777073264Z     },
2025-11-07T22:17:04.777075445Z     {
2025-11-07T22:17:04.777077735Z       description: 'If desired, gently top with 1 oz of sparkling water.',
2025-11-07T22:17:04.777079965Z       notes: "This step is optional if you prefer a 'still' mocktail."
2025-11-07T22:17:04.777082405Z     },
2025-11-07T22:17:04.777088735Z     {
2025-11-07T22:17:04.777091726Z       description: 'Garnish with a fresh lychee or a lychee from a can, perhaps speared on a cocktail pick. (You can also add a small lychee slice to the rim.)',
2025-11-07T22:17:04.777093986Z       notes: ''
2025-11-07T22:17:04.777096116Z     }
2025-11-07T22:17:04.777098367Z   ],
2025-11-07T22:17:04.777100647Z   path: '/Recipe/updateRecipeDetails'
2025-11-07T22:17:04.777102877Z } => { request: '019a6065-05b6-7731-9da3-7de82ad597ab' }
2025-11-07T22:17:04.777105127Z 
2025-11-07T22:17:04.777107557Z 🔵 SYNC ENGINE: Found 66 syncs for this action
2025-11-07T22:17:04.777110057Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:17:04.777112588Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:17:04.777115268Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:17:04.777117738Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:17:04.777120358Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftRequest
2025-11-07T22:17:04.777122729Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftRequest
2025-11-07T22:17:04.777125399Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftResponse
2025-11-07T22:17:04.777127989Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftResponse
2025-11-07T22:17:04.777130699Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:17:04.777133209Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:17:04.77713557Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeRequest
2025-11-07T22:17:04.77713793Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeRequest
2025-11-07T22:17:04.77714024Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeResponse
2025-11-07T22:17:04.77714268Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeResponse
2025-11-07T22:17:04.77714508Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:17:04.777147551Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:17:04.777150181Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:17:04.777205506Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:17:04.777210696Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:17:04.777213036Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:17:04.777215526Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeRequest
2025-11-07T22:17:04.777217937Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeRequest
2025-11-07T22:17:04.777220207Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeResponse
2025-11-07T22:17:04.777222547Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeResponse
2025-11-07T22:17:04.777225477Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:17:04.777227867Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:17:04.777230578Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:17:04.777232838Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:17:04.777235258Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:17:04.777243379Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:17:04.777648214Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:17:04.777657964Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:17:04.777660895Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:17:04.777707689Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:17:04.777743032Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:17:04.777823149Z 🔵 SYNC ENGINE: where() returned 0 frames
2025-11-07T22:17:04.778414649Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:17:04.77842007Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:17:04.77842252Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:17:04.778427961Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:17:04.778430471Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:17:04.778432731Z 🔵 SYNC ENGINE: Calling where() for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:17:04.843820838Z 🔧 _getUser called with session: 019a6048-1789-7e3c-be19-11db018ae8d9
2025-11-07T22:17:04.909400831Z ✅ _getUser - Found user: 019a6041-1e82-76f1-be1b-19ebde0a35e0
2025-11-07T22:17:04.975130797Z 🔵 SYNC ENGINE: where() returned 1 frames
2025-11-07T22:17:04.975150199Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:17:05.108666107Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:17:05.109193032Z 
2025-11-07T22:17:05.109203453Z Recipe.updateRecipeDetails {
2025-11-07T22:17:05.109207764Z   owner: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:17:05.109210894Z   recipe: '019a6064-4cf0-70ea-bb39-efcf7013a1bf',
2025-11-07T22:17:05.109212754Z   newTitle: 'non-alcoholic lychee martini',
2025-11-07T22:17:05.109215014Z   newDescription: '',
2025-11-07T22:17:05.109216745Z   newIngredients: [
2025-11-07T22:17:05.109218525Z     {
2025-11-07T22:17:05.109220305Z       name: 'Lychee Juice',
2025-11-07T22:17:05.109221995Z       quantity: '3',
2025-11-07T22:17:05.109223665Z       unit: 'oz',
2025-11-07T22:17:05.109227466Z       notes: 'From canned lychees (blended with a little of their syrup) or freshly pureed lychees. This replaces the alcoholic base.'
2025-11-07T22:17:05.109231466Z     },
2025-11-07T22:17:05.109234126Z     {
2025-11-07T22:17:05.109236996Z       name: 'Simple Syrup',
2025-11-07T22:17:05.109239956Z       quantity: '0.5',
2025-11-07T22:17:05.109242527Z       unit: 'oz',
2025-11-07T22:17:05.109245727Z       notes: 'Optional, adjust to taste based on the sweetness of your lychee juice.'
2025-11-07T22:17:05.109263669Z     },
2025-11-07T22:17:05.109266939Z     {
2025-11-07T22:17:05.109269689Z       name: 'Fresh Lemon Juice',
2025-11-07T22:17:05.109272199Z       quantity: '0.25',
2025-11-07T22:17:05.109274679Z       unit: 'oz',
2025-11-07T22:17:05.10927711Z       notes: 'To add brightness and balance.'
2025-11-07T22:17:05.1092796Z     },
2025-11-07T22:17:05.10928201Z     {
2025-11-07T22:17:05.10928504Z       name: 'Sparkling Water',
2025-11-07T22:17:05.109287751Z       quantity: '1',
2025-11-07T22:17:05.109290611Z       unit: 'oz',
2025-11-07T22:17:05.109293751Z       notes: 'Optional, for a light effervescence and body.'
2025-11-07T22:17:05.109305392Z     },
2025-11-07T22:17:05.109308222Z     {
2025-11-07T22:17:05.109310962Z       name: 'Fresh Lychee',
2025-11-07T22:17:05.109313533Z       quantity: '1-2',
2025-11-07T22:17:05.109316123Z       unit: 'piece',
2025-11-07T22:17:05.109318963Z       notes: 'For garnish, or a lychee from a can.'
2025-11-07T22:17:05.109321923Z     },
2025-11-07T22:17:05.109325164Z     { name: 'Ice', quantity: 'as needed', unit: '', notes: '' }
2025-11-07T22:17:05.109327924Z   ],
2025-11-07T22:17:05.109330704Z   newSteps: [
2025-11-07T22:17:05.109333375Z     {
2025-11-07T22:17:05.109336035Z       description: 'Chill a martini glass by placing it in the freezer or filling it with ice water and letting it sit for a few minutes.',
2025-11-07T22:17:05.109338945Z       notes: ''
2025-11-07T22:17:05.109341655Z     },
2025-11-07T22:17:05.109345076Z     { description: 'Fill a cocktail shaker with ice.', notes: '' },
2025-11-07T22:17:05.109346996Z     {
2025-11-07T22:17:05.109349276Z       description: 'Add the lychee juice, simple syrup (if using), and fresh lemon juice to the shaker.',
2025-11-07T22:17:05.109351006Z       notes: ''
2025-11-07T22:17:05.109352676Z     },
2025-11-07T22:17:05.109354486Z     {
2025-11-07T22:17:05.109356237Z       description: 'Shake vigorously for about 15-20 seconds until the mixture is thoroughly chilled.',
2025-11-07T22:17:05.109357926Z       notes: ''
2025-11-07T22:17:05.109359617Z     },
2025-11-07T22:17:05.109361267Z     {
2025-11-07T22:17:05.109363017Z       description: 'Discard the ice from the chilled martini glass (if used). Strain the contents of the shaker into the cold martini glass.',
2025-11-07T22:17:05.109364697Z       notes: ''
2025-11-07T22:17:05.109366367Z     },
2025-11-07T22:17:05.109368027Z     {
2025-11-07T22:17:05.109369788Z       description: 'If desired, gently top with 1 oz of sparkling water.',
2025-11-07T22:17:05.109371548Z       notes: "This step is optional if you prefer a 'still' mocktail."
2025-11-07T22:17:05.109373248Z     },
2025-11-07T22:17:05.109374918Z     {
2025-11-07T22:17:05.109377308Z       description: 'Garnish with a fresh lychee or a lychee from a can, perhaps speared on a cocktail pick. (You can also add a small lychee slice to the rim.)',
2025-11-07T22:17:05.109378998Z       notes: ''
2025-11-07T22:17:05.109380668Z     }
2025-11-07T22:17:05.109382329Z   ]
2025-11-07T22:17:05.109384039Z } => {}
2025-11-07T22:17:05.109385669Z 
2025-11-07T22:17:05.109387509Z 🔵 SYNC ENGINE: Found 2 syncs for this action
2025-11-07T22:17:05.109389289Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:17:05.109401Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:17:05.10940301Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:17:05.109407411Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:17:05.109409601Z 🔵 SYNC ENGINE: Calling addThen for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:17:05.17726614Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:17:05.177328925Z 
2025-11-07T22:17:05.177339526Z Requesting.respond { request: '019a6065-05b6-7731-9da3-7de82ad597ab' } => { request: '019a6065-05b6-7731-9da3-7de82ad597ab' }
2025-11-07T22:17:05.177342036Z 
2025-11-07T22:17:05.177344946Z 🔵 SYNC ENGINE: Found 0 syncs for this action
2025-11-07T22:17:05.177347596Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:17:05.177423483Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:17:05.177443275Z 🔵 SYNC ENGINE: Checking sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:17:05.177447415Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:17:05.177457816Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginRequest
2025-11-07T22:17:05.177482648Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginRequest
2025-11-07T22:17:05.177490179Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseError
2025-11-07T22:17:05.17750748Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseError
2025-11-07T22:17:05.17751053Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseWithSession
2025-11-07T22:17:05.177541823Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseWithSession
2025-11-07T22:17:05.177570216Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:17:05.177574556Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:17:05.177578206Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:17:05.177587067Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:17:05.177590067Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:17:05.177641672Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:17:05.177646342Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:17:05.177655673Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:17:05.177658553Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:17:05.177689006Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:17:05.177692466Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:17:05.177697297Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:17:05.177699867Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:17:05.177719479Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:17:05.177722379Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:17:05.177755062Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:17:05.177758642Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:17:05.177764242Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:17:05.177767072Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:17:05.177813347Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:17:05.177818127Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Error
2025-11-07T22:17:05.177820917Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Error
2025-11-07T22:17:05.177823677Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Success
2025-11-07T22:17:05.177830208Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Success
2025-11-07T22:17:05.177833178Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:17:05.177847209Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:17:05.17785235Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:17:05.177888243Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:17:05.177892233Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:17:05.178290577Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:17:05.178296608Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:17:05.1783162Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:17:05.17832289Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:17:05.178329391Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:17:05.178332061Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:17:05.178350222Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:17:05.178388796Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:17:05.178392436Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:17:05.178395316Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:17:05.178397717Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:17:05.178403637Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:17:05.178446251Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:17:05.178450001Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:17:05.178456112Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:17:05.178459122Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:17:05.178489405Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:17:05.178493095Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:17:05.178515607Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:17:05.178522077Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:17:05.178574162Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:17:05.178582242Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:17:05.178624256Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:17:05.178627396Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateRequest
2025-11-07T22:17:05.17866786Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateRequest
2025-11-07T22:17:05.17867206Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponse
2025-11-07T22:17:05.178690422Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponse
2025-11-07T22:17:05.178695152Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponseError
2025-11-07T22:17:05.178726595Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponseError
2025-11-07T22:17:05.178739986Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:17:05.179052143Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:17:05.179057643Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationRequest
2025-11-07T22:17:05.179060503Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationRequest
2025-11-07T22:17:05.179063244Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponse
2025-11-07T22:17:05.179065714Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponse
2025-11-07T22:17:05.179068194Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:17:05.179070824Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:17:05.179073475Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:17:05.179076565Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:17:05.179078955Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationRequest
2025-11-07T22:17:05.179081405Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationRequest
2025-11-07T22:17:05.179083965Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponse
2025-11-07T22:17:05.179086466Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponse
2025-11-07T22:17:05.179088866Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponseError
2025-11-07T22:17:05.179093036Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponseError
2025-11-07T22:17:05.179095657Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:17:05.179098197Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:17:05.179111128Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationRequest
2025-11-07T22:17:05.179114068Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationRequest
2025-11-07T22:17:05.179116608Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponse
2025-11-07T22:17:05.179119159Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponse
2025-11-07T22:17:05.179121659Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:17:05.179126059Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:17:05.179129029Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:17:05.179131669Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:17:40.785791854Z [Requesting] Received request for path: /Annotation/annotate
2025-11-07T22:17:40.785825307Z 🟢 Requesting.request ACTION CALLED with inputs: {
2025-11-07T22:17:40.785830138Z   "session": "019a6048-1789-7e3c-be19-11db018ae8d9",
2025-11-07T22:17:40.785834188Z   "recipe": "019a6047-6091-77ff-8795-80c360bb5871",
2025-11-07T22:17:40.785838888Z   "targetKind": "Step",
2025-11-07T22:17:40.785842809Z   "index": 2,
2025-11-07T22:17:40.785847219Z   "text": "how can i make it non-alcoholic",
2025-11-07T22:17:40.78585192Z   "path": "/Annotation/annotate"
2025-11-07T22:17:40.78585563Z }
2025-11-07T22:17:40.78586019Z 🟢 Generated request ID: 019a6065-92b0-7d82-b5c1-4f4c5b23c274
2025-11-07T22:17:40.78586409Z 🟢 Inserting request doc into database...
2025-11-07T22:17:40.855607741Z 🟢 Request doc inserted successfully
2025-11-07T22:17:40.855638873Z 🟢 Returning request ID to sync engine: 019a6065-92b0-7d82-b5c1-4f4c5b23c274
2025-11-07T22:17:40.855642784Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:17:40.855760124Z 
2025-11-07T22:17:40.855766404Z Requesting.request {
2025-11-07T22:17:40.855769515Z   session: '019a6048-1789-7e3c-be19-11db018ae8d9',
2025-11-07T22:17:40.855771905Z   recipe: '019a6047-6091-77ff-8795-80c360bb5871',
2025-11-07T22:17:40.855774055Z   targetKind: 'Step',
2025-11-07T22:17:40.855776265Z   index: 2,
2025-11-07T22:17:40.855779516Z   text: 'how can i make it non-alcoholic',
2025-11-07T22:17:40.855792657Z   path: '/Annotation/annotate'
2025-11-07T22:17:40.855795357Z } => { request: '019a6065-92b0-7d82-b5c1-4f4c5b23c274' }
2025-11-07T22:17:40.855797407Z 
2025-11-07T22:17:40.855799657Z 🔵 SYNC ENGINE: Found 66 syncs for this action
2025-11-07T22:17:40.855802578Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:17:40.855870903Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftCustomErrorResponse
2025-11-07T22:17:40.855880424Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:17:40.855890795Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftErrorResponse
2025-11-07T22:17:40.855894866Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftRequest
2025-11-07T22:17:40.85595446Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftRequest
2025-11-07T22:17:40.855959991Z 🔵 SYNC ENGINE: Checking sync: recipe.ApplyDraftResponse
2025-11-07T22:17:40.855971272Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.ApplyDraftResponse
2025-11-07T22:17:40.855986883Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:17:40.856342864Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeErrorResponse
2025-11-07T22:17:40.856346874Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeRequest
2025-11-07T22:17:40.856352755Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeRequest
2025-11-07T22:17:40.856355025Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeResponse
2025-11-07T22:17:40.856357185Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeResponse
2025-11-07T22:17:40.856359495Z 🔵 SYNC ENGINE: Checking sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:17:40.856361686Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.CreateRecipeSessionErrorResponse
2025-11-07T22:17:40.856363746Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:17:40.856365906Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeCustomErrorResponse
2025-11-07T22:17:40.856368266Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:17:40.856370336Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeErrorResponse
2025-11-07T22:17:40.856372486Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeRequest
2025-11-07T22:17:40.856374556Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeRequest
2025-11-07T22:17:40.856376667Z 🔵 SYNC ENGINE: Checking sync: recipe.DeleteRecipeResponse
2025-11-07T22:17:40.856378807Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DeleteRecipeResponse
2025-11-07T22:17:40.856380897Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:17:40.856383017Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIErrorResponse
2025-11-07T22:17:40.856401029Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:17:40.856403399Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIRequest
2025-11-07T22:17:40.856405459Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:17:40.856407629Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAIResponse
2025-11-07T22:17:40.856409619Z 🔵 SYNC ENGINE: Checking sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:17:40.85641255Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.DraftRecipeWithAISessionErrorResponse
2025-11-07T22:17:40.85641473Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:17:40.85641703Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsCustomErrorResponse
2025-11-07T22:17:40.85641919Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:17:40.85642128Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsErrorResponse
2025-11-07T22:17:40.856423401Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:17:40.856425541Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsRequest
2025-11-07T22:17:40.856427601Z 🔵 SYNC ENGINE: Checking sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:17:40.856429701Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: recipe.UpdateRecipeDetailsResponse
2025-11-07T22:17:40.856431761Z 🔵 SYNC ENGINE: Checking sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:17:40.856433982Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.CreateSessionAfterLogin
2025-11-07T22:17:40.856436022Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginRequest
2025-11-07T22:17:40.856438102Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginRequest
2025-11-07T22:17:40.856440542Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseError
2025-11-07T22:17:40.856442642Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseError
2025-11-07T22:17:40.856444702Z 🔵 SYNC ENGINE: Checking sync: user_auth.LoginResponseWithSession
2025-11-07T22:17:40.856446753Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: user_auth.LoginResponseWithSession
2025-11-07T22:17:40.856448833Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:17:40.856450943Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_PreconditionError
2025-11-07T22:17:40.856453013Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:17:40.856455134Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookRequest_SuccessPath
2025-11-07T22:17:40.856457254Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:17:40.856841337Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Error
2025-11-07T22:17:40.856850677Z 🔵 SYNC ENGINE: Checking sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:17:40.856856418Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.CreateNotebookResponse_Success
2025-11-07T22:17:40.856858858Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:17:40.856913453Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_PreconditionError
2025-11-07T22:17:40.856920433Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:17:40.856923084Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookRequest_SuccessPath
2025-11-07T22:17:40.856972038Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:17:40.856988809Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Error
2025-11-07T22:17:40.85699158Z 🔵 SYNC ENGINE: Checking sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:17:40.85699621Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.DeleteNotebookResponse_Success
2025-11-07T22:17:40.85699852Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:17:40.85700087Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_PreconditionError
2025-11-07T22:17:40.857002921Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:17:40.857011171Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberRequest_SuccessPath
2025-11-07T22:17:40.857013621Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Error
2025-11-07T22:17:40.857056855Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Error
2025-11-07T22:17:40.857061715Z 🔵 SYNC ENGINE: Checking sync: notebook.InviteMemberResponse_Success
2025-11-07T22:17:40.857089028Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.InviteMemberResponse_Success
2025-11-07T22:17:40.857091838Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:17:40.857094158Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_PreconditionError
2025-11-07T22:17:40.857096329Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:17:40.857133502Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberRequest_SuccessPath
2025-11-07T22:17:40.857136502Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:17:40.857138742Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Error
2025-11-07T22:17:40.857143593Z 🔵 SYNC ENGINE: Checking sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:17:40.857214228Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.RemoveMemberResponse_Success
2025-11-07T22:17:40.857219189Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:17:40.857221999Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_PreconditionError
2025-11-07T22:17:40.85722414Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:17:40.8572293Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeRequest_SuccessPath
2025-11-07T22:17:40.85723162Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:17:40.857263833Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Error
2025-11-07T22:17:40.857266793Z 🔵 SYNC ENGINE: Checking sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:17:40.857310177Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.ShareRecipeResponse_Success
2025-11-07T22:17:40.857313077Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:17:40.857328428Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_PreconditionError
2025-11-07T22:17:40.857330889Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:17:40.857360611Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeRequest_SuccessPath
2025-11-07T22:17:40.857405565Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:17:40.85745866Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Error
2025-11-07T22:17:40.85746383Z 🔵 SYNC ENGINE: Checking sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:17:40.85746617Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: notebook.UnshareRecipeResponse_Success
2025-11-07T22:17:40.85746836Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:17:40.857503143Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionDraftFeatureNotAvailable
2025-11-07T22:17:40.857506144Z 🔵 SYNC ENGINE: Checking sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:17:40.857508594Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: version_stub.VersionFeatureNotAvailable
2025-11-07T22:17:40.857510934Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateRequest
2025-11-07T22:17:40.85758648Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: annotation.AnnotateRequest
2025-11-07T22:17:40.857637325Z 🔵 SYNC ENGINE: Calling where() for sync: annotation.AnnotateRequest
2025-11-07T22:17:40.857856274Z 🔧 _getUser called with session: 019a6048-1789-7e3c-be19-11db018ae8d9
2025-11-07T22:17:40.925267694Z ✅ _getUser - Found user: 019a6041-1e82-76f1-be1b-19ebde0a35e0
2025-11-07T22:17:40.925291636Z 🔵 SYNC ENGINE: where() returned 1 frames
2025-11-07T22:17:40.925295506Z 🔵 SYNC ENGINE: Calling addThen for sync: annotation.AnnotateRequest
2025-11-07T22:17:40.994866262Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:17:40.994952789Z 
2025-11-07T22:17:40.994979081Z Annotation.annotate {
2025-11-07T22:17:40.994983582Z   author: '019a6041-1e82-76f1-be1b-19ebde0a35e0',
2025-11-07T22:17:40.994986222Z   recipe: '019a6047-6091-77ff-8795-80c360bb5871',
2025-11-07T22:17:40.994989012Z   targetKind: 'Step',
2025-11-07T22:17:40.994991813Z   index: 2,
2025-11-07T22:17:40.994995273Z   text: 'how can i make it non-alcoholic'
2025-11-07T22:17:40.994997813Z } => { annotation: '019a6065-933c-7f51-9f77-1c60f5cdcc99' }
2025-11-07T22:17:40.995000013Z 
2025-11-07T22:17:40.995002443Z 🔵 SYNC ENGINE: Found 2 syncs for this action
2025-11-07T22:17:40.995005464Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponse
2025-11-07T22:17:40.99508121Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: annotation.AnnotateResponse
2025-11-07T22:17:40.995112973Z 🔵 SYNC ENGINE: Calling addThen for sync: annotation.AnnotateResponse
2025-11-07T22:17:41.064993005Z 🔵 SYNC ENGINE: synchronize() called for action
2025-11-07T22:17:41.065031478Z 
2025-11-07T22:17:41.065037119Z Requesting.respond {
2025-11-07T22:17:41.065040069Z   request: '019a6065-92b0-7d82-b5c1-4f4c5b23c274',
2025-11-07T22:17:41.065042449Z   annotation: '019a6065-933c-7f51-9f77-1c60f5cdcc99'
2025-11-07T22:17:41.065045079Z } => { request: '019a6065-92b0-7d82-b5c1-4f4c5b23c274' }
2025-11-07T22:17:41.065047629Z 
2025-11-07T22:17:41.06505093Z 🔵 SYNC ENGINE: Found 0 syncs for this action
2025-11-07T22:17:41.06505914Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponseError
2025-11-07T22:17:41.065220654Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponseError
2025-11-07T22:17:41.065231825Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponse
2025-11-07T22:17:41.065235356Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponse
2025-11-07T22:17:41.065239046Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateResponseError
2025-11-07T22:17:41.065247357Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.AnnotateResponseError
2025-11-07T22:17:41.065273759Z 🔵 SYNC ENGINE: Checking sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:17:41.065318512Z 🔵 SYNC ENGINE: matchWhen returned 1 frames for sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:17:41.065323713Z 🔵 SYNC ENGINE: Calling where() for sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:17:41.065435222Z 🔵 SYNC ENGINE: where() returned 0 frames
2025-11-07T22:17:41.065443203Z 🔵 SYNC ENGINE: Calling addThen for sync: annotation.AnnotateSessionErrorResponse
2025-11-07T22:17:41.065446963Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationRequest
2025-11-07T22:17:41.06551686Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationRequest
2025-11-07T22:17:41.06552269Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponse
2025-11-07T22:17:41.065530501Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponse
2025-11-07T22:17:41.065537341Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:17:41.065581735Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationResponseError
2025-11-07T22:17:41.065596807Z 🔵 SYNC ENGINE: Checking sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:17:41.065610037Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.DeleteAnnotationSessionErrorResponse
2025-11-07T22:17:41.065613398Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationRequest
2025-11-07T22:17:41.065620649Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationRequest
2025-11-07T22:17:41.065624109Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponse
2025-11-07T22:17:41.065740349Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponse
2025-11-07T22:17:41.065747629Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationResponseError
2025-11-07T22:17:41.06575103Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationResponseError
2025-11-07T22:17:41.06575399Z 🔵 SYNC ENGINE: Checking sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:17:41.06576197Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.EditAnnotationSessionErrorResponse
2025-11-07T22:17:41.065765511Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationRequest
2025-11-07T22:17:41.065768791Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationRequest
2025-11-07T22:17:41.065843718Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponse
2025-11-07T22:17:41.065850848Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponse
2025-11-07T22:17:41.065853749Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:17:41.06621536Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationResponseError
2025-11-07T22:17:41.06622165Z 🔵 SYNC ENGINE: Checking sync: annotation.ResolveAnnotationSessionErrorResponse
2025-11-07T22:17:41.06622419Z 🔵 SYNC ENGINE: matchWhen returned 0 frames for sync: annotation.ResolveAnnotationSessionErrorResponse