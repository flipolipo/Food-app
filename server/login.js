const express = require('express');
const router = express.Router();
const cors = require('cors');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';
router.use(cors({credentials:true,origin:'http://localhost:3001'}));
router.use(express.json());

router.post('/', async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // logged in
      jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json('ok');
      });
    } else {
      res.status(400).json('wrong credentials');
    }
  });


module.exports = router;