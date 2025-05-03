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
    languageScores: {
        speaking: {
            type: String,
            required: true
        },
        listening: {
            type: String,
            required: true
        },
        reading: {
            type: String,
            required: true
        },
        writing: {
            type: String,
            required: true
        }
    },
    fswp: {
        point: {
            type: Number,
            required: true,
            min: 0,
            max: 6
        }
    },
    crs: {
        withSpouse: {
            type: Number,
            required: true,
            min: 0,
            max: 32
        },
        withoutSpouse: {
            type: Number,
            required: true,
            min: 0,
            max: 34
        }
    },
    secondOfficialLanguage: {
        fswp: {
            point: {
                type: Number,
                required: true,
                min: 0,
                max: 4
            }
        },
        crs: {
            withSpouse: {
                type: Number,
                required: true,
                min: 0,
                max: 6
            },
            withoutSpouse: {
                type: Number,
                required: true,
                min: 0,
                max: 6
            }
        }
    } 
}, { timestamps: true });

module.exports = mongoose.model('ExamScore', examScoreSchema);
