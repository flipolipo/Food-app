import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import Favorites from './components/Favorites';
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Travel from './components/Travel';
import AddTravelDestination from './components/AddTravelDestination';
function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                
                <Home
                  favoritesList={favorites}
                  setfavoritesList={setFavorites}
                />
                
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/favorites"
              element={
                <Favorites
                  setfavoritesList={setFavorites}
                  favoritesList={favorites}
                />
              }
            />
            <Route path="/travel" element={<Travel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addtraveldestinations" element={<AddTravelDestination />} />

          </Routes>
        </div>

        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
