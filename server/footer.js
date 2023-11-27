const express = require('express');
const router = express.Router();
const cors = require('cors');
const Subscription = require('./models/Subscription.js');
router.use(cors());
router.use(express.json());

router.get('/', (req, res) => {
    Subscription.find()
        .then((allEmails) => {
            res.json(allEmails);
        })
        .catch((error) =>
            res.status(400).json({ success: false, error: error.message })
        );
});

router.post('/', (req, res) => {
    const email = req.body.email;
    const subscription = new Subscription({
        email
    });
    subscription
        .save()
        .then((email) => res.json(email))
        .catch((error) =>
            res.status(400).json({ success: false, error: error.message })
        );
});



module.exports = router;
