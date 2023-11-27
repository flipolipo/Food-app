import React from 'react';
import './choosenrecipe.css';
import { addData } from '../service/apiPostData';

function ChoosenRecipe(props) {
  function handleClick() {
    props.setClick(false);
    console.log(props);
  }

  function handleAddToFavorites(img, name, data) {
    const newFavorite = { img, name, data };
    if (!props.favoritesList.find((recipe) => recipe.name === name)) {
      props.setfavoritesList([...props.favoritesList, newFavorite]);
      addData('favorites', newFavorite)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  }
  return (
    <div className="container">
      <div className="buttonNameImg">
        <div className="nameAndButtons">
          <div className="titleHeader">
            <h2>{props.data.label}</h2>
          </div>
          <div className="linkToRecepie"></div>
          <p></p>
        </div>
        <div className="imgAndFiltersContainer">
          <img src={props.data.image} className="choosenImg"></img>
        </div>
        <div className="buttons">
          <button
            onClick={(e) =>
              handleAddToFavorites(props.data.image, props.data.label, props.data)
            }
          >
            Add to favorites
          </button>
          <a href={props.data.url}>
            <button>Link to Recepie</button>
          </a>
        </div>
      </div>
      <div className="healthInfo">
        <div className="ingredients">
          <div className="test">
            <h2>Ingredients:</h2>

            {props.data.ingredients.map((element, index) => {
              return <tr key={index}>{element.text}</tr>;
            })}
          </div>
        </div>
        <div className="nutrition">
          <div className="test">
            <h2>Nutrition:</h2>

            <table>
              {Object.values(props.data.totalNutrients).map((key) => {
                return (
                  <tr>
                    <td>{key.label}</td>
                    <td>
                      {key.quantity.toFixed(2)} {key.unit}
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
}

export default ChoosenRecipe;
