import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Header from "./Header";

function Recipe() {
  const [show, setShow] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const recipes = [
    {
      _id: 1,
      title: "Spaghetti Carbonara",
      cuisine: "Italian",
      thumbnail:
        "https://img.taste.com.au/sE-X5HqY/taste/2024/03/5-ingredient-turbo-charged-spaghetti-recipe-196959-1.jpg",
      cookingTime: 20,
      ingredients: [
        "400g spaghetti",
        "200g pancetta or bacon, diced",
        "2 large eggs",
        "1 cup grated Parmesan cheese",
        "2 cloves garlic, minced",
        "Salt and black pepper to taste",
        "Olive oil",
      ],
    },
    {
      _id: 2,
      title: "Chicken Tikka Masala",
      cuisine: "Indian",
      thumbnail:
        "https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG",
      cookingTime: 40,
      ingredients: [
        "500g chicken breast, diced",
        "1 cup yogurt",
        "2 tbsp garam masala",
        "1 tsp turmeric",
        "1 tsp chili powder",
        "3 cloves garlic, minced",
        "1 inch ginger, grated",
        "2 cups tomato puree",
        "1 cup heavy cream",
        "2 tbsp oil",
        "Salt to taste",
      ],
    },
    {
      _id: 3,
      title: "Classic Pancakes",
      cuisine: "American",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqrYT9o2L7RfLLaUJooT1-6gmWNccpY0kUg&s",
      cookingTime: 15,
      ingredients: [
        "1 cup all-purpose flour",
        "1 tbsp sugar",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1 cup milk",
        "1 egg",
        "2 tbsp melted butter",
        "Pinch of salt",
      ],
    },
    {
      _id: 4,
      title: "Beef Tacos",
      cuisine: "Mexican",
      thumbnail:
        "https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-1024x767.jpg",
      cookingTime: 20,
      ingredients: [
        "500g ground beef",
        "1 packet taco seasoning",
        "8 taco shells",
        "1 cup shredded lettuce",
        "1 cup diced tomatoes",
        "1 cup shredded cheese",
        "Sour cream",
        "Salsa",
      ],
    },
    {
      _id: 5,
      title: "Sushi Rolls",
      cuisine: "Japanese",
      thumbnail:
        "https://int.japanesetaste.com/cdn/shop/articles/how-to-make-makizushi-sushi-rolls-japanese-taste.jpg?v=1707914944&width=600",
      cookingTime: 30,
      ingredients: [
        "2 cups sushi rice",
        "3 tbsp rice vinegar",
        "4 nori sheets",
        "1 cucumber, julienned",
        "1 avocado, sliced",
        "200g fresh salmon or crab sticks",
        "Soy sauce",
        "Wasabi",
        "Pickled ginger",
      ],
    },
    {
      _id: 6,
      title: "Ratatouille",
      cuisine: "French",
      thumbnail:
        "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg",
      cookingTime: 35,
      ingredients: [
        "1 eggplant, diced",
        "1 zucchini, sliced",
        "1 bell pepper, diced",
        "1 onion, sliced",
        "3 tomatoes, diced",
        "2 cloves garlic, minced",
        "Olive oil",
        "Salt",
        "Pepper",
      ],
    },
    {
      _id: 7,
      title: "Pad Thai",
      cuisine: "Thai",
      thumbnail:
        "https://images.squarespace-cdn.com/content/v1/60982df9899ff80ac258be5e/1652310608582-O0C9K9CJL206KQ94QTDO/IMG_0381.jpg",
      cookingTime: 25,
      ingredients: [
        "200g rice noodles",
        "2 tbsp tamarind paste",
        "2 tbsp fish sauce",
        "1 tbsp sugar",
        "2 eggs",
        "200g shrimp or chicken",
        "1 cup bean sprouts",
        "Crushed peanuts",
        "Lime wedges",
      ],
    },
    {
      _id: 8,
      title: "Chocolate Chip Cookies",
      cuisine: "American",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBwa70MHum4IXKNbTb3rrXgr6VXo4_c9OhQ&s",
      cookingTime: 20,
      ingredients: [
        "1 cup butter, softened",
        "1 cup sugar",
        "1 cup brown sugar",
        "2 eggs",
        "2 tsp vanilla extract",
        "3 cups all-purpose flour",
        "1 tsp baking soda",
        "2 cups chocolate chips",
      ],
    },
    {
      _id: 9,
      title: "Greek Salad",
      cuisine: "Greek",
      thumbnail:
        "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-6-1.jpg",
      cookingTime: 10,
      ingredients: [
        "2 cups chopped lettuce",
        "1 cucumber, diced",
        "1 tomato, diced",
        "1/2 cup feta cheese",
        "1/4 cup olives",
        "Olive oil",
        "Lemon juice",
        "Oregano",
      ],
    },
    {
      _id: 10,
      title: "Butter Chicken",
      cuisine: "Indian",
      thumbnail:
        "https://www.mysavoryadventures.com/wp-content/uploads/2023/04/restaurant-style-butter-chicken.jpg",
      cookingTime: 40,
      ingredients: [
        "500g chicken thighs",
        "2 cups tomato puree",
        "1 cup heavy cream",
        "1 onion, diced",
        "3 garlic cloves, minced",
        "2 tbsp butter",
        "2 tsp garam masala",
        "Salt to taste",
      ],
    },
    {
        _id: 11,
        title: "Grilled Cheese Sandwich",
        cuisine: "American",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQBi5Co29a_UJVwOtGJrx51ZRJqOqgtAacg&s",
        cookingTime: 10,
        ingredients: [
          "2 slices bread",
          "2 slices cheddar cheese",
          "Butter",
          "Salt to taste"
        ],
      },
      {
        _id: 12,
        title: "Caesar Salad",
        cuisine: "Italian",
        thumbnail: "https://itsavegworldafterall.com/wp-content/uploads/2023/04/Avocado-Caesar-Salad-FI.jpg",
        cookingTime: 15,
        ingredients: [
          "4 cups romaine lettuce, chopped",
          "1/4 cup Parmesan cheese, grated",
          "1/4 cup Caesar dressing",
          "Croutons",
          "Black pepper"
        ],
      },
      {
        _id: 13,
        title: "Vegetable Stir Fry",
        cuisine: "Chinese",
        thumbnail: "https://www.wholesomeyum.com/wp-content/uploads/2020/11/wholesomeyum-Stir-Fry-Vegetables-15.jpg",
        cookingTime: 20,
        ingredients: [
          "1 cup broccoli florets",
          "1 cup carrots, sliced",
          "1 bell pepper, sliced",
          "1 zucchini, sliced",
          "2 tbsp soy sauce",
          "1 tbsp sesame oil",
          "1 garlic clove, minced",
          "1 tsp ginger, grated",
          "Rice, cooked"
        ],
      },
      {
        _id: 14,
        title: "Lasagna",
        cuisine: "Italian",
        thumbnail: "https://assets.bonappetit.com/photos/656f48d75b552734225041ba/1:1/w_3129,h_3129,c_limit/20231120-WEB-Lasanga-6422.jpg",
        cookingTime: 60,
        ingredients: [
          "12 lasagna noodles",
          "1 lb ground beef",
          "2 cups ricotta cheese",
          "2 cups mozzarella cheese",
          "1/2 cup Parmesan cheese",
          "2 cups marinara sauce",
          "1 onion, diced",
          "2 cloves garlic, minced",
          "1 tbsp olive oil",
          "Salt and pepper to taste"
        ],
      },
      {
        _id: 15,
        title: "Beef Wellington",
        cuisine: "British",
        thumbnail: "https://grillmomma.com/wp-content/uploads/2020/12/IMG_1986-3-500x375.jpg",
        cookingTime: 90,
        ingredients: [
          "2 lb beef tenderloin",
          "8 oz mushrooms, chopped",
          "1/2 cup pâté",
          "1 sheet puff pastry",
          "1 egg, beaten",
          "1 tbsp Dijon mustard",
          "Salt and pepper to taste"
        ],
      },
      {
        _id: 16,
        title: "Eggplant Parmesan",
        cuisine: "Italian",
        thumbnail: "https://www.andiemitchell.com/wp-content/uploads/2019/03/healthy_baked_eggplant_parmesan-1.jpg",
        cookingTime: 45,
        ingredients: [
          "2 eggplants, sliced",
          "2 cups marinara sauce",
          "1 1/2 cups mozzarella cheese",
          "1/2 cup Parmesan cheese",
          "2 eggs, beaten",
          "1 cup breadcrumbs",
          "1 tbsp olive oil",
          "Salt and pepper to taste"
        ],
      },
      {
        _id: 17,
        title: "Fettuccine Alfredo",
        cuisine: "Italian",
        thumbnail: "https://assets.bonappetit.com/photos/57e2c3599f19b4610e6b79f6/1:1/w_3260,h_3260,c_limit/fettuccine-alfredo.jpg",
        cookingTime: 25,
        ingredients: [
          "1 lb fettuccine pasta",
          "1 cup heavy cream",
          "1 cup Parmesan cheese",
          "1/2 cup butter",
          "2 cloves garlic, minced",
          "Salt and pepper to taste"
        ],
      },
      {
        _id: 18,
        title: "Margarita Pizza",
        cuisine: "Italian",
        thumbnail: "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067",
        cookingTime: 15,
        ingredients: [
          "1 pizza dough",
          "1 cup mozzarella cheese",
          "1/2 cup tomato sauce",
          "Fresh basil leaves",
          "Olive oil",
          "Salt and pepper"
        ],
      },
      {
        _id: 19,
        title: "Pork Schnitzel",
        cuisine: "German",
        thumbnail: "https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5.jpg",
        cookingTime: 30,
        ingredients: [
          "4 pork chops",
          "1 cup flour",
          "2 eggs, beaten",
          "2 cups breadcrumbs",
          "1/2 cup vegetable oil",
          "Salt and pepper"
        ],
      },
      {
        _id: 20,
        title: "Chili Con Carne",
        cuisine: "Mexican",
        thumbnail: "https://www.allrecipes.com/thmb/PmuatBBGRz9cMF1SWLVUEVAjxPU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/89993-award-winning-chili-con-carne-ddmfs-step-2-16e5d2b62865464486e8256740c7777a.jpg",
        cookingTime: 45,
        ingredients: [
          "1 lb ground beef",
          "1 onion, chopped",
          "2 cloves garlic, minced",
          "2 cups kidney beans, cooked",
          "1 cup diced tomatoes",
          "2 tbsp chili powder",
          "1 tsp cumin",
          "Salt and pepper"
        ],
      }
  ];

  const handleShow = (recipe) => {
    setSelectedRecipe(recipe);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedRecipe(null);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div className="d-flex flex-wrap justify-content-between">
        {filteredRecipes.map((recipe) => (
          <Card key={recipe._id} style={{ width: "18rem", margin: "1rem" }}>
            <Card.Img
              variant="top"
              src={recipe.thumbnail}
              alt={recipe.title}
              style={{
                height: "200px",
                objectFit: "cover",
              }}
            />
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Cuisine: {recipe.cuisine}
              </Card.Subtitle>
              <Card.Text>
                <strong>Cooking Time:</strong> {recipe.cookingTime} minutes
              </Card.Text>
              <Button variant="primary" onClick={() => handleShow(recipe)}>
                View Ingredients
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {selectedRecipe && (
        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="modal-lg"
          aria-labelledby="recipe-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="recipe-modal-title">
              <h4>{selectedRecipe.title}</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-4">
                <Card.Img
                  variant="top"
                  src={selectedRecipe.thumbnail}
                  alt={selectedRecipe.title}
                  className="recipe-image"
                />
              </div>
              <div className="col-md-8">
                <Card.Subtitle className="mb-2 text-muted">
                  <strong>Cuisine:</strong> {selectedRecipe.cuisine}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Cooking Time:</strong> {selectedRecipe.cookingTime}{" "}
                  minutes
                </Card.Text>
                <h5>Ingredients:</h5>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-end">
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default Recipe;
