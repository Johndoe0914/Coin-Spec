const express = require('express');
const router = express.Router();

//GET api/users
//desc test route
//access Public
router.get('/', (req,res) => res.send('auth route'))

module.exports = router