const recipes = [
    {
        id: 1,
        name: "Fettuccine Alfredo",
        category: "pasta",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a",
        description: "Creamy Italian pasta dish made with fresh fettuccine and Parmesan cheese sauce",
        ingredients: [
            "1 pound fresh fettuccine",
            "1 cup heavy cream",
            "1/2 cup butter",
            "1 cup freshly grated Parmesan cheese",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        instructions: [
            "Cook fettuccine according to package instructions",
            "In a large pan, heat cream and butter until butter melts",
            "Add Parmesan cheese and stir until smooth",
            "Toss with cooked pasta",
            "Season with salt and pepper",
            "Garnish with parsley"
        ],
        prepTime: "10 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 2,
        name: "Pan-Seared Steak",
        category: "beef",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
        description: "Perfectly seared steak with a caramelized crust and juicy center",
        ingredients: [
            "2 ribeye steaks (1-inch thick)",
            "2 tablespoons olive oil",
            "4 tablespoons butter",
            "4 garlic cloves",
            "Fresh rosemary and thyme",
            "Salt and black pepper"
        ],
        instructions: [
            "Bring steaks to room temperature and pat dry",
            "Season generously with salt and pepper",
            "Heat oil in cast iron skillet until smoking",
            "Sear steaks 4-5 minutes per side",
            "Add butter, garlic, and herbs, baste for 2-3 minutes",
            "Rest for 5-10 minutes before serving"
        ],
        prepTime: "15 minutes",
        cookTime: "12 minutes",
        servings: 2
    },
    {
        id: 3,
        name: "Grilled Salmon",
        category: "seafood",
        image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927",
        description: "Perfectly grilled salmon with a crispy skin and tender, flaky meat",
        ingredients: [
            "4 salmon fillets",
            "2 tablespoons olive oil",
            "1 lemon",
            "2 cloves garlic, minced",
            "Fresh dill",
            "Salt and pepper"
        ],
        instructions: [
            "Preheat grill to medium-high heat",
            "Brush salmon with olive oil and season",
            "Place salmon skin-side up on grill",
            "Cook for 4-5 minutes per side",
            "Squeeze fresh lemon juice over top",
            "Garnish with fresh dill"
        ],
        prepTime: "10 minutes",
        cookTime: "10 minutes",
        servings: 4
    },
    {
        id: 4,
        name: "Garlic Chicken",
        category: "chicken",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
        description: "Tender chicken breasts in a rich garlic butter sauce",
        ingredients: [
            "4 chicken breasts",
            "8 cloves garlic, minced",
            "1/4 cup butter",
            "1/4 cup olive oil",
            "Fresh parsley",
            "Salt and pepper"
        ],
        instructions: [
            "Season chicken with salt and pepper",
            "Heat oil in large skillet over medium heat",
            "Cook chicken 5-7 minutes per side",
            "Remove chicken and add garlic to pan",
            "Add butter and create sauce",
            "Return chicken to pan and coat with sauce"
        ],
        prepTime: "10 minutes",
        cookTime: "20 minutes",
        servings: 4
    },
    {
        id: 5,
        name: "Margherita Pizza",
        category: "vegetarian",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil",
        ingredients: [
            "Pizza dough",
            "San Marzano tomatoes",
            "Fresh mozzarella",
            "Fresh basil leaves",
            "Extra virgin olive oil",
            "Salt"
        ],
        instructions: [
            "Preheat oven to 500°F with pizza stone",
            "Stretch dough into 12-inch circle",
            "Top with crushed tomatoes",
            "Add torn mozzarella pieces",
            "Bake for 12-15 minutes",
            "Top with fresh basil and olive oil"
        ],
        prepTime: "20 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 6,
        name: "Beef Stroganoff",
        category: "beef",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7",
        description: "Tender beef strips in a creamy mushroom sauce served over egg noodles",
        ingredients: [
            "1 lb beef sirloin, sliced",
            "8 oz mushrooms",
            "1 onion, sliced",
            "2 cups beef broth",
            "1 cup sour cream",
            "Egg noodles"
        ],
        instructions: [
            "Sear beef strips until browned",
            "Sauté mushrooms and onions",
            "Add beef broth and simmer",
            "Stir in sour cream",
            "Serve over cooked egg noodles",
            "Garnish with parsley"
        ],
        prepTime: "15 minutes",
        cookTime: "25 minutes",
        servings: 4
    },
    {
        id: 7,
        name: "Chicken Marsala",
        category: "chicken",
        image: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b",
        description: "Classic Italian chicken dish with mushrooms in a Marsala wine sauce",
        ingredients: [
            "4 chicken breasts",
            "8 oz mushrooms",
            "1 cup Marsala wine",
            "1/2 cup chicken broth",
            "1/4 cup flour",
            "Fresh parsley"
        ],
        instructions: [
            "Dredge chicken in flour",
            "Pan-fry chicken until golden",
            "Sauté mushrooms",
            "Add Marsala wine and reduce",
            "Add chicken broth and simmer",
            "Return chicken to pan and coat with sauce"
        ],
        prepTime: "15 minutes",
        cookTime: "25 minutes",
        servings: 4
    },
    {
        id: 8,
        name: "Shrimp Scampi",
        category: "seafood",
        image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa",
        description: "Garlicky shrimp in a light white wine and butter sauce over pasta",
        ingredients: [
            "1 lb large shrimp",
            "8 cloves garlic",
            "1/2 cup white wine",
            "1/4 cup butter",
            "Linguine pasta",
            "Red pepper flakes"
        ],
        instructions: [
            "Cook pasta according to package",
            "Sauté garlic in butter",
            "Add shrimp and cook until pink",
            "Add white wine and reduce",
            "Toss with pasta",
            "Garnish with parsley"
        ],
        prepTime: "10 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 9,
        name: "Beef Wellington",
        category: "beef",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
        description: "Tender beef fillet wrapped in mushroom duxelles, prosciutto, and puff pastry",
        ingredients: [
            "2 lb beef tenderloin",
            "Puff pastry",
            "Mushroom duxelles",
            "Prosciutto",
            "Dijon mustard",
            "Egg wash"
        ],
        instructions: [
            "Sear beef tenderloin",
            "Spread with mustard and chill",
            "Layer prosciutto and mushroom duxelles",
            "Wrap in puff pastry",
            "Brush with egg wash",
            "Bake at 400°F for 40 minutes"
        ],
        prepTime: "45 minutes",
        cookTime: "40 minutes",
        servings: 6
    },
    {
        id: 10,
        name: "Chicken Tikka Masala",
        category: "chicken",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
        description: "Grilled marinated chicken in a rich, creamy tomato-based curry sauce",
        ingredients: [
            "2 lbs chicken thighs",
            "Yogurt marinade",
            "Garam masala",
            "Tomato sauce",
            "Heavy cream",
            "Fresh cilantro"
        ],
        instructions: [
            "Marinate chicken in spiced yogurt",
            "Grill or broil chicken until charred",
            "Prepare curry sauce",
            "Simmer chicken in sauce",
            "Add cream and adjust seasoning",
            "Garnish with cilantro"
        ],
        prepTime: "30 minutes",
        cookTime: "40 minutes",
        servings: 6
    },
    {
        id: 11,
        name: "Pork Tenderloin",
        category: "pork",
        image: "https://images.unsplash.com/photo-1432139509613-5c4255815697",
        description: "Herb-crusted pork tenderloin with a garlic-rosemary rub",
        ingredients: [
            "2 pork tenderloins",
            "Fresh herbs",
            "Garlic cloves",
            "Olive oil",
            "Dijon mustard",
            "Salt and pepper"
        ],
        instructions: [
            "Pat tenderloins dry",
            "Rub with mustard and herbs",
            "Sear in hot pan",
            "Transfer to oven",
            "Roast until 145°F internal",
            "Rest before slicing"
        ],
        prepTime: "15 minutes",
        cookTime: "25 minutes",
        servings: 6
    },
    {
        id: 12,
        name: "Fish Tacos",
        category: "seafood",
        image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd",
        description: "Crispy fish tacos with cabbage slaw and chipotle crema",
        ingredients: [
            "White fish fillets",
            "Corn tortillas",
            "Cabbage slaw",
            "Lime crema",
            "Avocado",
            "Fresh cilantro"
        ],
        instructions: [
            "Season and cook fish",
            "Warm tortillas",
            "Prepare slaw and crema",
            "Assemble tacos",
            "Add toppings",
            "Serve with lime wedges"
        ],
        prepTime: "20 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 13,
        name: "Beef Stir Fry",
        category: "beef",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1c1d8",
        description: "Quick and flavorful beef stir fry with colorful vegetables",
        ingredients: [
            "Sliced beef sirloin",
            "Mixed vegetables",
            "Soy sauce",
            "Ginger and garlic",
            "Sesame oil",
            "Rice or noodles"
        ],
        instructions: [
            "Marinate beef slices",
            "Prepare vegetables",
            "Stir fry beef until browned",
            "Add vegetables",
            "Add sauce and simmer",
            "Serve over rice"
        ],
        prepTime: "20 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 14,
        name: "Chicken Parmesan",
        category: "chicken",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8",
        description: "Crispy breaded chicken topped with marinara and melted mozzarella",
        ingredients: [
            "4 chicken breasts",
            "Italian breadcrumbs",
            "Marinara sauce",
            "Mozzarella cheese",
            "Parmesan cheese",
            "Fresh basil"
        ],
        instructions: [
            "Bread chicken cutlets",
            "Pan fry until golden",
            "Top with marinara",
            "Add cheese",
            "Bake until cheese melts",
            "Garnish with basil"
        ],
        prepTime: "20 minutes",
        cookTime: "25 minutes",
        servings: 4
    },
    {
        id: 15,
        name: "Lamb Chops",
        category: "lamb",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143",
        description: "Herb-crusted lamb chops with rosemary and garlic",
        ingredients: [
            "8 lamb chops",
            "Fresh rosemary",
            "Garlic cloves",
            "Olive oil",
            "Dijon mustard",
            "Salt and pepper"
        ],
        instructions: [
            "Marinate with herbs and garlic",
            "Bring to room temperature",
            "Sear in hot pan",
            "Cook to desired doneness",
            "Rest for 5 minutes",
            "Serve with pan juices"
        ],
        prepTime: "15 minutes",
        cookTime: "10 minutes",
        servings: 4
    },
    {
        id: 16,
        name: "Seafood Paella",
        category: "seafood",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a",
        description: "Classic Spanish rice dish with mixed seafood and saffron",
        ingredients: [
            "Bomba rice",
            "Mixed seafood",
            "Saffron threads",
            "Bell peppers",
            "Tomatoes",
            "Seafood stock"
        ],
        instructions: [
            "Toast rice with sofrito",
            "Add saffron and stock",
            "Arrange seafood on top",
            "Simmer until rice is done",
            "Create socarrat",
            "Rest before serving"
        ],
        prepTime: "30 minutes",
        cookTime: "45 minutes",
        servings: 6
    },
    {
        id: 17,
        name: "BBQ Ribs",
        category: "pork",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947",
        description: "Tender, fall-off-the-bone BBQ ribs with homemade sauce",
        ingredients: [
            "2 racks pork ribs",
            "BBQ rub",
            "BBQ sauce",
            "Apple juice",
            "Brown sugar",
            "Spices"
        ],
        instructions: [
            "Remove membrane",
            "Apply dry rub",
            "Smoke at 225°F",
            "Spritz with apple juice",
            "Brush with BBQ sauce",
            "Rest before cutting"
        ],
        prepTime: "30 minutes",
        cookTime: "6 hours",
        servings: 6
    },
    {
        id: 18,
        name: "Chicken Fajitas",
        category: "mexican",
        image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615",
        description: "Sizzling chicken fajitas with peppers and onions",
        ingredients: [
            "Chicken breast strips",
            "Bell peppers",
            "Onions",
            "Tortillas",
            "Fajita seasoning",
            "Lime wedges"
        ],
        instructions: [
            "Marinate chicken",
            "Slice peppers and onions",
            "Cook chicken until done",
            "Sauté vegetables",
            "Warm tortillas",
            "Serve with toppings"
        ],
        prepTime: "20 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 19,
        name: "Beef Brisket",
        category: "beef",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
        description: "Slow-smoked beef brisket with a perfect bark",
        ingredients: [
            "Beef brisket",
            "BBQ rub",
            "Wood chips",
            "Beef broth",
            "Black pepper",
            "Garlic powder"
        ],
        instructions: [
            "Trim brisket",
            "Apply rub generously",
            "Smoke at 225°F",
            "Wrap when bark forms",
            "Cook to 203°F internal",
            "Rest for 1-2 hours"
        ],
        prepTime: "1 hour",
        cookTime: "12-15 hours",
        servings: 12
    },
    {
        id: 20,
        name: "Eggplant Parmesan",
        category: "vegetarian",
        image: "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df",
        description: "Layers of breaded eggplant, marinara, and cheese",
        ingredients: [
            "Eggplant slices",
            "Breadcrumbs",
            "Marinara sauce",
            "Mozzarella",
            "Parmesan",
            "Fresh basil"
        ],
        instructions: [
            "Salt eggplant slices",
            "Bread and fry eggplant",
            "Layer with sauce and cheese",
            "Bake until bubbly",
            "Let rest 10 minutes",
            "Garnish with basil"
        ],
        prepTime: "45 minutes",
        cookTime: "35 minutes",
        servings: 6
    },
    {
        id: 21,
        name: "Duck Breast",
        category: "poultry",
        image: "https://images.unsplash.com/photo-1619740455993-9d77a82c8559",
        description: "Pan-seared duck breast with crispy skin",
        ingredients: [
            "Duck breasts",
            "Salt and pepper",
            "Fresh thyme",
            "Garlic cloves",
            "Orange zest",
            "Honey"
        ],
        instructions: [
            "Score duck skin",
            "Season well",
            "Start in cold pan",
            "Render fat slowly",
            "Finish to medium-rare",
            "Rest before slicing"
        ],
        prepTime: "10 minutes",
        cookTime: "20 minutes",
        servings: 2
    },
    {
        id: 22,
        name: "Vegetable Curry",
        category: "vegetarian",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
        description: "Rich and aromatic vegetable curry with coconut milk",
        ingredients: [
            "Mixed vegetables",
            "Coconut milk",
            "Curry paste",
            "Garlic and ginger",
            "Spices",
            "Fresh cilantro"
        ],
        instructions: [
            "Sauté aromatics",
            "Add curry paste",
            "Cook vegetables",
            "Add coconut milk",
            "Simmer until tender",
            "Garnish with cilantro"
        ],
        prepTime: "20 minutes",
        cookTime: "30 minutes",
        servings: 4
    },
    {
        id: 23,
        name: "Beef Enchiladas",
        category: "mexican",
        image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615",
        description: "Beef-filled enchiladas with red sauce and melted cheese",
        ingredients: [
            "Ground beef",
            "Corn tortillas",
            "Enchilada sauce",
            "Cheese blend",
            "Onions",
            "Cilantro"
        ],
        instructions: [
            "Cook seasoned beef",
            "Dip tortillas in sauce",
            "Fill and roll",
            "Top with sauce and cheese",
            "Bake until bubbly",
            "Garnish and serve"
        ],
        prepTime: "30 minutes",
        cookTime: "25 minutes",
        servings: 6
    },
    {
        id: 24,
        name: "Chicken Pot Pie",
        category: "chicken",
        image: "https://images.unsplash.com/photo-1612182062633-9ff3b3598e96",
        description: "Creamy chicken and vegetable filling in a flaky pie crust",
        ingredients: [
            "Pie crust",
            "Cooked chicken",
            "Mixed vegetables",
            "Cream sauce",
            "Herbs",
            "Egg wash"
        ],
        instructions: [
            "Prepare pie crust",
            "Make cream sauce",
            "Mix chicken and vegetables",
            "Fill pie crust",
            "Top with crust and seal",
            "Bake until golden"
        ],
        prepTime: "45 minutes",
        cookTime: "35 minutes",
        servings: 6
    },
    {
        id: 25,
        name: "Meatloaf",
        category: "beef",
        image: "https://images.unsplash.com/photo-1544378382-5ea6674c381d",
        description: "Classic comfort food meatloaf with tangy glaze",
        ingredients: [
            "Ground beef",
            "Breadcrumbs",
            "Onion and garlic",
            "Eggs",
            "Ketchup glaze",
            "Seasonings"
        ],
        instructions: [
            "Mix meat and ingredients",
            "Shape into loaf",
            "Make glaze",
            "Brush with glaze",
            "Bake until done",
            "Rest before slicing"
        ],
        prepTime: "20 minutes",
        cookTime: "1 hour",
        servings: 8
    },
    {
        id: 26,
        name: "Pad Thai",
        category: "asian",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e",
        description: "Classic Thai stir-fried rice noodles with shrimp and peanuts",
        ingredients: [
            "Rice noodles",
            "Shrimp",
            "Tofu",
            "Bean sprouts",
            "Pad Thai sauce",
            "Crushed peanuts"
        ],
        instructions: [
            "Soak rice noodles",
            "Stir-fry shrimp and tofu",
            "Add noodles and sauce",
            "Add bean sprouts",
            "Toss with peanuts",
            "Garnish and serve"
        ],
        prepTime: "25 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 27,
        name: "Stuffed Peppers",
        category: "beef",
        image: "https://images.unsplash.com/photo-1601047095317-25593e61e3b1",
        description: "Bell peppers stuffed with seasoned ground beef and rice",
        ingredients: [
            "Bell peppers",
            "Ground beef",
            "Cooked rice",
            "Tomato sauce",
            "Cheese",
            "Seasonings"
        ],
        instructions: [
            "Hollow peppers",
            "Cook beef and rice",
            "Mix filling",
            "Stuff peppers",
            "Top with cheese",
            "Bake until tender"
        ],
        prepTime: "30 minutes",
        cookTime: "45 minutes",
        servings: 6
    },
    {
        id: 28,
        name: "Beef Stew",
        category: "beef",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7",
        description: "Hearty beef stew with tender vegetables in rich gravy",
        ingredients: [
            "Stewing beef",
            "Root vegetables",
            "Beef broth",
            "Red wine",
            "Fresh herbs",
            "Pearl onions"
        ],
        instructions: [
            "Brown beef chunks",
            "Sauté vegetables",
            "Add liquid and simmer",
            "Cook until tender",
            "Thicken gravy",
            "Adjust seasonings"
        ],
        prepTime: "30 minutes",
        cookTime: "2.5 hours",
        servings: 8
    },
    {
        id: 29,
        name: "Chicken Piccata",
        category: "chicken",
        image: "https://images.unsplash.com/photo-1632778149799-16e4b61c6c44",
        description: "Tender chicken cutlets in a bright lemon-caper sauce",
        ingredients: [
            "Chicken cutlets",
            "Capers",
            "Lemon juice",
            "White wine",
            "Butter",
            "Fresh parsley"
        ],
        instructions: [
            "Dredge chicken in flour",
            "Pan-fry until golden",
            "Make lemon-caper sauce",
            "Return chicken to pan",
            "Simmer in sauce",
            "Garnish with parsley"
        ],
        prepTime: "15 minutes",
        cookTime: "20 minutes",
        servings: 4
    },
    {
        id: 30,
        name: "Sushi Rolls",
        category: "asian",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
        description: "Fresh California rolls with crab, avocado, and cucumber",
        ingredients: [
            "Sushi rice",
            "Nori sheets",
            "Crab meat",
            "Avocado",
            "Cucumber",
            "Sesame seeds"
        ],
        instructions: [
            "Prepare sushi rice",
            "Layer nori and rice",
            "Add fillings",
            "Roll tightly",
            "Cut into pieces",
            "Serve with soy sauce"
        ],
        prepTime: "45 minutes",
        cookTime: "20 minutes",
        servings: 4
    },
    {
        id: 31,
        name: "Shepherd's Pie",
        category: "beef",
        image: "https://images.unsplash.com/photo-1619894991209-9f9694be045a",
        description: "Classic comfort food with ground lamb and mashed potato topping",
        ingredients: [
            "Ground lamb",
            "Mixed vegetables",
            "Mashed potatoes",
            "Beef broth",
            "Worcestershire sauce",
            "Fresh thyme"
        ],
        instructions: [
            "Cook meat and vegetables",
            "Make gravy",
            "Prepare mashed potatoes",
            "Layer in baking dish",
            "Bake until golden",
            "Rest before serving"
        ],
        prepTime: "40 minutes",
        cookTime: "30 minutes",
        servings: 6
    },
    {
        id: 32,
        name: "Orange Chicken",
        category: "asian",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
        description: "Crispy chicken pieces in a sweet and tangy orange sauce",
        ingredients: [
            "Chicken thighs",
            "Orange juice",
            "Soy sauce",
            "Cornstarch",
            "Garlic and ginger",
            "Green onions"
        ],
        instructions: [
            "Bread chicken pieces",
            "Fry until crispy",
            "Make orange sauce",
            "Coat chicken",
            "Garnish with sesame",
            "Serve over rice"
        ],
        prepTime: "25 minutes",
        cookTime: "20 minutes",
        servings: 4
    },
    {
        id: 33,
        name: "Beef Tacos",
        category: "mexican",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
        description: "Classic ground beef tacos with fresh toppings",
        ingredients: [
            "Ground beef",
            "Taco seasoning",
            "Corn tortillas",
            "Lettuce",
            "Cheese",
            "Fresh salsa"
        ],
        instructions: [
            "Cook seasoned beef",
            "Warm tortillas",
            "Prepare toppings",
            "Assemble tacos",
            "Add sauce",
            "Serve immediately"
        ],
        prepTime: "15 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 34,
        name: "Mushroom Risotto",
        category: "vegetarian",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
        description: "Creamy Italian rice dish with wild mushrooms and Parmesan",
        ingredients: [
            "Arborio rice",
            "Mixed mushrooms",
            "White wine",
            "Vegetable broth",
            "Parmesan cheese",
            "Fresh herbs"
        ],
        instructions: [
            "Sauté mushrooms",
            "Toast rice",
            "Add wine and reduce",
            "Gradually add broth",
            "Stir in cheese",
            "Finish with butter"
        ],
        prepTime: "15 minutes",
        cookTime: "30 minutes",
        servings: 4
    },
    {
        id: 35,
        name: "Teriyaki Salmon",
        category: "seafood",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
        description: "Glazed salmon with homemade teriyaki sauce",
        ingredients: [
            "Salmon fillets",
            "Soy sauce",
            "Mirin",
            "Brown sugar",
            "Ginger",
            "Green onions"
        ],
        instructions: [
            "Make teriyaki sauce",
            "Marinate salmon",
            "Preheat broiler",
            "Broil salmon",
            "Brush with sauce",
            "Garnish and serve"
        ],
        prepTime: "15 minutes",
        cookTime: "12 minutes",
        servings: 4
    },
    {
        id: 36,
        name: "Chicken Curry",
        category: "indian",
        image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5c",
        description: "Rich and aromatic Indian chicken curry",
        ingredients: [
            "Chicken pieces",
            "Onions",
            "Tomatoes",
            "Curry spices",
            "Yogurt",
            "Fresh cilantro"
        ],
        instructions: [
            "Marinate chicken",
            "Sauté onions",
            "Add spices",
            "Cook chicken",
            "Simmer sauce",
            "Garnish with cilantro"
        ],
        prepTime: "20 minutes",
        cookTime: "40 minutes",
        servings: 6
    },
    {
        id: 37,
        name: "Pork Chops",
        category: "pork",
        image: "https://images.unsplash.com/photo-1432139509613-5c4255815697",
        description: "Pan-seared pork chops with herb butter",
        ingredients: [
            "Bone-in pork chops",
            "Herbs",
            "Garlic butter",
            "Salt and pepper",
            "Olive oil",
            "Fresh thyme"
        ],
        instructions: [
            "Season chops",
            "Sear in hot pan",
            "Add herbs and butter",
            "Baste while cooking",
            "Rest meat",
            "Serve with pan sauce"
        ],
        prepTime: "10 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 38,
        name: "Beef Lasagna",
        category: "pasta",
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
        description: "Classic Italian lasagna with meat sauce and three cheeses",
        ingredients: [
            "Lasagna noodles",
            "Ground beef",
            "Marinara sauce",
            "Ricotta cheese",
            "Mozzarella",
            "Parmesan"
        ],
        instructions: [
            "Make meat sauce",
            "Mix cheese filling",
            "Layer ingredients",
            "Cover and bake",
            "Uncover and brown",
            "Rest before serving"
        ],
        prepTime: "45 minutes",
        cookTime: "1 hour",
        servings: 8
    },
    {
        id: 39,
        name: "Shrimp Stir Fry",
        category: "asian",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
        description: "Quick and flavorful shrimp stir fry with vegetables",
        ingredients: [
            "Large shrimp",
            "Mixed vegetables",
            "Stir fry sauce",
            "Ginger and garlic",
            "Sesame oil",
            "Green onions"
        ],
        instructions: [
            "Prepare shrimp",
            "Chop vegetables",
            "Stir fry vegetables",
            "Add shrimp",
            "Add sauce",
            "Serve over rice"
        ],
        prepTime: "15 minutes",
        cookTime: "10 minutes",
        servings: 4
    },
    {
        id: 40,
        name: "Chicken Wings",
        category: "chicken",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
        description: "Crispy chicken wings with choice of sauces",
        ingredients: [
            "Chicken wings",
            "Wing sauce",
            "Butter",
            "Garlic powder",
            "Ranch dressing",
            "Celery sticks"
        ],
        instructions: [
            "Pat wings dry",
            "Season wings",
            "Bake until crispy",
            "Prepare sauce",
            "Toss in sauce",
            "Serve with dressing"
        ],
        prepTime: "10 minutes",
        cookTime: "45 minutes",
        servings: 4
    },
    {
        id: 41,
        name: "Beef Burrito",
        category: "mexican",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
        description: "Large flour tortilla filled with seasoned beef and toppings",
        ingredients: [
            "Ground beef",
            "Mexican rice",
            "Refried beans",
            "Cheese",
            "Flour tortillas",
            "Guacamole"
        ],
        instructions: [
            "Cook seasoned beef",
            "Prepare rice",
            "Warm tortillas",
            "Layer ingredients",
            "Roll burritos",
            "Serve with salsa"
        ],
        prepTime: "20 minutes",
        cookTime: "20 minutes",
        servings: 4
    },
    {
        id: 42,
        name: "Grilled Tuna",
        category: "seafood",
        image: "https://images.unsplash.com/photo-1501595091296-3aa970afb3ff",
        description: "Seared tuna steaks with sesame crust",
        ingredients: [
            "Tuna steaks",
            "Sesame seeds",
            "Soy sauce",
            "Wasabi",
            "Ginger",
            "Green onions"
        ],
        instructions: [
            "Coat with sesame",
            "Heat grill",
            "Sear tuna",
            "Rest briefly",
            "Slice thinly",
            "Serve with sauce"
        ],
        prepTime: "10 minutes",
        cookTime: "6 minutes",
        servings: 4
    },
    {
        id: 43,
        name: "Chicken Shawarma",
        category: "middle-eastern",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783",
        description: "Marinated chicken with Middle Eastern spices",
        ingredients: [
            "Chicken thighs",
            "Shawarma spices",
            "Pita bread",
            "Garlic sauce",
            "Tomatoes",
            "Pickles"
        ],
        instructions: [
            "Marinate chicken",
            "Grill or roast",
            "Slice chicken",
            "Warm pita",
            "Assemble sandwich",
            "Add toppings"
        ],
        prepTime: "4 hours",
        cookTime: "30 minutes",
        servings: 6
    },
    {
        id: 44,
        name: "Beef Kebabs",
        category: "beef",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
        description: "Grilled marinated beef with vegetables",
        ingredients: [
            "Beef chunks",
            "Bell peppers",
            "Onions",
            "Marinade",
            "Cherry tomatoes",
            "Mushrooms"
        ],
        instructions: [
            "Marinate beef",
            "Prepare vegetables",
            "Thread skewers",
            "Preheat grill",
            "Grill kebabs",
            "Rest before serving"
        ],
        prepTime: "30 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 45,
        name: "Vegetable Lasagna",
        category: "vegetarian",
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
        description: "Layered pasta with roasted vegetables and cheese",
        ingredients: [
            "Lasagna noodles",
            "Mixed vegetables",
            "Ricotta cheese",
            "Marinara sauce",
            "Mozzarella",
            "Fresh basil"
        ],
        instructions: [
            "Roast vegetables",
            "Make cheese mixture",
            "Layer ingredients",
            "Cover and bake",
            "Brown top",
            "Cool before serving"
        ],
        prepTime: "45 minutes",
        cookTime: "50 minutes",
        servings: 8
    },
    {
        id: 46,
        name: "Honey Glazed Ham",
        category: "pork",
        image: "https://images.unsplash.com/photo-1515668236457-83c3b8764839",
        description: "Baked ham with sweet honey glaze",
        ingredients: [
            "Spiral ham",
            "Honey",
            "Brown sugar",
            "Dijon mustard",
            "Cloves",
            "Pineapple"
        ],
        instructions: [
            "Score ham",
            "Make glaze",
            "Brush with glaze",
            "Bake ham",
            "Glaze periodically",
            "Rest before slicing"
        ],
        prepTime: "15 minutes",
        cookTime: "2 hours",
        servings: 12
    },
    {
        id: 47,
        name: "Grilled Mahi Mahi",
        category: "seafood",
        image: "https://images.unsplash.com/photo-1553557202-e8e60357f061",
        description: "Grilled mahi mahi with tropical salsa",
        ingredients: [
            "Mahi mahi fillets",
            "Lime juice",
            "Olive oil",
            "Seasonings",
            "Mango salsa",
            "Fresh cilantro"
        ],
        instructions: [
            "Marinate fish",
            "Heat grill",
            "Grill fish",
            "Make salsa",
            "Plate fish",
            "Top with salsa"
        ],
        prepTime: "20 minutes",
        cookTime: "10 minutes",
        servings: 4
    },
    {
        id: 48,
        name: "French Fries",
        category: "sides",
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d",
        description: "Crispy golden french fries seasoned to perfection",
        ingredients: [
            "Russet potatoes",
            "Vegetable oil",
            "Sea salt",
            "Black pepper",
            "Garlic powder",
            "Fresh parsley"
        ],
        instructions: [
            "Cut potatoes into strips",
            "Soak in cold water",
            "Pat dry thoroughly",
            "Fry at 325°F",
            "Fry again at 375°F",
            "Season while hot"
        ],
        prepTime: "20 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 49,
        name: "Steamed Rice",
        category: "sides",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99",
        description: "Perfect fluffy steamed white rice",
        ingredients: [
            "Jasmine rice",
            "Water",
            "Salt",
            "Butter (optional)",
            "Bay leaf (optional)",
            "Oil"
        ],
        instructions: [
            "Rinse rice thoroughly",
            "Add water and salt",
            "Bring to boil",
            "Reduce heat and simmer",
            "Let steam 10 minutes",
            "Fluff with fork"
        ],
        prepTime: "5 minutes",
        cookTime: "20 minutes",
        servings: 4
    },
    {
        id: 50,
        name: "Roasted Vegetables",
        category: "sides",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
        description: "Colorful medley of oven-roasted seasonal vegetables",
        ingredients: [
            "Mixed vegetables",
            "Olive oil",
            "Fresh herbs",
            "Garlic cloves",
            "Salt and pepper",
            "Balsamic vinegar"
        ],
        instructions: [
            "Cut vegetables evenly",
            "Toss with oil and seasonings",
            "Arrange on baking sheet",
            "Roast at 425°F",
            "Turn halfway through",
            "Drizzle with balsamic"
        ],
        prepTime: "15 minutes",
        cookTime: "25 minutes",
        servings: 6
    },
    {
        id: 51,
        name: "Mashed Potatoes",
        category: "sides",
        image: "https://images.unsplash.com/photo-1600175087368-bfcb99a2fd05",
        description: "Creamy, buttery mashed potatoes with garlic",
        ingredients: [
            "Yukon Gold potatoes",
            "Butter",
            "Heavy cream",
            "Roasted garlic",
            "Salt and pepper",
            "Chives"
        ],
        instructions: [
            "Peel and cut potatoes",
            "Boil until tender",
            "Drain well",
            "Add butter and cream",
            "Mash until smooth",
            "Season to taste"
        ],
        prepTime: "15 minutes",
        cookTime: "20 minutes",
        servings: 6
    },
    {
        id: 52,
        name: "Mac and Cheese",
        category: "sides",
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686",
        description: "Creamy baked macaroni and cheese with crispy top",
        ingredients: [
            "Elbow macaroni",
            "Sharp cheddar",
            "Gruyere cheese",
            "Butter",
            "Milk",
            "Breadcrumbs"
        ],
        instructions: [
            "Cook pasta al dente",
            "Make cheese sauce",
            "Combine pasta and sauce",
            "Top with breadcrumbs",
            "Bake until bubbly",
            "Rest before serving"
        ],
        prepTime: "20 minutes",
        cookTime: "30 minutes",
        servings: 8
    },
    {
        id: 53,
        name: "Grilled Asparagus",
        category: "sides",
        image: "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83",
        description: "Tender grilled asparagus with lemon and parmesan",
        ingredients: [
            "Fresh asparagus",
            "Olive oil",
            "Garlic",
            "Lemon",
            "Parmesan cheese",
            "Salt and pepper"
        ],
        instructions: [
            "Trim asparagus ends",
            "Toss with oil and garlic",
            "Preheat grill",
            "Grill until tender",
            "Squeeze lemon juice",
            "Top with parmesan"
        ],
        prepTime: "10 minutes",
        cookTime: "8 minutes",
        servings: 4
    },
    {
        id: 54,
        name: "Sweet Potato Fries",
        category: "sides",
        image: "https://images.unsplash.com/photo-1635030338252-e7c2c55a97c6",
        description: "Crispy baked sweet potato fries with spicy seasoning",
        ingredients: [
            "Sweet potatoes",
            "Olive oil",
            "Cornstarch",
            "Paprika",
            "Garlic powder",
            "Cayenne pepper"
        ],
        instructions: [
            "Cut into even strips",
            "Toss with cornstarch",
            "Add oil and seasonings",
            "Arrange on baking sheet",
            "Bake at 425°F",
            "Serve immediately"
        ],
        prepTime: "15 minutes",
        cookTime: "25 minutes",
        servings: 4
    },
    {
        id: 55,
        name: "Quinoa Pilaf",
        category: "sides",
        image: "https://images.unsplash.com/photo-1544378730-8b5104b38886",
        description: "Fluffy quinoa with vegetables and herbs",
        ingredients: [
            "Quinoa",
            "Vegetable broth",
            "Mixed vegetables",
            "Olive oil",
            "Fresh herbs",
            "Pine nuts"
        ],
        instructions: [
            "Rinse quinoa",
            "Toast quinoa lightly",
            "Add broth and simmer",
            "Fluff when done",
            "Mix in vegetables",
            "Top with pine nuts"
        ],
        prepTime: "10 minutes",
        cookTime: "20 minutes",
        servings: 6
    },
    {
        id: 56,
        name: "Garlic Green Beans",
        category: "sides",
        image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0",
        description: "Crisp-tender green beans sautéed with garlic",
        ingredients: [
            "Fresh green beans",
            "Garlic cloves",
            "Olive oil",
            "Butter",
            "Lemon juice",
            "Almonds"
        ],
        instructions: [
            "Trim green beans",
            "Blanch in boiling water",
            "Ice bath to shock",
            "Sauté garlic in oil",
            "Add beans and butter",
            "Top with almonds"
        ],
        prepTime: "10 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 57,
        name: "Coleslaw",
        category: "sides",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        description: "Creamy coleslaw with crisp cabbage and carrots",
        ingredients: [
            "Shredded cabbage",
            "Carrots",
            "Mayonnaise",
            "Apple cider vinegar",
            "Sugar",
            "Celery seeds"
        ],
        instructions: [
            "Shred vegetables",
            "Make dressing",
            "Combine ingredients",
            "Season to taste",
            "Chill 1 hour",
            "Stir before serving"
        ],
        prepTime: "15 minutes",
        cookTime: "0 minutes",
        servings: 8
    },
    {
        id: 58,
        name: "Bruschetta",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
        description: "Toasted bread topped with fresh tomatoes, basil, and garlic",
        ingredients: [
            "Italian bread",
            "Roma tomatoes",
            "Fresh basil",
            "Garlic cloves",
            "Olive oil",
            "Balsamic glaze"
        ],
        instructions: [
            "Dice tomatoes",
            "Mix with garlic and basil",
            "Slice and toast bread",
            "Rub with garlic",
            "Top with mixture",
            "Drizzle with oil"
        ],
        prepTime: "15 minutes",
        cookTime: "5 minutes",
        servings: 6
    },
    {
        id: 59,
        name: "Spring Rolls",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947",
        description: "Fresh Vietnamese spring rolls with peanut dipping sauce",
        ingredients: [
            "Rice paper",
            "Rice noodles",
            "Shrimp",
            "Fresh herbs",
            "Vegetables",
            "Peanut sauce"
        ],
        instructions: [
            "Prepare fillings",
            "Soak rice paper",
            "Layer ingredients",
            "Roll tightly",
            "Make peanut sauce",
            "Serve immediately"
        ],
        prepTime: "30 minutes",
        cookTime: "0 minutes",
        servings: 8
    },
    {
        id: 60,
        name: "Tomato Soup",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
        description: "Creamy homemade tomato soup with fresh basil",
        ingredients: [
            "Roma tomatoes",
            "Heavy cream",
            "Onion",
            "Garlic",
            "Fresh basil",
            "Vegetable stock"
        ],
        instructions: [
            "Sauté vegetables",
            "Add tomatoes",
            "Simmer with stock",
            "Blend until smooth",
            "Add cream",
            "Garnish with basil"
        ],
        prepTime: "15 minutes",
        cookTime: "30 minutes",
        servings: 6
    },
    {
        id: 61,
        name: "Greek Salad",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
        description: "Fresh Mediterranean salad with feta cheese and olives",
        ingredients: [
            "Cucumber",
            "Tomatoes",
            "Red onion",
            "Feta cheese",
            "Kalamata olives",
            "Olive oil"
        ],
        instructions: [
            "Chop vegetables",
            "Combine ingredients",
            "Crumble feta",
            "Add olives",
            "Drizzle with oil",
            "Season to taste"
        ],
        prepTime: "15 minutes",
        cookTime: "0 minutes",
        servings: 4
    },
    {
        id: 62,
        name: "Buffalo Wings",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d",
        description: "Spicy buffalo wings with blue cheese dressing",
        ingredients: [
            "Chicken wings",
            "Buffalo sauce",
            "Butter",
            "Blue cheese dressing",
            "Celery sticks",
            "Carrot sticks"
        ],
        instructions: [
            "Bake wings until crispy",
            "Make buffalo sauce",
            "Toss wings in sauce",
            "Prepare vegetables",
            "Serve with dressing",
            "Garnish with celery"
        ],
        prepTime: "10 minutes",
        cookTime: "45 minutes",
        servings: 6
    },
    {
        id: 63,
        name: "Loaded Nachos",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d",
        description: "Crispy tortilla chips loaded with toppings",
        ingredients: [
            "Tortilla chips",
            "Ground beef",
            "Cheese sauce",
            "Black beans",
            "Jalapeños",
            "Guacamole"
        ],
        instructions: [
            "Layer chips",
            "Add seasoned beef",
            "Pour cheese sauce",
            "Add toppings",
            "Bake until melted",
            "Serve immediately"
        ],
        prepTime: "20 minutes",
        cookTime: "15 minutes",
        servings: 8
    },
    {
        id: 64,
        name: "Spinach Dip",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1576072115035-e8b3c2b2e661",
        description: "Creamy spinach and artichoke dip",
        ingredients: [
            "Spinach",
            "Artichoke hearts",
            "Cream cheese",
            "Sour cream",
            "Parmesan",
            "Garlic"
        ],
        instructions: [
            "Mix ingredients",
            "Transfer to dish",
            "Top with cheese",
            "Bake until bubbly",
            "Let cool slightly",
            "Serve with bread"
        ],
        prepTime: "15 minutes",
        cookTime: "25 minutes",
        servings: 8
    },
    {
        id: 65,
        name: "Mozzarella Sticks",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7",
        description: "Crispy breaded mozzarella with marinara sauce",
        ingredients: [
            "Mozzarella cheese",
            "Breadcrumbs",
            "Italian seasoning",
            "Eggs",
            "Flour",
            "Marinara sauce"
        ],
        instructions: [
            "Cut cheese into sticks",
            "Bread cheese sticks",
            "Freeze until firm",
            "Heat oil",
            "Fry until golden",
            "Serve with sauce"
        ],
        prepTime: "30 minutes",
        cookTime: "10 minutes",
        servings: 6
    },
    {
        id: 66,
        name: "Garlic Bread",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1573140401552-3fab0b24427f",
        description: "Toasted bread with garlic butter and herbs",
        ingredients: [
            "French bread",
            "Butter",
            "Garlic",
            "Fresh parsley",
            "Parmesan cheese",
            "Italian seasoning"
        ],
        instructions: [
            "Make garlic butter",
            "Slice bread",
            "Spread butter mixture",
            "Add cheese",
            "Bake until golden",
            "Garnish with parsley"
        ],
        prepTime: "10 minutes",
        cookTime: "15 minutes",
        servings: 8
    },
    {
        id: 67,
        name: "Potato Skins",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1581622558663-b2ce33ba42f3",
        description: "Crispy potato skins with cheese and bacon",
        ingredients: [
            "Russet potatoes",
            "Cheddar cheese",
            "Bacon bits",
            "Sour cream",
            "Green onions",
            "Butter"
        ],
        instructions: [
            "Bake potatoes",
            "Scoop out centers",
            "Brush with butter",
            "Add toppings",
            "Bake until crispy",
            "Top with onions"
        ],
        prepTime: "20 minutes",
        cookTime: "1 hour",
        servings: 6
    },
    {
        id: 68,
        name: "Hummus",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d",
        description: "Classic chickpea hummus with tahini",
        ingredients: [
            "Chickpeas",
            "Tahini",
            "Lemon juice",
            "Garlic",
            "Olive oil",
            "Paprika"
        ],
        instructions: [
            "Blend chickpeas",
            "Add tahini",
            "Add seasonings",
            "Process until smooth",
            "Drizzle with oil",
            "Garnish with paprika"
        ],
        prepTime: "10 minutes",
        cookTime: "0 minutes",
        servings: 8
    },
    {
        id: 69,
        name: "Guacamole",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1604544203292-0daa7f847478",
        description: "Fresh avocado dip with lime and cilantro",
        ingredients: [
            "Avocados",
            "Lime juice",
            "Red onion",
            "Tomatoes",
            "Cilantro",
            "Jalapeño"
        ],
        instructions: [
            "Mash avocados",
            "Add lime juice",
            "Mix in vegetables",
            "Season to taste",
            "Cover surface",
            "Chill until serving"
        ],
        prepTime: "15 minutes",
        cookTime: "0 minutes",
        servings: 6
    },
    {
        id: 70,
        name: "Calamari",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
        description: "Crispy fried squid rings with marinara sauce",
        ingredients: [
            "Squid rings",
            "Flour",
            "Seasonings",
            "Eggs",
            "Oil for frying",
            "Marinara sauce"
        ],
        instructions: [
            "Clean squid",
            "Dredge in flour",
            "Heat oil",
            "Fry until golden",
            "Drain on paper",
            "Serve with sauce"
        ],
        prepTime: "20 minutes",
        cookTime: "10 minutes",
        servings: 4
    },
    {
        id: 71,
        name: "Stuffed Mushrooms",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1574043623771-fa05c5ce5b1f",
        description: "Mushroom caps filled with savory breadcrumb mixture",
        ingredients: [
            "Large mushrooms",
            "Cream cheese",
            "Garlic",
            "Breadcrumbs",
            "Parmesan",
            "Fresh herbs"
        ],
        instructions: [
            "Remove stems",
            "Mix filling",
            "Stuff mushrooms",
            "Drizzle with oil",
            "Bake until golden",
            "Garnish and serve"
        ],
        prepTime: "20 minutes",
        cookTime: "20 minutes",
        servings: 6
    },
    {
        id: 72,
        name: "Deviled Eggs",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1546813916-4a8b8c9ebf36",
        description: "Classic deviled eggs with creamy filling",
        ingredients: [
            "Large eggs",
            "Mayonnaise",
            "Dijon mustard",
            "Paprika",
            "Chives",
            "Salt and pepper"
        ],
        instructions: [
            "Boil eggs",
            "Halve and remove yolks",
            "Mix filling",
            "Pipe into whites",
            "Garnish with paprika",
            "Chill until serving"
        ],
        prepTime: "20 minutes",
        cookTime: "10 minutes",
        servings: 12
    },
    {
        id: 73,
        name: "Chicken Satay",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783",
        description: "Grilled chicken skewers with peanut sauce",
        ingredients: [
            "Chicken breast",
            "Coconut milk",
            "Curry powder",
            "Peanut sauce",
            "Lime wedges",
            "Cilantro"
        ],
        instructions: [
            "Marinate chicken",
            "Thread onto skewers",
            "Prepare sauce",
            "Grill until done",
            "Serve with sauce",
            "Garnish with cilantro"
        ],
        prepTime: "30 minutes",
        cookTime: "10 minutes",
        servings: 6
    },
    {
        id: 74,
        name: "Crab Cakes",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
        description: "Classic Maryland-style crab cakes",
        ingredients: [
            "Lump crab meat",
            "Breadcrumbs",
            "Mayonnaise",
            "Dijon mustard",
            "Old Bay seasoning",
            "Fresh parsley"
        ],
        instructions: [
            "Mix ingredients",
            "Form into cakes",
            "Chill thoroughly",
            "Pan fry until golden",
            "Drain on paper",
            "Serve with remoulade"
        ],
        prepTime: "20 minutes",
        cookTime: "10 minutes",
        servings: 6
    },
    {
        id: 75,
        name: "Jalapeño Poppers",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1608039858788-6e5c7e999c89",
        description: "Stuffed jalapeños wrapped in bacon",
        ingredients: [
            "Jalapeños",
            "Cream cheese",
            "Cheddar cheese",
            "Bacon strips",
            "Garlic powder",
            "Green onions"
        ],
        instructions: [
            "Halve and seed peppers",
            "Mix cheese filling",
            "Fill peppers",
            "Wrap with bacon",
            "Bake until crispy",
            "Cool slightly"
        ],
        prepTime: "25 minutes",
        cookTime: "20 minutes",
        servings: 8
    },
    {
        id: 76,
        name: "Shrimp Cocktail",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
        description: "Chilled shrimp with zesty cocktail sauce",
        ingredients: [
            "Large shrimp",
            "Cocktail sauce",
            "Lemon wedges",
            "Bay leaves",
            "Peppercorns",
            "Fresh parsley"
        ],
        instructions: [
            "Boil shrimp",
            "Ice bath to cool",
            "Make cocktail sauce",
            "Arrange on platter",
            "Garnish with lemon",
            "Serve chilled"
        ],
        prepTime: "15 minutes",
        cookTime: "5 minutes",
        servings: 8
    },
    {
        id: 77,
        name: "Caprese Salad",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5",
        description: "Fresh mozzarella, tomatoes, and basil with balsamic",
        ingredients: [
            "Fresh mozzarella",
            "Tomatoes",
            "Fresh basil",
            "Olive oil",
            "Balsamic glaze",
            "Sea salt"
        ],
        instructions: [
            "Slice cheese and tomatoes",
            "Arrange on plate",
            "Add basil leaves",
            "Drizzle with oil",
            "Add balsamic",
            "Season with salt"
        ],
        prepTime: "10 minutes",
        cookTime: "0 minutes",
        servings: 4
    },
    {
        id: 78,
        name: "Onion Rings",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d",
        description: "Crispy battered onion rings",
        ingredients: [
            "Sweet onions",
            "Buttermilk",
            "All-purpose flour",
            "Seasonings",
            "Oil for frying",
            "Dipping sauce"
        ],
        instructions: [
            "Slice onions",
            "Soak in buttermilk",
            "Dredge in flour",
            "Fry until golden",
            "Drain on paper",
            "Season while hot"
        ],
        prepTime: "15 minutes",
        cookTime: "20 minutes",
        servings: 6
    },
    {
        id: 79,
        name: "Bacon Wrapped Dates",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1541529086526-db283c563270",
        description: "Sweet dates wrapped in crispy bacon",
        ingredients: [
            "Medjool dates",
            "Bacon strips",
            "Goat cheese",
            "Almonds",
            "Honey",
            "Black pepper"
        ],
        instructions: [
            "Pit dates",
            "Stuff with cheese",
            "Wrap with bacon",
            "Secure with toothpick",
            "Bake until crispy",
            "Drizzle with honey"
        ],
        prepTime: "20 minutes",
        cookTime: "15 minutes",
        servings: 8
    },
    {
        id: 80,
        name: "Rice Pilaf",
        category: "sides",
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6",
        description: "Fluffy rice cooked with aromatics and broth",
        ingredients: [
            "Long grain rice",
            "Onion and garlic",
            "Chicken broth",
            "Bay leaf",
            "Butter",
            "Fresh parsley"
        ],
        instructions: [
            "Sauté aromatics",
            "Toast rice",
            "Add broth",
            "Simmer covered",
            "Fluff with fork",
            "Garnish and serve"
        ],
        prepTime: "10 minutes",
        cookTime: "25 minutes",
        servings: 6
    },
    {
        id: 81,
        name: "Roasted Brussels Sprouts",
        category: "sides",
        image: "https://images.unsplash.com/photo-1438118907704-7718ee9a191a",
        description: "Crispy roasted Brussels sprouts with balsamic glaze",
        ingredients: [
            "Brussels sprouts",
            "Olive oil",
            "Balsamic vinegar",
            "Garlic",
            "Salt and pepper",
            "Pine nuts"
        ],
        instructions: [
            "Trim and halve sprouts",
            "Toss with oil",
            "Arrange on pan",
            "Roast until crispy",
            "Drizzle with balsamic",
            "Top with pine nuts"
        ],
        prepTime: "10 minutes",
        cookTime: "25 minutes",
        servings: 4
    },
    {
        id: 82,
        name: "Potato Salad",
        category: "sides",
        image: "https://images.unsplash.com/photo-1549890134-fe66229c5ac9",
        description: "Classic creamy potato salad with fresh herbs",
        ingredients: [
            "Yukon Gold potatoes",
            "Mayonnaise",
            "Celery",
            "Red onion",
            "Fresh dill",
            "Dijon mustard"
        ],
        instructions: [
            "Boil potatoes",
            "Make dressing",
            "Chop vegetables",
            "Mix ingredients",
            "Chill thoroughly",
            "Adjust seasoning"
        ],
        prepTime: "20 minutes",
        cookTime: "20 minutes",
        servings: 8
    },
    {
        id: 83,
        name: "Corn on the Cob",
        category: "sides",
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076",
        description: "Grilled corn with herb butter and seasonings",
        ingredients: [
            "Fresh corn",
            "Butter",
            "Fresh herbs",
            "Garlic",
            "Salt and pepper",
            "Lime wedges"
        ],
        instructions: [
            "Husk corn",
            "Grill until charred",
            "Make herb butter",
            "Brush with butter",
            "Season well",
            "Serve with lime"
        ],
        prepTime: "10 minutes",
        cookTime: "15 minutes",
        servings: 6
    },
    {
        id: 84,
        name: "Sautéed Mushrooms",
        category: "sides",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
        description: "Garlic butter mushrooms with fresh herbs",
        ingredients: [
            "Mixed mushrooms",
            "Butter",
            "Garlic",
            "Fresh thyme",
            "White wine",
            "Parsley"
        ],
        instructions: [
            "Clean mushrooms",
            "Heat pan",
            "Sauté in butter",
            "Add garlic and herbs",
            "Deglaze with wine",
            "Season and serve"
        ],
        prepTime: "10 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 85,
        name: "Glazed Carrots",
        category: "sides",
        image: "https://images.unsplash.com/photo-1522184216316-3c1a2f3f8c22",
        description: "Sweet and tender glazed baby carrots",
        ingredients: [
            "Baby carrots",
            "Butter",
            "Honey",
            "Fresh dill",
            "Salt and pepper",
            "Parsley"
        ],
        instructions: [
            "Prepare carrots",
            "Steam until tender",
            "Make glaze",
            "Toss to coat",
            "Season well",
            "Garnish and serve"
        ],
        prepTime: "10 minutes",
        cookTime: "20 minutes",
        servings: 6
    },
    {
        id: 86,
        name: "Creamed Spinach",
        category: "sides",
        image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469",
        description: "Rich and creamy spinach with garlic and Parmesan",
        ingredients: [
            "Fresh spinach",
            "Heavy cream",
            "Garlic",
            "Nutmeg",
            "Parmesan cheese",
            "Butter"
        ],
        instructions: [
            "Wilt spinach",
            "Drain well",
            "Make cream sauce",
            "Combine ingredients",
            "Add cheese",
            "Season to taste"
        ],
        prepTime: "15 minutes",
        cookTime: "20 minutes",
        servings: 6
    },
    {
        id: 87,
        name: "Scalloped Potatoes",
        category: "sides",
        image: "https://images.unsplash.com/photo-1597393353415-b3730f3719fe",
        description: "Layered potatoes in creamy garlic sauce",
        ingredients: [
            "Yukon Gold potatoes",
            "Heavy cream",
            "Garlic",
            "Gruyere cheese",
            "Fresh thyme",
            "Nutmeg"
        ],
        instructions: [
            "Slice potatoes thin",
            "Layer with cream",
            "Add cheese",
            "Cover and bake",
            "Uncover to brown",
            "Rest before serving"
        ],
        prepTime: "25 minutes",
        cookTime: "1 hour",
        servings: 8
    },
    {
        id: 88,
        name: "Baked Sweet Potato",
        category: "sides",
        image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19",
        description: "Perfectly baked sweet potatoes with butter and herbs",
        ingredients: [
            "Sweet potatoes",
            "Butter",
            "Brown sugar",
            "Cinnamon",
            "Salt",
            "Pecans"
        ],
        instructions: [
            "Wash potatoes",
            "Pierce with fork",
            "Rub with oil",
            "Bake until tender",
            "Split and fluff",
            "Add toppings"
        ],
        prepTime: "5 minutes",
        cookTime: "45 minutes",
        servings: 4
    },
    {
        id: 89,
        name: "Cauliflower Gratin",
        category: "sides",
        image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9",
        description: "Cheesy baked cauliflower with crispy topping",
        ingredients: [
            "Cauliflower",
            "Cheese sauce",
            "Breadcrumbs",
            "Parmesan",
            "Fresh thyme",
            "Nutmeg"
        ],
        instructions: [
            "Blanch cauliflower",
            "Make cheese sauce",
            "Combine in dish",
            "Top with crumbs",
            "Bake until bubbly",
            "Rest briefly"
        ],
        prepTime: "20 minutes",
        cookTime: "30 minutes",
        servings: 6
    },
    {
        id: 78,
        name: "Coconut Shrimp",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
        description: "Crispy coconut-crusted shrimp with sweet chili sauce",
        ingredients: [
            "Large shrimp",
            "Shredded coconut",
            "Panko breadcrumbs",
            "Eggs",
            "Sweet chili sauce",
            "Fresh lime"
        ],
        instructions: [
            "Clean and devein shrimp",
            "Dredge in flour",
            "Dip in egg wash",
            "Coat with coconut mixture",
            "Fry until golden",
            "Serve with sauce"
        ],
        prepTime: "20 minutes",
        cookTime: "10 minutes",
        servings: 6
    },
    {
        id: 79,
        name: "Baked Brie",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
        description: "Warm baked brie with honey and nuts",
        ingredients: [
            "Brie wheel",
            "Puff pastry",
            "Honey",
            "Walnuts",
            "Fresh rosemary",
            "Egg wash"
        ],
        instructions: [
            "Wrap brie in pastry",
            "Brush with egg wash",
            "Bake until golden",
            "Drizzle with honey",
            "Add nuts",
            "Serve warm"
        ],
        prepTime: "15 minutes",
        cookTime: "25 minutes",
        servings: 8
    },
    {
        id: 80,
        name: "Edamame",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5",
        description: "Steamed soybeans with sea salt",
        ingredients: [
            "Fresh edamame pods",
            "Sea salt",
            "Water",
            "Sesame oil",
            "Black pepper",
            "Sesame seeds"
        ],
        instructions: [
            "Boil water",
            "Add edamame",
            "Cook until tender",
            "Drain well",
            "Season with salt",
            "Drizzle with oil"
        ],
        prepTime: "5 minutes",
        cookTime: "5 minutes",
        servings: 4
    },
    {
        id: 81,
        name: "Fruit Salsa",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5",
        description: "Fresh fruit salsa with cinnamon chips",
        ingredients: [
            "Mixed berries",
            "Mango",
            "Kiwi",
            "Lime juice",
            "Honey",
            "Mint leaves"
        ],
        instructions: [
            "Dice fruits",
            "Mix with lime juice",
            "Add honey",
            "Chill mixture",
            "Make cinnamon chips",
            "Serve together"
        ],
        prepTime: "20 minutes",
        cookTime: "10 minutes",
        servings: 8
    },
    {
        id: 82,
        name: "Cheese Platter",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
        description: "Curated selection of cheeses with accompaniments",
        ingredients: [
            "Mixed cheeses",
            "Fresh fruits",
            "Nuts",
            "Honey",
            "Crackers",
            "Dried fruits"
        ],
        instructions: [
            "Select cheese variety",
            "Arrange on board",
            "Add accompaniments",
            "Include garnishes",
            "Add serving tools",
            "Serve at room temp"
        ],
        prepTime: "20 minutes",
        cookTime: "0 minutes",
        servings: 10
    },
    {
        id: 83,
        name: "Zucchini Fritters",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5",
        description: "Crispy zucchini fritters with herb yogurt sauce",
        ingredients: [
            "Grated zucchini",
            "Flour",
            "Eggs",
            "Fresh herbs",
            "Greek yogurt",
            "Garlic"
        ],
        instructions: [
            "Drain zucchini",
            "Mix ingredients",
            "Form patties",
            "Pan fry until crispy",
            "Make sauce",
            "Serve hot"
        ],
        prepTime: "25 minutes",
        cookTime: "15 minutes",
        servings: 6
    },
    {
        id: 84,
        name: "Beef Tartare",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
        description: "Classic beef tartare with traditional accompaniments",
        ingredients: [
            "Prime beef tenderloin",
            "Capers",
            "Shallots",
            "Dijon mustard",
            "Egg yolk",
            "Fresh herbs"
        ],
        instructions: [
            "Finely chop beef",
            "Mix ingredients",
            "Season well",
            "Shape mixture",
            "Add egg yolk",
            "Serve immediately"
        ],
        prepTime: "30 minutes",
        cookTime: "0 minutes",
        servings: 4
    },
    {
        id: 85,
        name: "Prosciutto Melon",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1547496502-affa22d38842",
        description: "Sweet cantaloupe wrapped with salty prosciutto",
        ingredients: [
            "Ripe cantaloupe",
            "Prosciutto slices",
            "Fresh mint",
            "Black pepper",
            "Olive oil",
            "Balsamic glaze"
        ],
        instructions: [
            "Cut melon into wedges",
            "Remove rind",
            "Wrap with prosciutto",
            "Arrange on platter",
            "Drizzle with oil",
            "Garnish with mint"
        ],
        prepTime: "15 minutes",
        cookTime: "0 minutes",
        servings: 8
    },
    {
        id: 86,
        name: "Cucumber Bites",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1623428454614-abaf00244e52",
        description: "Fresh cucumber rounds topped with herbed cream cheese",
        ingredients: [
            "English cucumber",
            "Cream cheese",
            "Fresh dill",
            "Smoked salmon",
            "Capers",
            "Red onion"
        ],
        instructions: [
            "Slice cucumber",
            "Mix cream cheese",
            "Pipe onto rounds",
            "Top with salmon",
            "Add capers",
            "Garnish with dill"
        ],
        prepTime: "20 minutes",
        cookTime: "0 minutes",
        servings: 12
    },
    {
        id: 87,
        name: "Salmon Tartare",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        description: "Fresh salmon tartare with avocado and citrus",
        ingredients: [
            "Fresh salmon",
            "Avocado",
            "Citrus juice",
            "Shallots",
            "Capers",
            "Fresh herbs"
        ],
        instructions: [
            "Dice salmon",
            "Mix ingredients",
            "Season well",
            "Chill mixture",
            "Shape portions",
            "Serve immediately"
        ],
        prepTime: "25 minutes",
        cookTime: "0 minutes",
        servings: 6
    },
    {
        id: 88,
        name: "Olive Tapenade",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1590862404045-8d2c2c8a2c0a",
        description: "Mediterranean olive spread with herbs and garlic",
        ingredients: [
            "Mixed olives",
            "Capers",
            "Garlic",
            "Anchovy fillets",
            "Olive oil",
            "Fresh herbs"
        ],
        instructions: [
            "Pit olives",
            "Blend ingredients",
            "Adjust seasoning",
            "Chill mixture",
            "Serve with bread",
            "Drizzle with oil"
        ],
        prepTime: "15 minutes",
        cookTime: "0 minutes",
        servings: 8
    },
    {
        id: 89,
        name: "Pesto Crostini",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
        description: "Toasted bread with fresh pesto and cherry tomatoes",
        ingredients: [
            "Baguette slices",
            "Fresh pesto",
            "Cherry tomatoes",
            "Fresh mozzarella",
            "Olive oil",
            "Basil leaves"
        ],
        instructions: [
            "Toast bread",
            "Spread pesto",
            "Add cheese",
            "Top with tomatoes",
            "Drizzle with oil",
            "Garnish with basil"
        ],
        prepTime: "15 minutes",
        cookTime: "10 minutes",
        servings: 12
    },
    {
        id: 90,
        name: "Beef Carpaccio",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
        description: "Thinly sliced raw beef with arugula and Parmesan",
        ingredients: [
            "Beef tenderloin",
            "Arugula",
            "Parmesan cheese",
            "Olive oil",
            "Capers",
            "Lemon juice"
        ],
        instructions: [
            "Freeze beef slightly",
            "Slice very thin",
            "Arrange on plate",
            "Top with arugula",
            "Add cheese and capers",
            "Drizzle with oil"
        ],
        prepTime: "20 minutes",
        cookTime: "0 minutes",
        servings: 6
    },
    {
        id: 91,
        name: "Tempura Veggies",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5",
        description: "Light and crispy tempura-battered vegetables",
        ingredients: [
            "Mixed vegetables",
            "Tempura flour",
            "Ice water",
            "Dipping sauce",
            "Oil for frying",
            "Salt"
        ],
        instructions: [
            "Prepare vegetables",
            "Make batter",
            "Heat oil",
            "Dip and fry",
            "Drain on paper",
            "Serve with sauce"
        ],
        prepTime: "20 minutes",
        cookTime: "15 minutes",
        servings: 6
    },
    {
        id: 92,
        name: "Tuna Tartare",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        description: "Fresh tuna tartare with Asian-inspired seasonings",
        ingredients: [
            "Sushi-grade tuna",
            "Soy sauce",
            "Sesame oil",
            "Green onions",
            "Avocado",
            "Sesame seeds"
        ],
        instructions: [
            "Dice tuna",
            "Mix seasonings",
            "Combine gently",
            "Shape portions",
            "Garnish plate",
            "Serve chilled"
        ],
        prepTime: "20 minutes",
        cookTime: "0 minutes",
        servings: 4
    },
    {
        id: 93,
        name: "Spanakopita",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8",
        description: "Greek spinach and feta in phyllo pastry",
        ingredients: [
            "Spinach",
            "Feta cheese",
            "Phyllo dough",
            "Onions",
            "Eggs",
            "Butter"
        ],
        instructions: [
            "Sauté spinach",
            "Mix with feta",
            "Layer phyllo",
            "Fill and fold",
            "Brush with butter",
            "Bake until golden"
        ],
        prepTime: "30 minutes",
        cookTime: "25 minutes",
        servings: 12
    },
    {
        id: 94,
        name: "Arancini",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8",
        description: "Italian rice balls stuffed with cheese and herbs",
        ingredients: [
            "Risotto rice",
            "Mozzarella",
            "Breadcrumbs",
            "Eggs",
            "Parmesan",
            "Fresh herbs"
        ],
        instructions: [
            "Make risotto",
            "Cool completely",
            "Form balls",
            "Stuff with cheese",
            "Bread and fry",
            "Serve with sauce"
        ],
        prepTime: "45 minutes",
        cookTime: "20 minutes",
        servings: 8
    },
    {
        id: 95,
        name: "Empanadas",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8",
        description: "Latin American pastries with savory filling",
        ingredients: [
            "Pastry dough",
            "Ground beef",
            "Onions",
            "Spices",
            "Olives",
            "Egg wash"
        ],
        instructions: [
            "Make filling",
            "Roll dough",
            "Fill and seal",
            "Brush with egg",
            "Bake until golden",
            "Serve warm"
        ],
        prepTime: "40 minutes",
        cookTime: "25 minutes",
        servings: 12
    },
    {
        id: 96,
        name: "Samosas",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8",
        description: "Indian spiced pastries with potato filling",
        ingredients: [
            "Pastry dough",
            "Potatoes",
            "Peas",
            "Indian spices",
            "Onions",
            "Cilantro"
        ],
        instructions: [
            "Make filling",
            "Roll dough",
            "Shape and fill",
            "Seal edges",
            "Fry until golden",
            "Serve with chutney"
        ],
        prepTime: "45 minutes",
        cookTime: "20 minutes",
        servings: 12
    },
    {
        id: 97,
        name: "Gyoza",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8",
        description: "Japanese dumplings with pork and vegetable filling",
        ingredients: [
            "Gyoza wrappers",
            "Ground pork",
            "Cabbage",
            "Garlic and ginger",
            "Green onions",
            "Soy sauce"
        ],
        instructions: [
            "Mix filling",
            "Fill wrappers",
            "Pleat edges",
            "Pan-fry bottom",
            "Steam until done",
            "Serve with sauce"
        ],
        prepTime: "30 minutes",
        cookTime: "10 minutes",
        servings: 24
    },
    {
        id: 98,
        name: "Ceviche",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8",
        description: "Fresh seafood cured in citrus juice",
        ingredients: [
            "Fresh fish",
            "Lime juice",
            "Red onion",
            "Cilantro",
            "Chili peppers",
            "Sweet potato"
        ],
        instructions: [
            "Dice fish",
            "Marinate in lime",
            "Add vegetables",
            "Season well",
            "Chill thoroughly",
            "Serve cold"
        ],
        prepTime: "20 minutes",
        cookTime: "0 minutes",
        servings: 6
    },
    {
        id: 99,
        name: "Duck Confit",
        category: "french",
        image: "https://images.unsplash.com/photo-1619740455993-9d77a82c8559",
        description: "Classic French duck leg preserved and cooked in its own fat",
        ingredients: [
            "Duck legs",
            "Duck fat",
            "Sea salt",
            "Fresh thyme",
            "Garlic cloves",
            "Black peppercorns"
        ],
        instructions: [
            "Cure duck legs",
            "Rinse and dry",
            "Submerge in fat",
            "Cook slowly",
            "Cool in fat",
            "Crisp skin before serving"
        ],
        prepTime: "24 hours",
        cookTime: "3 hours",
        servings: 4
    },
    {
        id: 100,
        name: "Coq au Vin",
        category: "french",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
        description: "Traditional French chicken braised in wine",
        ingredients: [
            "Chicken pieces",
            "Red wine",
            "Pearl onions",
            "Mushrooms",
            "Bacon lardons",
            "Fresh herbs"
        ],
        instructions: [
            "Brown chicken",
            "Cook bacon and vegetables",
            "Add wine and broth",
            "Simmer until tender",
            "Reduce sauce",
            "Garnish and serve"
        ],
        prepTime: "30 minutes",
        cookTime: "1.5 hours",
        servings: 6
    },
    {
        id: 101,
        name: "Beef Bourguignon",
        category: "french",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7",
        description: "Classic French beef stew in red wine sauce",
        ingredients: [
            "Beef chuck",
            "Red wine",
            "Pearl onions",
            "Mushrooms",
            "Bacon",
            "Fresh herbs"
        ],
        instructions: [
            "Brown beef chunks",
            "Cook bacon and vegetables",
            "Add wine and stock",
            "Simmer until tender",
            "Add mushrooms",
            "Adjust seasoning"
        ],
        prepTime: "45 minutes",
        cookTime: "3 hours",
        servings: 8
    },
    {
        id: 102,
        name: "Ratatouille",
        category: "french",
        image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c",
        description: "Provençal vegetable stew with herbs",
        ingredients: [
            "Eggplant",
            "Zucchini",
            "Tomatoes",
            "Bell peppers",
            "Onions",
            "Fresh herbs"
        ],
        instructions: [
            "Slice vegetables",
            "Layer in dish",
            "Add herbs and oil",
            "Bake covered",
            "Remove cover",
            "Reduce liquid"
        ],
        prepTime: "30 minutes",
        cookTime: "1 hour",
        servings: 6
    },
    {
        id: 103,
        name: "Moussaka",
        category: "mediterranean",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
        description: "Greek layered eggplant and meat casserole",
        ingredients: [
            "Eggplant",
            "Ground lamb",
            "Potatoes",
            "Béchamel sauce",
            "Tomato sauce",
            "Greek spices"
        ],
        instructions: [
            "Prepare vegetables",
            "Make meat sauce",
            "Make béchamel",
            "Layer ingredients",
            "Bake until golden",
            "Rest before serving"
        ],
        prepTime: "1 hour",
        cookTime: "45 minutes",
        servings: 8
    },
    {
        id: 104,
        name: "Paella",
        category: "spanish",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a",
        description: "Spanish rice dish with seafood and saffron",
        ingredients: [
            "Bomba rice",
            "Mixed seafood",
            "Chicken",
            "Saffron",
            "Bell peppers",
            "Peas"
        ],
        instructions: [
            "Sauté proteins",
            "Add vegetables",
            "Toast rice",
            "Add broth and saffron",
            "Cook until crispy bottom",
            "Rest before serving"
        ],
        prepTime: "45 minutes",
        cookTime: "35 minutes",
        servings: 6
    },
    {
        id: 105,
        name: "Osso Buco",
        category: "italian",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
        description: "Italian braised veal shanks in white wine and broth",
        ingredients: [
            "Veal shanks",
            "White wine",
            "Mirepoix",
            "Garlic",
            "Gremolata",
            "Fresh herbs"
        ],
        instructions: [
            "Brown veal shanks",
            "Sauté vegetables",
            "Add wine and broth",
            "Braise until tender",
            "Make gremolata",
            "Serve with risotto"
        ],
        prepTime: "30 minutes",
        cookTime: "2.5 hours",
        servings: 6
    },
    {
        id: 106,
        name: "Gnocchi",
        category: "italian",
        image: "https://images.unsplash.com/photo-1589952283406-b53a7d1347e8",
        description: "Homemade potato dumplings with sage butter sauce",
        ingredients: [
            "Potatoes",
            "Flour",
            "Egg",
            "Butter",
            "Fresh sage",
            "Parmesan"
        ],
        instructions: [
            "Boil potatoes",
            "Make dough",
            "Form gnocchi",
            "Cook in water",
            "Make sage butter",
            "Toss and serve"
        ],
        prepTime: "45 minutes",
        cookTime: "30 minutes",
        servings: 4
    },
    {
        id: 107,
        name: "Beef Rendang",
        category: "asian",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
        description: "Indonesian spiced beef stew with coconut",
        ingredients: [
            "Beef chuck",
            "Coconut milk",
            "Lemongrass",
            "Galangal",
            "Spice paste",
            "Kaffir lime leaves"
        ],
        instructions: [
            "Make spice paste",
            "Brown beef",
            "Add coconut milk",
            "Simmer slowly",
            "Reduce until dry",
            "Rest before serving"
        ],
        prepTime: "30 minutes",
        cookTime: "4 hours",
        servings: 6
    },
    {
        id: 108,
        name: "Thai Green Curry",
        category: "asian",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
        description: "Aromatic coconut curry with vegetables",
        ingredients: [
            "Green curry paste",
            "Coconut milk",
            "Chicken",
            "Thai eggplant",
            "Bamboo shoots",
            "Thai basil"
        ],
        instructions: [
            "Fry curry paste",
            "Add coconut milk",
            "Cook chicken",
            "Add vegetables",
            "Simmer until done",
            "Garnish with basil"
        ],
        prepTime: "20 minutes",
        cookTime: "30 minutes",
        servings: 4
    },
    {
        id: 109,
        name: "Butter Chicken",
        category: "indian",
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db",
        description: "Creamy Indian curry with tender chicken",
        ingredients: [
            "Chicken thighs",
            "Yogurt marinade",
            "Tomato sauce",
            "Cream",
            "Butter",
            "Garam masala"
        ],
        instructions: [
            "Marinate chicken",
            "Cook chicken",
            "Make sauce",
            "Combine and simmer",
            "Add cream",
            "Garnish and serve"
        ],
        prepTime: "4 hours",
        cookTime: "40 minutes",
        servings: 6
    },
    {
        id: 110,
        name: "Tandoori Chicken",
        category: "indian",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
        description: "Yogurt-marinated chicken cooked in a tandoor oven",
        ingredients: [
            "Chicken pieces",
            "Yogurt marinade",
            "Tandoori spices",
            "Lemon juice",
            "Ginger garlic paste",
            "Fresh cilantro"
        ],
        instructions: [
            "Make marinade",
            "Marinate chicken",
            "Preheat oven",
            "Arrange on rack",
            "Bake until done",
            "Garnish and serve"
        ],
        prepTime: "4 hours",
        cookTime: "45 minutes",
        servings: 6
    },
    {
        id: 111,
        name: "Bibimbap",
        category: "korean",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733",
        description: "Korean rice bowl with vegetables and gochujang",
        ingredients: [
            "Steamed rice",
            "Mixed vegetables",
            "Beef bulgogi",
            "Fried egg",
            "Gochujang sauce",
            "Sesame oil"
        ],
        instructions: [
            "Prepare vegetables",
            "Cook rice",
            "Cook bulgogi",
            "Fry egg",
            "Assemble bowl",
            "Mix before eating"
        ],
        prepTime: "30 minutes",
        cookTime: "20 minutes",
        servings: 4
    },
    {
        id: 112,
        name: "Korean BBQ",
        category: "korean",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733",
        description: "Grilled marinated meats with banchan sides",
        ingredients: [
            "Beef short ribs",
            "Marinade",
            "Lettuce leaves",
            "Ssamjang sauce",
            "Garlic cloves",
            "Green onions"
        ],
        instructions: [
            "Marinate meat",
            "Prepare banchan",
            "Heat grill",
            "Grill meat",
            "Serve with sides",
            "Wrap and enjoy"
        ],
        prepTime: "4 hours",
        cookTime: "30 minutes",
        servings: 6
    },
    {
        id: 113,
        name: "Teriyaki Chicken",
        category: "asian",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
        description: "Chicken glazed with sweet teriyaki sauce",
        ingredients: [
            "Chicken thighs",
            "Teriyaki sauce",
            "Soy sauce",
            "Mirin",
            "Ginger",
            "Green onions"
        ],
        instructions: [
            "Make sauce",
            "Cook chicken",
            "Glaze repeatedly",
            "Reduce sauce",
            "Slice chicken",
            "Garnish and serve"
        ],
        prepTime: "15 minutes",
        cookTime: "25 minutes",
        servings: 4
    },
    {
        id: 114,
        name: "Beef Pho",
        category: "asian",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43",
        description: "Vietnamese beef noodle soup with herbs",
        ingredients: [
            "Rice noodles",
            "Beef slices",
            "Beef broth",
            "Bean sprouts",
            "Fresh herbs",
            "Spices"
        ],
        instructions: [
            "Make broth",
            "Cook noodles",
            "Slice beef thin",
            "Assemble bowls",
            "Add hot broth",
            "Serve with herbs"
        ],
        prepTime: "30 minutes",
        cookTime: "6 hours",
        servings: 6
    },
    {
        id: 115,
        name: "Chicken Katsu",
        category: "asian",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
        description: "Japanese crispy breaded chicken cutlet",
        ingredients: [
            "Chicken breasts",
            "Panko breadcrumbs",
            "Eggs",
            "Flour",
            "Tonkatsu sauce",
            "Cabbage slaw"
        ],
        instructions: [
            "Pound chicken",
            "Bread cutlets",
            "Heat oil",
            "Fry until golden",
            "Slice and serve",
            "Add sauce"
        ],
        prepTime: "20 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 116,
        name: "Fish and Chips",
        category: "british",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
        description: "Classic British beer-battered fish with chips",
        ingredients: [
            "White fish fillets",
            "Beer batter",
            "Potatoes",
            "Tartar sauce",
            "Lemon wedges",
            "Malt vinegar"
        ],
        instructions: [
            "Make batter",
            "Cut chips",
            "Fry chips",
            "Batter fish",
            "Fry fish",
            "Serve hot"
        ],
        prepTime: "30 minutes",
        cookTime: "20 minutes",
        servings: 4
    },
    {
        id: 117,
        name: "Beef Fajitas",
        category: "mexican",
        image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615",
        description: "Sizzling beef strips with peppers and onions",
        ingredients: [
            "Skirt steak",
            "Bell peppers",
            "Onions",
            "Fajita seasoning",
            "Tortillas",
            "Lime wedges"
        ],
        instructions: [
            "Marinate beef",
            "Slice vegetables",
            "Grill beef",
            "Cook vegetables",
            "Slice beef",
            "Serve with tortillas"
        ],
        prepTime: "30 minutes",
        cookTime: "15 minutes",
        servings: 6
    },
    {
        id: 118,
        name: "Chicken Quesadilla",
        category: "mexican",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
        description: "Grilled tortillas filled with chicken and cheese",
        ingredients: [
            "Flour tortillas",
            "Cooked chicken",
            "Shredded cheese",
            "Bell peppers",
            "Onions",
            "Salsa"
        ],
        instructions: [
            "Cook vegetables",
            "Add chicken",
            "Layer ingredients",
            "Grill quesadilla",
            "Cut into wedges",
            "Serve with salsa"
        ],
        prepTime: "15 minutes",
        cookTime: "10 minutes",
        servings: 4
    },
    {
        id: 119,
        name: "Shrimp Tacos",
        category: "mexican",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
        description: "Grilled shrimp tacos with slaw and lime crema",
        ingredients: [
            "Large shrimp",
            "Taco seasoning",
            "Cabbage slaw",
            "Lime crema",
            "Corn tortillas",
            "Avocado"
        ],
        instructions: [
            "Season shrimp",
            "Make slaw",
            "Prepare crema",
            "Grill shrimp",
            "Warm tortillas",
            "Assemble tacos"
        ],
        prepTime: "20 minutes",
        cookTime: "10 minutes",
        servings: 4
    },
    {
        id: 120,
        name: "Beef Shawarma",
        category: "middle-eastern",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783",
        description: "Spiced beef with tahini sauce in pita bread",
        ingredients: [
            "Beef strips",
            "Shawarma spices",
            "Pita bread",
            "Tahini sauce",
            "Tomatoes",
            "Onions"
        ],
        instructions: [
            "Marinate beef",
            "Make sauce",
            "Cook beef",
            "Warm pita",
            "Prepare vegetables",
            "Assemble sandwich"
        ],
        prepTime: "4 hours",
        cookTime: "20 minutes",
        servings: 6
    },
    {
        id: 121,
        name: "Falafel Plate",
        category: "middle-eastern",
        image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7",
        description: "Crispy chickpea fritters with Mediterranean sides",
        ingredients: [
            "Chickpeas",
            "Fresh herbs",
            "Spices",
            "Tahini sauce",
            "Pita bread",
            "Israeli salad"
        ],
        instructions: [
            "Soak chickpeas",
            "Blend ingredients",
            "Form balls",
            "Fry until crispy",
            "Make sauce",
            "Serve with sides"
        ],
        prepTime: "12 hours",
        cookTime: "20 minutes",
        servings: 6
    },
    {
        id: 122,
        name: "Greek Souvlaki",
        category: "mediterranean",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783",
        description: "Grilled meat skewers with tzatziki sauce",
        ingredients: [
            "Pork chunks",
            "Greek marinade",
            "Pita bread",
            "Tzatziki sauce",
            "Red onion",
            "Tomatoes"
        ],
        instructions: [
            "Marinate meat",
            "Thread skewers",
            "Make tzatziki",
            "Grill meat",
            "Warm pita",
            "Assemble plates"
        ],
        prepTime: "4 hours",
        cookTime: "15 minutes",
        servings: 6
    },
    {
        id: 123,
        name: "Chicken Schnitzel",
        category: "german",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
        description: "Crispy breaded chicken cutlet with lemon",
        ingredients: [
            "Chicken breasts",
            "Breadcrumbs",
            "Eggs",
            "Flour",
            "Lemon wedges",
            "Parsley"
        ],
        instructions: [
            "Pound chicken",
            "Dredge in flour",
            "Dip in egg",
            "Coat with crumbs",
            "Pan fry",
            "Serve with lemon"
        ],
        prepTime: "20 minutes",
        cookTime: "15 minutes",
        servings: 4
    },
    {
        id: 124,
        name: "Spring Rolls",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1544025162-c76e5f7f2951",
        description: "Fresh Vietnamese spring rolls with peanut dipping sauce",
        ingredients: [
            "Rice paper wrappers",
            "Rice noodles",
            "Shrimp",
            "Fresh herbs",
            "Bean sprouts",
            "Peanut sauce"
        ],
        instructions: [
            "Prepare noodles",
            "Cook shrimp",
            "Soften rice paper",
            "Layer ingredients",
            "Roll tightly",
            "Serve with sauce"
        ],
        prepTime: "30 minutes",
        cookTime: "10 minutes",
        servings: 8
    },
    {
        id: 125,
        name: "Tomato Soup",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
        description: "Creamy tomato soup with fresh basil",
        ingredients: [
            "Ripe tomatoes",
            "Onion",
            "Garlic",
            "Heavy cream",
            "Fresh basil",
            "Stock"
        ],
        instructions: [
            "Sauté vegetables",
            "Add tomatoes",
            "Simmer with stock",
            "Blend until smooth",
            "Add cream",
            "Garnish with basil"
        ],
        prepTime: "15 minutes",
        cookTime: "45 minutes",
        servings: 6
    },
    {
        id: 126,
        name: "Buffalo Wings",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1608039858788-667850f129d3",
        description: "Crispy chicken wings tossed in spicy buffalo sauce",
        ingredients: [
            "Chicken wings",
            "Buffalo sauce",
            "Butter",
            "Blue cheese dip",
            "Celery sticks",
            "Carrot sticks"
        ],
        instructions: [
            "Pat wings dry",
            "Season wings",
            "Bake until crispy",
            "Make sauce",
            "Toss wings",
            "Serve with dip"
        ],
        prepTime: "10 minutes",
        cookTime: "45 minutes",
        servings: 6
    },
    {
        id: 127,
        name: "Loaded Nachos",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d",
        description: "Tortilla chips loaded with cheese, meat, and toppings",
        ingredients: [
            "Tortilla chips",
            "Ground beef",
            "Shredded cheese",
            "Black beans",
            "Jalapeños",
            "Guacamole"
        ],
        instructions: [
            "Brown beef",
            "Layer chips",
            "Add toppings",
            "Melt cheese",
            "Add fresh items",
            "Serve immediately"
        ],
        prepTime: "20 minutes",
        cookTime: "15 minutes",
        servings: 8
    },
    {
        id: 128,
        name: "Spinach Dip",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1576072115035-e8b3c2b2e8b0",
        description: "Creamy spinach and artichoke dip with bread",
        ingredients: [
            "Spinach",
            "Artichoke hearts",
            "Cream cheese",
            "Sour cream",
            "Parmesan",
            "Garlic"
        ],
        instructions: [
            "Mix cheeses",
            "Add vegetables",
            "Season well",
            "Bake until bubbly",
            "Stir and serve",
            "Garnish with herbs"
        ],
        prepTime: "15 minutes",
        cookTime: "25 minutes",
        servings: 10
    },
    {
        id: 129,
        name: "Mozzarella Sticks",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1548340748-6d2b7d7ba686",
        description: "Crispy breaded mozzarella with marinara sauce",
        ingredients: [
            "Mozzarella cheese",
            "Breadcrumbs",
            "Italian seasoning",
            "Eggs",
            "Flour",
            "Marinara sauce"
        ],
        instructions: [
            "Cut cheese",
            "Bread sticks",
            "Freeze briefly",
            "Heat oil",
            "Fry until golden",
            "Serve with sauce"
        ],
        prepTime: "30 minutes",
        cookTime: "10 minutes",
        servings: 6
    },
    {
        id: 130,
        name: "Garlic Bread",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c",
        description: "Crusty bread with garlic butter and herbs",
        ingredients: [
            "French bread",
            "Butter",
            "Garlic",
            "Fresh parsley",
            "Parmesan cheese",
            "Olive oil"
        ],
        instructions: [
            "Mix butter",
            "Slice bread",
            "Spread mixture",
            "Add cheese",
            "Bake until crispy",
            "Garnish and serve"
        ],
        prepTime: "10 minutes",
        cookTime: "15 minutes",
        servings: 8
    },
    {
        id: 131,
        name: "Potato Skins",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063",
        description: "Crispy potato skins loaded with cheese and bacon",
        ingredients: [
            "Russet potatoes",
            "Bacon",
            "Cheddar cheese",
            "Green onions",
            "Sour cream",
            "Seasonings"
        ],
        instructions: [
            "Bake potatoes",
            "Scoop out center",
            "Crisp skins",
            "Add toppings",
            "Melt cheese",
            "Garnish and serve"
        ],
        prepTime: "20 minutes",
        cookTime: "1 hour",
        servings: 8
    },
    {
        id: 132,
        name: "Hummus",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
        description: "Creamy chickpea dip with tahini and olive oil",
        ingredients: [
            "Chickpeas",
            "Tahini",
            "Lemon juice",
            "Garlic",
            "Olive oil",
            "Paprika"
        ],
        instructions: [
            "Blend chickpeas",
            "Add tahini",
            "Season mixture",
            "Adjust texture",
            "Drizzle oil",
            "Garnish and serve"
        ],
        prepTime: "10 minutes",
        cookTime: "0 minutes",
        servings: 8
    },
    {
        id: 133,
        name: "Guacamole",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1615213612138-4d1195b1c0e9",
        description: "Fresh avocado dip with lime and cilantro",
        ingredients: [
            "Ripe avocados",
            "Lime juice",
            "Red onion",
            "Tomatoes",
            "Cilantro",
            "Jalapeño"
        ],
        instructions: [
            "Mash avocados",
            "Add lime juice",
            "Mix ingredients",
            "Season well",
            "Chill briefly",
            "Serve with chips"
        ],
        prepTime: "15 minutes",
        cookTime: "0 minutes",
        servings: 6
    },
    {
        id: 134,
        name: "Chicken Satay",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1604579278540-16fa8524e0dc",
        description: "Grilled chicken skewers with peanut sauce",
        ingredients: [
            "Chicken thighs",
            "Thai marinade",
            "Peanut sauce",
            "Bamboo skewers",
            "Cucumber salad",
            "Fresh cilantro"
        ],
        instructions: [
            "Marinate chicken",
            "Thread onto skewers",
            "Make peanut sauce",
            "Grill chicken",
            "Prepare garnishes",
            "Serve with sauce"
        ],
        prepTime: "4 hours",
        cookTime: "15 minutes",
        servings: 6
    },
    {
        id: 135,
        name: "Jalapeño Poppers",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1608039858788-667850f129d3",
        description: "Stuffed jalapeños with cheese and bacon",
        ingredients: [
            "Jalapeño peppers",
            "Cream cheese",
            "Cheddar cheese",
            "Bacon bits",
            "Green onions",
            "Breadcrumbs"
        ],
        instructions: [
            "Halve peppers",
            "Mix filling",
            "Stuff peppers",
            "Top with crumbs",
            "Bake until golden",
            "Cool slightly"
        ],
        prepTime: "20 minutes",
        cookTime: "20 minutes",
        servings: 8
    },
    {
        id: 136,
        name: "Shrimp Cocktail",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
        description: "Chilled poached shrimp with cocktail sauce",
        ingredients: [
            "Large shrimp",
            "Cocktail sauce",
            "Lemon wedges",
            "Bay leaves",
            "Peppercorns",
            "Fresh parsley"
        ],
        instructions: [
            "Prepare court bouillon",
            "Poach shrimp",
            "Ice bath shrimp",
            "Make cocktail sauce",
            "Arrange on platter",
            "Garnish and serve"
        ],
        prepTime: "15 minutes",
        cookTime: "5 minutes",
        servings: 8
    },
    {
        id: 137,
        name: "Caprese Salad",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5",
        description: "Fresh mozzarella, tomatoes, and basil with balsamic",
        ingredients: [
            "Fresh mozzarella",
            "Ripe tomatoes",
            "Fresh basil",
            "Olive oil",
            "Balsamic glaze",
            "Sea salt"
        ],
        instructions: [
            "Slice cheese",
            "Slice tomatoes",
            "Layer ingredients",
            "Add basil leaves",
            "Drizzle with oil",
            "Add balsamic"
        ],
        prepTime: "10 minutes",
        cookTime: "0 minutes",
        servings: 6
    },
    {
        id: 138,
        name: "Onion Rings",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d",
        description: "Crispy battered onion rings with dipping sauce",
        ingredients: [
            "Sweet onions",
            "Buttermilk",
            "All-purpose flour",
            "Seasonings",
            "Oil for frying",
            "Dipping sauce"
        ],
        instructions: [
            "Slice onions",
            "Soak in buttermilk",
            "Dredge in flour",
            "Fry until golden",
            "Drain on paper",
            "Season while hot"
        ],
        prepTime: "20 minutes",
        cookTime: "15 minutes",
        servings: 6
    },
    {
        id: 139,
        name: "Stuffed Peppers",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780",
        description: "Mini bell peppers stuffed with cheese and herbs",
        ingredients: [
            "Mini bell peppers",
            "Cream cheese",
            "Herbs",
            "Garlic",
            "Breadcrumbs",
            "Parmesan"
        ],
        instructions: [
            "Halve peppers",
            "Mix filling",
            "Stuff peppers",
            "Top with crumbs",
            "Bake until tender",
            "Garnish and serve"
        ],
        prepTime: "20 minutes",
        cookTime: "20 minutes",
        servings: 8
    },
    {
        id: 140,
        name: "Mushroom Caps",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1622205313162-be1d5712a43c",
        description: "Stuffed mushrooms with herbed cheese filling",
        ingredients: [
            "Button mushrooms",
            "Cream cheese",
            "Garlic",
            "Fresh herbs",
            "Parmesan",
            "Breadcrumbs"
        ],
        instructions: [
            "Clean mushrooms",
            "Remove stems",
            "Mix filling",
            "Fill caps",
            "Bake until golden",
            "Garnish with herbs"
        ],
        prepTime: "25 minutes",
        cookTime: "20 minutes",
        servings: 8
    },
    {
        id: 141,
        name: "Stuffed Dates",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a",
        description: "Dates stuffed with goat cheese and wrapped in prosciutto",
        ingredients: [
            "Medjool dates",
            "Goat cheese",
            "Prosciutto",
            "Honey",
            "Fresh thyme",
            "Black pepper"
        ],
        instructions: [
            "Pit dates",
            "Fill with cheese",
            "Wrap with prosciutto",
            "Arrange on plate",
            "Drizzle honey",
            "Add fresh thyme"
        ],
        prepTime: "20 minutes",
        cookTime: "0 minutes",
        servings: 8
    },
    {
        id: 142,
        name: "Tuna Tartare",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        description: "Fresh tuna tartare with Asian-inspired seasonings",
        ingredients: [
            "Sushi-grade tuna",
            "Soy sauce",
            "Sesame oil",
            "Green onions",
            "Avocado",
            "Wonton crisps"
        ],
        instructions: [
            "Dice tuna",
            "Mix seasonings",
            "Fold in ingredients",
            "Shape portions",
            "Chill briefly",
            "Serve with crisps"
        ],
        prepTime: "20 minutes",
        cookTime: "0 minutes",
        servings: 6
    },
    {
        id: 143,
        name: "Spanakopita",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8",
        description: "Greek spinach and feta in phyllo pastry",
        ingredients: [
            "Phyllo dough",
            "Spinach",
            "Feta cheese",
            "Onions",
            "Dill",
            "Butter"
        ],
        instructions: [
            "Sauté spinach",
            "Mix with feta",
            "Layer phyllo",
            "Fill and fold",
            "Brush with butter",
            "Bake until golden"
        ],
        prepTime: "30 minutes",
        cookTime: "25 minutes",
        servings: 12
    },
    {
        id: 144,
        name: "Arancini",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8",
        description: "Italian rice balls stuffed with cheese and herbs",
        ingredients: [
            "Risotto rice",
            "Mozzarella",
            "Breadcrumbs",
            "Eggs",
            "Parmesan",
            "Fresh herbs"
        ],
        instructions: [
            "Make risotto",
            "Cool completely",
            "Form balls",
            "Stuff with cheese",
            "Bread and fry",
            "Serve with sauce"
        ],
        prepTime: "45 minutes",
        cookTime: "20 minutes",
        servings: 8
    },
    {
        id: 145,
        name: "Empanadas",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8",
        description: "Latin American pastries with savory filling",
        ingredients: [
            "Pastry dough",
            "Ground beef",
            "Onions",
            "Spices",
            "Olives",
            "Egg wash"
        ],
        instructions: [
            "Make filling",
            "Roll dough",
            "Fill and seal",
            "Brush with egg",
            "Bake until golden",
            "Serve warm"
        ],
        prepTime: "40 minutes",
        cookTime: "25 minutes",
        servings: 12
    },
    {
        id: 146,
        name: "Samosas",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        description: "Indian spiced pastries with potato filling",
        ingredients: [
            "Pastry dough",
            "Potatoes",
            "Green peas",
            "Indian spices",
            "Onions",
            "Cilantro"
        ],
        instructions: [
            "Make filling",
            "Roll dough",
            "Shape and fill",
            "Seal edges",
            "Fry until golden",
            "Serve with chutney"
        ],
        prepTime: "45 minutes",
        cookTime: "20 minutes",
        servings: 12
    },
    {
        id: 147,
        name: "Gyoza",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb",
        description: "Japanese dumplings with pork and vegetable filling",
        ingredients: [
            "Gyoza wrappers",
            "Ground pork",
            "Napa cabbage",
            "Garlic and ginger",
            "Green onions",
            "Soy sauce"
        ],
        instructions: [
            "Mix filling",
            "Fill wrappers",
            "Pleat edges",
            "Pan-fry bottom",
            "Steam until done",
            "Serve with sauce"
        ],
        prepTime: "30 minutes",
        cookTime: "10 minutes",
        servings: 24
    },
    {
        id: 148,
        name: "Ceviche",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1599789197514-47270cd526b4",
        description: "Fresh seafood cured in citrus juice",
        ingredients: [
            "Fresh white fish",
            "Lime juice",
            "Red onion",
            "Cilantro",
            "Chili peppers",
            "Sweet potato"
        ],
        instructions: [
            "Dice fish",
            "Marinate in lime",
            "Add vegetables",
            "Season well",
            "Chill thoroughly",
            "Serve cold"
        ],
        prepTime: "20 minutes",
        cookTime: "0 minutes",
        servings: 6
    }
]; 