const examNameService = require('../services/ExamName.service');

const createExam = async (req, res) => {
    try {
        const exam = await examNameService.createExam(req.body);
        res.status(201).json({ status: true, data: exam });
    } catch (err) {
        res.status(400).json({ status: false, message: err.message });
    }
};

const getAllExams = async (req, res) => {
    try {
        const exams = await examNameService.getAllExams();
        if (exams.length == 0) {
            return res.status(200).json({ status: true, content: "Exam name is not present, so add first" });
        }

        return res.status(200).json({ status: true, content: exams });
    } catch (err) {
        return res.status(500).json({ status: false, message: err.message });
    }
};

const getExamById = async (req, res) => {
    try {
        const exam = await examNameService.getExamById(req.params.id);
        if (!exam) return res.status(404).json({ status: false, message: 'Exam not found' });
        res.status(200).json({ status: true, data: exam });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
};

const updateExam = async (req, res) => {
    try {
        const exam = await examNameService.updateExam(req.params.id, req.body);
        if (!exam) return res.status(404).json({ status: false, message: 'Exam not found' });
        res.status(200).json({ status: true, data: exam });
    } catch (err) {
        res.status(400).json({ status: false, message: err.message });
    }
};

const deleteExam = async (req, res) => {
    try {
        const exam = await examNameService.deleteExam(req.params.id);
        if (!exam) return res.status(404).json({ status: false, content: 'Exam not found' });
        res.status(200).json({ status: true, content: 'Exam deleted statusfully' });
    } catch (err) {
        res.status(500).json({ status: false, content: err.message });
    }
};

module.exports = { getAllExams, createExam, updateExam, deleteExam, getExamById }