const binaryOptionScoreService = require('../services/BinaryOptionScore.service');

const create = async (req, res) => {
    try {
        const entry = await binaryOptionScoreService.createBinaryOptionScoreModel(req.body);
        res.status(201).json({ status: true, content: entry });
    } catch (err) {
        res.status(500).json({ status: false, content: err.message });
    }
};

const getByQuestion = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({ status: false, content: "Request body is empty" });
    }

    if (req.body?.question) {
        try {
            const questionInfo = await binaryOptionScoreService.getByQuestion(req.body?.question);
            return res.status(200).json({ status: true, content: questionInfo });
        } catch (err) {
            res.status(500).json({ status: false, content: err.message });
        }
    } else {
        return res.status(400).json({status: false, content: "Question is not present in request body"});
    }
}

const getAll = async (req, res) => {
    try {
        const data = await binaryOptionScoreService.getAllScores();
        if (data.length == 0) {
            return res.status(200).send({ status: true, content: "There is no data" });
        }
        return res.status(200).json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const getById = async (req, res) => {
    try {
        const score = await binaryOptionScoreService.getScoreById(req.params.id);
        if (!score) return res.status(404).json({ status: false, content: 'Not found' });
        res.status(200).json({ status: true, content: score });
    } catch (err) {
        res.status(500).json({ status: false, content: err.message });
    }
};

const update = async (req, res) => {
    try {
        const updated = await binaryOptionScoreService.updateScore(req.params.id, req.body);
        if (!updated) return res.status(404).json({ success: false, message: 'Not found' });
        res.status(200).json({ success: true, data: updated });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

const remove = async (req, res) => {
    try {
        const deleted = await binaryOptionScoreService.deleteScore(req.params.id);
        if (!deleted) return res.status(404).json({ status: false, content: 'Not found' });
        res.status(200).json({ status: true, content: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ status: false, content: err.message });
    }
};

module.exports = { getAll, remove, update, getById, create, getByQuestion }
