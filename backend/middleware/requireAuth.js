const jwt = require('jsonwebtoken');
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {

    //verify auth
    const { authorization } = req.headers;

    if(!authorization){
        return res.status(401).json({error: "Auth Token Required"});
    }

    let token = authorization.split(' ')[1];

    try {
        const {_id} = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({_id});
        req.user = user._id.toString()
        console.log(req.user);
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'Request is not authorized'});
    }

}

module.exports = requireAuth;