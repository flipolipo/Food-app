const express = require('express');
const router = express.Router();
const cors = require('cors');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
router.use(cors({credentials:true,origin:'http://localhost:3001'}));
router.use(express.json());

router.post('/', async (req, res) => {
    const {username,password} = req.body;
    try{
      const userDoc = await User.create({
        username,
        password:bcrypt.hashSync(password,salt)
      });
      res.json(userDoc);
    } catch(e) {
      console.log(e);
      res.status(400).json(e);
    }
 });

module.exports = router;