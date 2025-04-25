const mongoose = require('mongoose');

const examScoreSchema = new mongoose.Schema({
    examNameId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ExamName',
        required: true
    },
    clbLevel: {
        type: String,
        required: true
    },
    speaking: {
        type: Number,
        required: true
    },
    listening: {
        type: Number,
        required: true
    },
    reading: {
        type: Number,
        required: true
    },
    writing: {
        type: Number,
        required: true
    },
    pointsPerAbility: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('ExamScore', examScoreSchema);
