const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ["Admin", "Customer", "Super Admin"],
        required: true,
        trim: true,
        default: "Customer"
    },
    status: {
        type: String,
        enum: ["Active", "Blocked", "Pending"],
        required: true,
        trim: true,
        default: "Active"
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
})

const Auth = mongoose.model("auths", authSchema);
module.exports = Auth;