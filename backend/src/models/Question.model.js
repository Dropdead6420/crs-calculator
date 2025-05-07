// models/question.model.js
const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
    label: { type: String, required: true },
    value: { type: String, required: true },
    crsPoints: {
        withSpouse: { type: Number, default: 0 },
        withoutSpouse: { type: Number, default: 0 }
    },
    fswpPoints: { type: Number, default: 0 },
    nextQuestionId: { type: String },
    secondOfficialLanguage: {
        crs: {
            withSpouse: { type: Number, default: 0 },
            withoutSpouse: { type: Number, default: 0 }
        },
        fswp: {
            point: { type: Number, default: 0 }
        }
    }
});

const QuestionSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    type: {
        type: String,
        enum: ['binary', 'multi', 'external-api', 'info'],
        required: true
    },
    text: { type: String, required: true },
    options: [OptionSchema],
    apiEndpoint: { type: String }, // For external-api type
    languageScores: {
        speaking: String,
        listening: String,
        reading: String,
        writing: String
    },
    clbLevel: { type: String },
    examNameId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ExamName'
    },
    crs: {
        withSpouse: { type: Number, default: 0 },
        withoutSpouse: { type: Number, default: 0 }
    },
    fswp: {
        point: { type: Number, default: 0 }
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Question', QuestionSchema);