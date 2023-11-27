import React, { useState } from 'react';
import Recepie from './Recepie.js';
import AddEntry from './AddEntry.js';

function Blog() {
  const [recipes, setRecipes] = useState([]);
  const [adding, setAdding] = useState(false)

  return (
    <>
      <Recepie recipes={recipes} addingRecipes={setRecipes} />
      {adding ? <AddEntry setAdding={setAdding} recipes={recipes} addingRecipes={setRecipes} /> : <center><p></p><button className='' onClick={() => setAdding(true)}>Add new blog entry</button></center>}

    </>
  );
}

export default Blog;
