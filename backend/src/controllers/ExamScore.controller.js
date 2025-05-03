const examScoreService = require('../services/ExamScore.service');
const mongoose = require('mongoose');

const createExamScore = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ status: false, content: 'Request body is required and cannot be empty.' });
        }

        const { examNameId, clbLevel, speaking, listening, reading, writing, pointsPerAbility } = req.body;

        if (!mongoose.Types.ObjectId.isValid(examNameId)) {
            return res.status(400).json({ status: false, content: 'Invalid Exam name Id' });
        }

        // const fields = { speaking, listening, reading, writing, pointsPerAbility };
        // for (const [key, value] of Object.entries(fields)) {
        //     if (typeof value !== 'number') {
        //         return res.status(400).json({ status: false, content: `${key} must be a number` });
        //     }
        // }

        const score = await examScoreService.createExamScore(req.body);
        res.status(201).json({ status: true, content: score });
    } catch (err) {
        res.status(500).json({ status: false, content: err.message });
    }
};

const getAllExamScores = async (req, res) => {
    try {
        const scores = await examScoreService.getAllExamScores();
        if (scores.length < 0) {
            return res.status(200).json({ status: true, content: "There is no data available" })
        }

        res.status(200).json({ status: true, content: scores });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
};

const getExamScoreById = async (req, res) => {
    try {
        const score = await examScoreService.getExamScoreById(req.params.id);
        if (!score) return res.status(404).json({ status: false, message: 'Exam score not found' });
        res.status(200).json({ status: true, data: score });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
};

const getPoints = async (req, res) => {
    try {
        const score = await examScoreService.getPoints(req)

        if (!score) {
            return res.status(404).json({ status: false, message: 'You are not eligible' });
        }

        return res.status(200).json({ status: true, content: score });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, message: err.message || 'Internal Server Error' });
    }
};

const updateExamScore = async (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({ status: false, content: "Id is not present" });
    }

    if (!req.body) {
        return res.status(400).json({ status: false, content: "Request body is empty so insert first" });
    }

    try {
        const updated = await examScoreService.updateExamScore(req.params.id, req.body);
        if (!updated) return res.status(404).json({ status: false, message: 'Exam score not found' });
        res.status(200).json({ status: true, data: updated });
    } catch (err) {
        res.status(400).json({ status: false, message: err.message });
    }
};

const deleteExamScore = async (req, res) => {
    try {
        const deleted = await examScoreService.deleteExamScore(req.params.id);
        if (!deleted) return res.status(404).json({ status: false, content: 'Exam score not found' });
        res.status(200).json({ status: true, content: 'Deleted statusfully' });
    } catch (err) {
        res.status(500).json({ status: false, content: err.message });
    }
};

module.exports = { getPoints, createExamScore, updateExamScore, deleteExamScore, getAllExamScores, getExamScoreById }