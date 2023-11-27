import React, { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Card, Wrapper } from './StylesFav';
import { fetchData } from '../service/apiGetData';
import { deleteData } from '../service/apiDeleteData';

const Favorites = ({ favoritesList, setfavoritesList }) => {
  useEffect(() => {
    fetchFav();
  }, []);

  function handleRemove(name) {
    deleteData('favorites', name)
      .then((data) => {
        setfavoritesList(
          favoritesList.filter((element) => element.name !== data.name)
        );
        fetchFav();
      })
      .catch((error) => console.log(error));
  }
  function fetchFav() {
    fetchData('favorites')
      .then((data) => {
        console.log(data);
        if (data !== favoritesList) {
          setfavoritesList(data);
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <Wrapper>
      <h1 style={{ textAlign: 'center', textShadow: '2px 2px 4px #000000' }}>
        My favorites
      </h1>
      <Splide
        aria-label="Favorites"
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}
      >
        {favoritesList.map((favorite, index) => (
          <SplideSlide key={index}>
            <Card>
              <img src={favorite.img} alt="image"></img>
              <h3
                style={{
                  textAlign: 'center',
                  textShadow: '2px 2px 6px #000000',
                }}
              >
                {favorite.name}
              </h3>

              <center>
                <h4>Ingredients:</h4>
              </center>

              {favorite.data.ingredientLines.map((element) => {
                return <li>{element}</li>;
              })}

              <a href={favorite.data.url}>
                <button>Link to recipe</button>
              </a>
              <button onClick={(e) => handleRemove(favorite.name)}>
                Remove
              </button>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

export default Favorites;
