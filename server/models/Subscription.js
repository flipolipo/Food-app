const mongoose = require('mongoose')
const { Schema, model } = mongoose

const subscriptionSchema = new Schema({

    email: String,

}
)

const Subscription = model("Subscription", subscriptionSchema)

module.exports = Subscription