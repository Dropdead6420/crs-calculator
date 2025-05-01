const ScoreOptions = require("../models/ScoreOptions.model");
const examName = require("../models/ExamName.model");

const findAll = async () => {
    return await ScoreOptions.find().populate("exam");
};

const findById = async (id) => {
    return await ScoreOptions.findById(id).populate("exam");
};

const findByExamId = async (examId) => {
    return await ScoreOptions.findOne({ exam: examId }).populate("exam");
};

const findByExamName = async (name) => {
    const isExamNameExist = await examName.findOne({ name });

    if (!isExamNameExist) {
        throw new Error("There is no Exam Detail found.");
    }

    return await ScoreOptions.findOne({ exam: isExamNameExist._id }).populate("exam");
};


const create = async (data) => {
    const isExamNameExist = await examName.findOne({ _id: data.exam });
    if (!isExamNameExist) {
        throw new Error("There is no Exam Detail found. ");
    }

    const isExistScore = await findByExamId(data.exam);
    if (isExistScore) {
        throw new Error("Already exist Exam Score for this exam");
    }

    const scoreOption = new ScoreOptions(data);
    return await scoreOption.save();
};

const update = async (id, data) => {
    return await ScoreOptions.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
};

const remove = async (id) => {
    return await ScoreOptions.findByIdAndDelete(id);
};

module.exports = { create, findByExamId, update, findAll, findByExamName, remove }