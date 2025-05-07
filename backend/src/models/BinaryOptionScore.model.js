const mongoose = require('mongoose');

const binaryOptionScore = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    points: {
        yes: {
            type: Number,
            required: true 
        },
        no: {
            type: Number,
            required: true,
            default: 0
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('BinaryOptionScore', binaryOptionScore);
