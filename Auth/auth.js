const express = require('express');
const router = express.Router();
const {signup} = require('./controller')
const {validateSignup} = require('./validator')

router.post('/signup', validateSignup, signup)

module.exports = router