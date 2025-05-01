const scoreOptionService = require("../services/ScoreOption.service");

const getAllScoreOptions = async (req, res) => {
  try {
    const result = await scoreOptionService.findAll();
    res.status(200).json({ status: true, content: result });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};

const getScoreOptionByExamName = async (req, res) => {
  try {
    const result = await scoreOptionService.findByExamName(req.params.examName);
    if (!result) return res.status(404).json({ status: false, message: "Not found" });
    res.status(200).json({ status: true, content: result });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
}

const getScoreOptionById = async (req, res) => {
  try {
    const result = await scoreOptionService.findById(req.params.id);
    if (!result) return res.status(404).json({ status: false, message: "Not found" });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};

const getScoreOptionsByExamId = async (req, res) => {
  try {
    const result = await scoreOptionService.findByExamId(req.params.examId);
    if (!result) return res.status(404).json({ message: "Not found" });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};

const createScoreOption = async (req, res) => {
  try {
    const result = await scoreOptionService.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ status: false, message: "Invalid data", error: err.message });
  }
};

const updateScoreOption = async (req, res) => {
  try {
    const result = await scoreOptionService.update(req.params.id, req.body);
    if (!result) return res.status(404).json({ message: "Not found" });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
};

const deleteScoreOption = async (req, res) => {
  try {
    const result = await scoreOptionService.remove(req.params.id);
    if (!result) return res.status(404).json({ status: false, content: "Not found" });
    res.status(200).json({ status: true, content: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ status:false, content: "Deletion failed", error: err.message });
  }
};

module.exports = { createScoreOption, updateScoreOption, getAllScoreOptions, getScoreOptionByExamName, deleteScoreOption }