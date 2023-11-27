import ChoosenRecipe from './ChoosenRecipe';
import React from 'react';
import home from './home.css';
import recipeFlip from './recipeFlip.css';
import { addData } from '../service/apiPostData';
function RecipeBlock({
  img,
  name,
  data,
  favoritesList,
  setfavoritesList,
  setData,
  setClick,
}) {



  function handleAddToFavorites(img, name, data) {
    console.log(data)
    const newFavorite = { img, name, data };
    if (!favoritesList.find((recipe) => recipe.name === name)) {
      setfavoritesList([...favoritesList, newFavorite]);
      addData('favorites', newFavorite)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  }
  function handleClick() {
    setData(data);
    setClick(true);
  }
  return (
    <div className="card">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img width="100%" height="100%" src={img}></img>
            <center><h3>{name}</h3></center>
          </div>
          <div className="flip-card-back">
            <center><h2>Ingredients:</h2></center>

            {data.ingredients.map((ingredient, index) => {
              if (index < 5) { return <li key={index}>{ingredient.text}</li>; }
            })}
          </div>
        </div>
      </div>

      <div className='detailedInformation'>
        <button onClick={handleClick}> More details</button>
        <button onClick={(e) => handleAddToFavorites(img, name, data)}>
          Add to favorites
        </button>
      </div>
    </div>
  );
}

export default RecipeBlock;
