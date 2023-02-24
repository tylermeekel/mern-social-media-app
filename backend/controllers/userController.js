const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '1d' })
}

//Login User
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const user = await User.login(username, password)
        const user_id = user._id;
        const token = createToken(user_id)

        res.status(200).json({ username, user_id, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//Signup User
const signupUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.signup(username, password)
        const user_id = user._id
        const token = createToken(user_id)

        res.status(200).json({ username, user_id, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//Get username
const getUsername = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id);
        res.status(200).json({ username: user.username })
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser, getUsername }