const express = require('express');
const router = express.Router();
const cors = require('cors');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';
const cookieParser = require('cookie-parser');
router.use(cors({credentials:true,origin:'http://localhost:3001'}));
router.use(express.json());
router.use(cookieParser());

router.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info) => {
      if (err) throw err;
      res.json(info);
    });
  });


module.exports = router;
