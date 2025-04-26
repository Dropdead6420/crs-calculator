// FSWP (67)


const BinaryOptionScoreModel = require('../models/BinaryOptionScore.model');

const createBinaryOptionScoreModel = async (data) => {
    // Check if the question already exists in the DB
    const existingRecords = await BinaryOptionScoreModel.find({ question: data.question });

    if (existingRecords.length === 0) {
        // No existing question — safe to insert
        return await BinaryOptionScoreModel.create(data);
    }

    if (existingRecords.length === 1) {
        const isOptionExists = await BinaryOptionScoreModel.findOne({
            question: data.question,
            option: data.option
        });

        if (isOptionExists) {
            throw new Error("A record with this question and option already exists. Please update the existing record instead of creating a new one.");
        }

        return await BinaryOptionScoreModel.create(data);
    }

    if (existingRecords.length === 2) {
        // Both options already exist for this question
        return "Both options already exist for this question. Please update the existing records instead.";
    }

    // More than two records with the same question — data inconsistency
    throw new Error("Multiple records found for this question. Please clean up duplicate data before proceeding.");
};


const getAllScores = async () => {
    return await BinaryOptionScoreModel.find();
};

const getByQuestion = async (question) => {
    const isQuestion = await BinaryOptionScoreModel.find({question});

    if (isQuestion.length == 0) {
        throw new Error ("Question is not present, So add first");
    }

    return isQuestion;
}

const getScoreById = async (id) => {
    const isScorePresent = await BinaryOptionScoreModel.findById(id);
    if (!isScorePresent) {
        throw new Error(`There is no information related to this id : ${id}`);
    }

    return isScorePresent;
};

const updateScore = async (id, data) => {
    // Same question should not be exist
    const dataFound = await getScoreById(id);

    if (data.question) {
        const existingQuestion = await BinaryOptionScoreModel.findOne({ 
            question: data.question, 
            _id: { $ne: id } // <- Important: exclude current record
        });
        if (existingQuestion) {
            throw new Error(`This question is already present`);
        }
    }

    if (data.option) {
        throw new Error("Not allow to update this");
    }

    if (data.maximumPoint) {
        // Update your score
        data.yourScore = dataFound.option ? data.maximumPoints : 0;
    }

    return await BinaryOptionScoreModel.findByIdAndUpdate(id, data, { new: true });
};


const deleteScore = async (id) => {
    return await BinaryOptionScoreModel.findByIdAndDelete(id);
};

module.exports = { createBinaryOptionScoreModel, getAllScores, getScoreById, updateScore, deleteScore, getByQuestion }
