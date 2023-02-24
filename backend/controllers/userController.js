const User = require('../models/userModel');

//Login User
const loginUser = async (req, res) => {
    res.json({msg: "Logged in user!"})
}

//Signup User
const signupUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.signup(username, password)

        res.status(200).json({ username, user })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = { loginUser, signupUser }