import React, { useState, useEffect } from 'react';
import RecipeBlock from './RecipeFlip';
import Axios from 'axios';
import ChoosenRecipe from './ChoosenRecipe';
import NavItem from './NavItem';
import DropDownMenu from './DropDownMenu';
import './home.css'

const Home = ({ favoritesList, setfavoritesList }) => {
  const [clickedRecipe, setClickedRecipe] = useState(false);
  const [ingredients, setIngredients] = useState('');
  const [recipies, setRecipies] = useState([]);
  const [clickedRecipeData, setClickedRecipeData] = useState([]);
  const [filters, setFilters] = useState('');
  const [recipeUrl, setRecipeUrl] = useState(``);
  const [isMain, setIsMain] = useState(true)
  const [filterValue, setFilterValue] = useState('');

  const [filtered, setFiltered] = useState(false);
  function handleIngredients(event) {
    setIngredients(event.target.value);

  }
  useEffect(() => {
    setRecipeUrl(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}${filterValue ? `&health=${filterValue}` : ''}`
    );
  }, [ingredients, filterValue]);

  useEffect(() => {
    console.log(filterValue)
  }, [filterValue])
  async function handleSubmit(event) {
    event.preventDefault();
    setIsMain(false)
    const response = Axios.get(recipeUrl);

    const fetchedRecipies = await Promise.all((await response).data.hits);

    setRecipies(fetchedRecipies);
  }
  useEffect(() => {

  }, [recipies]);
  async function handleClick(e) {
    setFiltered(true);
    setFilters(e.target.value);

  }

  return (
    <div>
      {clickedRecipe ? (
        <ChoosenRecipe
          setClick={setClickedRecipe}
          data={clickedRecipeData}
          favoritesList={favoritesList}
          setfavoritesList={setfavoritesList}
        ></ChoosenRecipe>
      ) : (
        <div className="searchWithRecipies">

          <form className='formHome' action="/action_page.php" onSubmit={handleSubmit}>
          <div className="form__group field">
  <input onChange={handleIngredients} type="input" className="form__field" placeholder="Name" name="name" id='name' required />
  <label htmlFor="name" className="form__label">Ingredient</label>
</div>
            <button type="submit">
              Submit
              <i className="fa fa-search"></i>
            </button>
            <NavItem>
              <DropDownMenu handleClick={handleClick}></DropDownMenu>
              <DropDownMenu filter={setFilterValue}></DropDownMenu>
            </NavItem>
          </form>

          {isMain ? (<div className='imagesOnMain'>
            <img className='image1' width='250px' height='250px' src={process.env.PUBLIC_URL + '/hamburger.jpg'} />
            <img width='250px' height='250px' src={process.env.PUBLIC_URL + '/luigi.jpg'} />
            <img width='250px' height='250px' src={process.env.PUBLIC_URL + '/minecraft.jpg'} />
            <img width='250px' height='250px' src={process.env.PUBLIC_URL + '/pokemon.jpg'} />
            <img width='250px' height='250px' src={process.env.PUBLIC_URL + '/supermario.jpg'} />
            <img width='250px' height='250px' src={process.env.PUBLIC_URL + '/angrybirds.jpg'} />
            <div className='textOnMain'>
              <h1>Le torte di Barbara</h1>
            </div>
            <img width='250px' height='250px' src={process.env.PUBLIC_URL + '/angrybirds2.jpg'} />
            <img width='250px' height='250px' src={process.env.PUBLIC_URL + '/babcia.jpg'} />
            <img width='250px' height='250px' src={process.env.PUBLIC_URL + '/olaf.jpg'} />
            <img width='250px' height='250px' src={process.env.PUBLIC_URL + '/dinosaur.jpg'} />
            <img width='250px' height='250px' src={process.env.PUBLIC_URL + '/miao.jpg'} />
            <img width='250px' height='250px' src={process.env.PUBLIC_URL + '/pilka.jpg'} />
            <img width='250px' height='250px' src={process.env.PUBLIC_URL + '/star.jpg'} />

          </div>) : (<div className="recipies">
            {recipies.map((data, index) => (
              <RecipeBlock
                key={index}
                setData={setClickedRecipeData}
                img={data.recipe.image}
                name={data.recipe.label}
                data={data.recipe}
                setClick={setClickedRecipe}
                favoritesList={favoritesList}
                setfavoritesList={setfavoritesList}
              ></RecipeBlock>
            ))}
          </div>)}

        </div>
      )}
    </div>
  );
};
export default Home;
