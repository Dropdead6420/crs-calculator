const mongoose = require('mongoose');

const binaryOptionScore = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    option: {
        type: Boolean,
        required: true
    },
    maximumPoint: {
        type: Number,
        required: true
    },
    yourScore: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('BinaryOptionScore', binaryOptionScore);
