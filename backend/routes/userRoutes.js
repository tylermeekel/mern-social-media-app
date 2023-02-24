const express = require('express');
const router = express.Router();
const { loginUser, signupUser, getUsername } = require('../controllers/userController') 

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

//Get username route
router.get('/:id', getUsername)

module.exports = router