const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true 
    },
    gender: {
        type: String,
        enum: ["male", "female", "transgender"],
        required: true,
        trim: true 
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model("users", userSchema);
module.exports = User;