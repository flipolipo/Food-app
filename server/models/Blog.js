const mongoose = require('mongoose')
const { Schema, model } = mongoose

const blogSchema = new Schema({

    nameOfMeal: String,
    text: String,
    picUrl: String,
    recipeUrl: String,
    whoAdded: String,
    date: String
}
)

const Blog = model("Blog", blogSchema)

module.exports = Blog