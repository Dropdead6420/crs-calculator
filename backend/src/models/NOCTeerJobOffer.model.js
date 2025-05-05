const mongoose = require("mongoose");

const NOCTeerJobOfferSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim:true 
    },
    fswp: {
        type: Number,
        min: 0,
        max: 10,
        default: 10,
        required: true 
    },
    crs: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("NOCTeerJobOffer", NOCTeerJobOfferSchema);