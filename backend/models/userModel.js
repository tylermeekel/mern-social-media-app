const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

//Define User Schema
//TODO: Add bio
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

//Static signup method
userSchema.statics.signup = async function(username, password) {
    
    //Input validation
    //Check if username and password sent
    if(!username || !password){
        throw Error("Must fill in all fields.")
    }
    

    //Check for alphanumeric username
    if(!validator.isAlphanumeric(username, 'en-US', {
        ignore: "._"
    })) {
        throw Error("Username must either contain only alphanumerics (a-z, 0-9), underscores, or periods.")
    }

    //Check that username isn't too short or too long
    if(!validator.isLength(username, {
        min: 4,
        max: 20,
    })){
        throw Error("Username must be longer than 4 characters, and shorter than 20.")
    }

    //Check for strong password
    if(!validator.isStrongPassword(password)){
        throw Error("Password must be stronger! The password must be at least 8 characters long, and contain at least one uppercase letter, lowercase letter, number and symbol")
    }

    //Check if user already exists
    const exists = await this.findOne({ username });
    if(exists) {
        throw Error('This username is already in use.');
    }

    //Salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({ username, password: hashedPassword });
    return user;
}

//Login static method
userSchema.statics.login = async function(username, password) {
    if(!username || !password){ 
        throw Error("All fields must be filled.");
    }

    //Find user in DB
    const user = await this.findOne({ username });

    //Check that user actually exists in DB
    if(!user) {
        throw Error("Incorrect username or password.");
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error("Incorrect username or password.");
    }

    return user;

}


module.exports = mongoose.model('User', userSchema);