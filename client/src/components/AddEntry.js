import React, { useState } from 'react';
import { addData } from '../service/apiPostData';
import './addentry.css'

function AddEntry({ addingRecipes, recipes, setAdding }) {
  const [nameOfMeal, setNameOfMeal] = useState('');
  const [text, setText] = useState('');
  const [picUrl, setPicUrl] = useState(null);
  const [recipeUrl, setRecipeUrl] = useState('');
  const [whoAdded, setWhoAdded] = useState('');
  function clearStates() {
    setNameOfMeal('');
    setText('');
    setPicUrl(null);
    setRecipeUrl('');
    setWhoAdded('');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setAdding(false)
    const newRecipe = {
      nameOfMeal,
      text,
      picUrl,
      recipeUrl,
      whoAdded,
    };

    addData('blog', newRecipe)
      .then((data) => {
        addingRecipes([...recipes, data]);
        clearStates();
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <span>Date:</span>
        <p>{new Date().toISOString().slice(0, 10)}</p>
        <span>Recipe:</span>
        <input
          className="inputText"
          type="text"
          value={nameOfMeal}
          onChange={(e) => setNameOfMeal(e.target.value)}
          required
        />
        <span>Description:</span>
        <input
          className="inputText"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <span>Picture url:</span>
        <input
          className="inputText"
          type="text"
          onChange={(e) => setPicUrl(e.target.value)}
          required
        />
        <span>Link to "How to make recipe":</span>
        <input
          className="inputText"
          type="text"
          value={recipeUrl}
          onChange={(e) => setRecipeUrl(e.target.value)}
          required
        />
        <span>Author:</span>
        <input
          className="inputText"
          type="text"
          value={whoAdded}
          onChange={(e) => setWhoAdded(e.target.value)}
          required
        />

        <button className="buttonAddRecipe" type="submit">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddEntry;
