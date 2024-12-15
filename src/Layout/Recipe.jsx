import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Recipe() {
    const recipes = [
        {
          _id: 1,
          title: "Spaghetti Carbonara",
          cuisine: "Italian",
          thumbnail: "https://img.taste.com.au/sE-X5HqY/taste/2024/03/5-ingredient-turbo-charged-spaghetti-recipe-196959-1.jpg",
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
          thumbnail: "https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG",
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
          thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqrYT9o2L7RfLLaUJooT1-6gmWNccpY0kUg&s",
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
          thumbnail: "https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-1024x767.jpg",
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
          thumbnail: "https://int.japanesetaste.com/cdn/shop/articles/how-to-make-makizushi-sushi-rolls-japanese-taste.jpg?v=1707914944&width=600",
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
          thumbnail: "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg",
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
          thumbnail: "https://images.squarespace-cdn.com/content/v1/60982df9899ff80ac258be5e/1652310608582-O0C9K9CJL206KQ94QTDO/IMG_0381.jpg",
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
          thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBwa70MHum4IXKNbTb3rrXgr6VXo4_c9OhQ&s",
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
          thumbnail: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-6-1.jpg",
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
          thumbnail: "https://www.mysavoryadventures.com/wp-content/uploads/2023/04/restaurant-style-butter-chicken.jpg",
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
      ];
      
      
  return (
    <div className="d-flex flex-wrap justify-content-around">
    {recipes.map((recipe) => (
      <Card key={recipe._id} style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src={recipe.thumbnail} alt={recipe.title}  style={{
    width: '100%',
    height: '200px', // Adjust the height as needed
    objectFit: 'cover', // Ensures the image fits the space
  }}/>
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Cuisine: {recipe.cuisine}
          </Card.Subtitle>
          <Card.Text>
            <strong>Cooking Time:</strong> {recipe.cookingTime} minutes
          </Card.Text>
          {/* <Card.Text>
            <strong>Ingredients:</strong>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Card.Text> */}
          <Button variant="primary">View Ingredient</Button>
        </Card.Body>
      </Card>
    ))}
  </div>
);
}

export default Recipe;