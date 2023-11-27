import React, { useState, useEffect } from 'react';
import { deleteData } from '../service/apiDeleteData';
import { fetchData } from '../service/apiGetData';
import { putData } from '../service/apiPutData';
import './recipeCard.css'

function RecipeCard({ recipe, recipes, addingRecipes }) {
  const [editEntry, setEditEntry] = useState(false);
  const [name, setName] = useState(recipe.nameOfMeal);
  const [description, setDescription] = useState(recipe.text);
  const [pic, setPic] = useState(recipe.picUrl);
  const [recipesUrl, setRecipesUrl] = useState(recipe.recipeUrl);
  const [author, setAuthor] = useState(recipe.whoAdded);

  useEffect(() => {
    fetchFav();
  }, []);

  function handleDelete(name) {
    deleteData('blog', name)
      .then((data) => {
        console.log(data);
        addingRecipes(
          recipes.filter((element) => element.name !== data.nameOfMeal)
        );
        fetchFav();
      })
      .catch((error) => console.log(error));
  }

  function handleEdit(recipe) {
    setEditEntry(true);
  }

  function handleSave(names) {
    const updatedRecipe = {
      nameOfMeal: name,
      text: description,
      picUrl: pic,
      recipeUrl: recipesUrl,
      whoAdded: author,
    };
    putData('blog', names, updatedRecipe)
      .then((updatedRecipe) => {
        addingRecipes((prevRecipeLists) =>
          prevRecipeLists.map((prevRecipeList) => {
            if (prevRecipeList.name === updatedRecipe.name) {
              return updatedRecipe;
            }
            return prevRecipeList;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchFav() {
    fetchData('blog')
      .then((data) => {
        //console.log(data)
        addingRecipes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {editEntry ? (
        <>
          <form onSubmit={() => handleSave(recipe.nameOfMeal)}>
            <label>
              Recipe:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              >
                {recipe.text}
              </textarea>
            </label>
            <label>
              Picture url:
              <input
                type="text"
                value={pic}
                onChange={(e) => setPic(e.target.value)}
              />
            </label>
            <label>
              Link to "How to make recipe":
              <input
                type="text"
                value={recipes}
                onChange={(e) => setRecipesUrl(e.target.value)}
              />
            </label>
            <label>
              Author:
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </label>
            <button type="submit">Save</button>
          </form>
        </>
      ) : (
        <>
          <center>
            <div className="recipeCard">
              <div className="recipeInfo">
                <div className="recipeName">{recipe.nameOfMeal}</div>
                <div className="recipeText">{recipe.text}</div>
                <div className="recipeUrl">
                  <a href={recipe.recipeUrl}>{recipe.recipeUrl}</a>
                </div>
              </div>
              <div className="recipeImage">
                <img width="150" height="150" src={recipe.picUrl} />
              </div>

              <div className="recipeButtons">
                <button onClick={() => handleDelete(recipe.nameOfMeal)}>
                  delete
                </button>
                <button onClick={() => handleEdit(recipe)}>edit</button>
              </div>
            </div>
          </center>
        </>
      )}
    </div>
  );
}

export default RecipeCard;
