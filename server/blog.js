const express = require('express');
const router = express.Router();
const cors = require('cors');
const Blog = require('./models/Blog.js');
router.use(cors());
router.use(express.json());


router.get('/', (req, res) => {
    Blog.find()
        .then((entries) => {
            console.log(entries);
            res.json(entries);
        })
        .catch((error) =>
            res.status(400).json({ success: false, error: error.message })
        );
});

router.post('/', (req, res) => {

    const entry = new Blog({
        nameOfMeal: req.body.nameOfMeal,
        text: req.body.text,
        picUrl: req.body.picUrl,
        recipeUrl: req.body.recipeUrl,
        whoAdded: req.body.whoAdded,
        date: new Date().toISOString().slice(0, 10)
    });
    entry
        .save()
        .then((entry) => res.json(entry))
        .catch((error) =>
            res.status(400).json({ success: false, error: error.message })
        );
});

router.delete('/:nameOfMeal', (req, res) => {
    const name = req.params.nameOfMeal;
    Blog.deleteOne({ nameOfMeal: name })
        .then((deletedEntry) => res.json(deletedEntry))
        .catch((error) =>
            res.status(400).json({ success: false, error: error.message })
        );
});

router.put('/:nameOfMeal', (req, res) => {
    const name = req.params.nameOfMeal;
    const updates = {
        nameOfMeal: req.body.nameOfMeal,
        text: req.body.text,
        picUrl: req.body.picUrl,
        recipeUrl: req.body.recipeUrl,
        whoAdded: req.body.whoAdded,
    };

    Blog.findOneAndUpdate({ nameOfMeal: name }, updates, { new: true })
        .then((updatedEntry) => res.json(updatedEntry))
        .catch((error) =>
            res.status(400).json({ success: false, error: error.message })
        );
});

module.exports = router;