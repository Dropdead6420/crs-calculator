const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
    condition: [{
        type: String
    }],
    points: {
        type: Number,
        required: true,
    },
}, {_id: false});

const FactorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    criteria: {
        type: String,
        required: true,
    },
    options: [OptionSchema],
}, {_id : false});

const SkillTransferabilityFactorSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Education + Language', 'Education + Canadian Experience', 'Foreign Experience + Language', 'Foreign Experience + Canadian Experience' , 'Additional point French Language'],
        required: true,
    },
    factors: [FactorSchema],
}, { timestamps: true });

module.exports = mongoose.model('SkillTransferabilityFactor', SkillTransferabilityFactorSchema);
