const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"], 
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"], 
        trim: true
    },
    level: {
        type: String,
        required: [true, "Please enter your level!"], 
        trim: true
    },
    tel: {
        type: String,
        required: [true, "Please enter your number!"], 
        trim: true
    }
}, {
    timestamps: true    
})

module.exports = mongoose.model("Users", userSchema)