const mongoose = require('mongoose')
const { Schema, model } = mongoose

const favoriteSchema = new Schema({
    img: String,
    name: String,
    data: Object
})

const Favorite = model("Favorite", favoriteSchema)

module.exports = Favorite