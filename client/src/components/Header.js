import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  useEffect(() => {
    fetch('http://localhost:3000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json()
      });
    }, []);
  
  return (
    <div className="header">
      <div className='part1'>
        <img
          className="logo"
          src="https://scontent-waw1-1.xx.fbcdn.net/v/t31.18172-8/13701028_979972312118849_8585669328246169471_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zD8ZHzEG_NwAX9JWq5h&_nc_ht=scontent-waw1-1.xx&oh=00_AfAjpcGaamk2GBdS_jskOJw2DNLAAv3J3iHcABCQf43Hgg&oe=64687FC8"
        ></img>
        <Link to="/" className="headerButton">
          Home
        </Link>
        <Link to="/blog" className="headerButton">
          Blog
        </Link>
        <Link to="/favorites" className="headerButton">
          Favourites
        </Link>
        <Link to="/travel" className="headerButton">
          Travels
        </Link>
      </div>
      <div className='part2'>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Header;
