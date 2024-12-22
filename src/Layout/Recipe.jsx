import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Header from "./Header";

function Recipe() {

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
      <div className="d-flex flex-wrap justify-content-around ">
        {filteredRecipes.map((recipe) => (
          <Card key={recipe._id} style={{ width: "19rem", margin: "2em" }}>
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
