const express = require('express');
const router = express.Router();
const Favorite = require('./models/Favorites.js');
const cors = require('cors');
router.use(cors());
router.use(express.json());

router.get('/', (req, res) => {
  Favorite.find()
    .then((favorites) => {
      res.json(favorites);
    })
    .catch((error) =>
      res.status(400).json({ success: false, error: error.message })
    );
});

router.post('/', (req, res) => {
  const img = req.body.img;
  const name = req.body.name;
  const data = req.body.data
  const favorite = new Favorite({
    img,
    name,
    data
  });
  favorite
    .save()
    .then((favorite) => res.json(favorite))
    .catch((error) =>
      res.status(400).json({ success: false, error: error.message })
    );
});

router.delete('/:name', (req, res) => {
  const name = req.params.name;
  Favorite.findOneAndDelete({ name: name })
    .then((delectedFavorite) => res.json(delectedFavorite))
    .catch((error) =>
      res.status(400).json({ success: false, error: error.message })
    );
});

module.exports = router;
