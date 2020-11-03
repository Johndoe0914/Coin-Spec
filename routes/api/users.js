const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require("bcrypt");

const User = require("../../models/User");

//GET api/users
//desc test route
//access Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
] , async (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }

    const {name, email, password} = req.body;

    try {
        let user = await User.findOne({ email })

        if(user) {
            res.status(400).json({errors:[{ msg: 'User already exists'}] })
        }

        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })

        user = new User({
            name,
            email,
            avatar,
            password
        })

    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }

    console.log(req.body)
    res.send('user route')
})

module.exports = router