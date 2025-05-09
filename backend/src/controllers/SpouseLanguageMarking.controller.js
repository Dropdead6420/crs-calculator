const spouseLanguageMarking = require("../services/SpouseLanguageMarking.service");

const getAllLanguageMarks = async (req, res) => {
  try {
    const result = await spouseLanguageMarking.findAll();
    if (result.length === 0) {
        return res.status(200).json({ status: true, content: "There is no data available" });    
    }
    res.status(200).json({ status: true, content: result });
  } catch (err) {
    res.status(500).json({ status: false, message: "Server error." });
  }
};

const getSpouseLanguagePointViaCLBLevel = async (req, res) => {
  try {
    if (!req.body) {
        return res.status(404).json({status:false, content: "Request body is empty"});
    }
    
    const result = await spouseLanguageMarking.findByCLBLevel(req.body);
    if (!result) return res.status(404).json({ status: false, content: "Not found" });
    res.status(200).json({ status: true, content: result });
  } catch (err) {
    res.status(500).json({ status: false, content: "Server error." });
  }
}

const getSpouseLanguageMarkById = async (req, res) => {
  try {
    const result = await spouseLanguageMarking.findById(req.params.id);
    if (!result) return res.status(404).json({ status: false, content: "Not found" });
    res.status(200).json({status: true, content: result});
  } catch (err) {
    res.status(500).json({ message: "Server error.", status: false });
  }
};

const updateSpouseLanguageMarking = async (req, res) => {
  try {
    const result = await spouseLanguageMarking.update(req.params.id, req.body);
    if (!result) return res.status(404).json({status: false, content: "Not found" });
    res.status(200).json({status: true, content: result});
  } catch (err) {
    res.status(400).json({ status: false, message: "Update failed", error: err.message });
  }
};

module.exports = {  getAllLanguageMarks, updateSpouseLanguageMarking, getSpouseLanguageMarkById, getSpouseLanguagePointViaCLBLevel }