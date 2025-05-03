const ExamScore = require('../models/ExamScore.model');
const ExamName = require('../models/ExamName.model');

const createExamScore = async (data) => {
    const isExamNameExist = await ExamName.findById(data.examNameId);
    if (!isExamNameExist) {
        throw new Error("Exam name Id is not present");
    }

    await findScoreByExamAndCLB(data.examNameId, data.clbLevel);

    return await ExamScore.create(data);
};

const getAllExamScores = async () => {
    return await ExamScore.find().populate('examNameId');
};

const getExamScoreById = async (id) => {
    return await ExamScore.findById(id).populate('examNameId');
};

const findScoreByExamAndCLB = async (examNameId, clbLevel) => {
    const score = await ExamScore.findOne({ examNameId: examNameId, clbLevel: clbLevel }).populate("examNameId");
    if (score) {
        throw new Error("Data already exist so add another one Or update it for the manipulation");
    }

    return null;
}

const updateExamScore = async (id, data) => {
    if (data?.clbLevel) {
        const isCLBLevelPresent = await ExamScore.findOne({ clbLevel: data.clbLevel })
        if (isCLBLevelPresent) {
            throw new Error("This CLB Level already present so try with another CLB Level name");
        }
    }

    return await ExamScore.findByIdAndUpdate(id, data, { new: true });
};

const deleteExamScore = async (id) => {
    return await ExamScore.findByIdAndDelete(id);
};

const getPoints = async (req) => {
    const { examNameId, yourMarks, subject } = req.body;

    const isPresent = await ExamName.findById(examNameId);
    if (!isPresent) {
        throw new Error("Sorry, this Exam name ID is not present");
    }

    const allDataOfExamScore = await ExamScore.find(
        { examNameId },
        { [`languageScores.${subject}`]: 1, fswp: 1, crs: 1 }
    );

    if (!allDataOfExamScore || allDataOfExamScore.length === 0) {
        throw new Error("There is no relevant subject and points per ability");
    }

    // Convert yourMarks into ranges
    const parseRange = (value) => {
        if (typeof value !== "string") return [];
        if (value.includes("-")) {

            const [start, end] = value.split("-").map(Number);
            const values = [];
            for (let i = start; i <= end; i += 0.5) {
                values.push(i.toFixed(1));
            }
            return values;
        } else {
            return [parseFloat(value).toFixed(1)];
        }
    };

    const userValues = parseRange(yourMarks);

    // Find a matching document where the subject value includes any of the user-provided marks
    const matchedDoc = allDataOfExamScore.find(doc => {
        const dbValue = doc.languageScores[subject];
        const dbValues = parseRange(dbValue);
        return userValues.some(val => dbValues.includes(val));
    });

    if (!matchedDoc) {
        throw new Error("You are not eligible for Canada.ca");
    }

    return matchedDoc;
};


const getPointsd = async (req) => {
    const { examNameId, yourMarks, subject } = req.body;

    const isPresent = await ExamName.findById(examNameId)

    if (!isPresent) {
        throw new Error("Sorry this Exam name Id is not present");
    }

    // Convert examNameId to a number if it's a valid number
    // yourMarks = Number(yourMarks);

    // Fetch only the relevant subject and pointsPerAbility fields
    const allDataOfExamScore = await ExamScore.find(
        { examNameId: examNameId },
        { [subject]: 1, pointsPerAbility: 1 }
    );

    if (!allDataOfExamScore || allDataOfExamScore.length === 0) {
        throw new Error("There is no relevant subject and points per ability");
    }

    // Filter documents where the subject field matches the provided marks
    const matchedDoc = allDataOfExamScore.find(doc => doc[subject] === yourMarks);
    if (!matchedDoc) {
        throw new Error("You are not eligible for Canada.ca");
    }

    return matchedDoc;
};

module.exports = { getPoints, createExamScore, getAllExamScores, getExamScoreById, updateExamScore, deleteExamScore };