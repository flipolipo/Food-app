import React, { useEffect } from 'react';
import RecipeCard from './RecipeCard.js';
import { fetchData } from '../service/apiGetData.js';

function Recepie({ recipes, addingRecipes }) {
  useEffect(() => {
    fetchData('blog')
      .then((data) => {
        addingRecipes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          recipe={recipe}
          recipes={recipes}
          addingRecipes={addingRecipes}
        />
      ))}
    </>
  );
}

export default Recepie;
