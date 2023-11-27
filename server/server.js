const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const favorites = require('./favorites.js');
const blog = require('./blog.js');
const footer = require('./footer.js');
const login = require('./login.js')
const register = require('./register.js')
const profile = require('./profile.js')

app.use('/favorites', favorites);
app.use('/blog', blog);
app.use('/footer', footer)
app.use('/login', login)
app.use('/register', register)
app.use('/profile', profile)


app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', `${process.env.ADRESS}`);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


mongoose.connect(
  `mongodb+srv://foodapp:${process.env.PASSWORD_DB}@food.ygvyjzh.mongodb.net/test`
);


app.listen(3000, () => console.log('Server started on port 3000'));
