const canadaEducationCRSService = require("../services/CanadaEducationCRS.service");

const getAll = async (req, res) => {
  try {
    const all = await canadaEducationCRSService.getAllEducationPoints();
    if (all.length === 0 ) {
        return res.status(200).json({status:true, content: "There is no content available"});    
    }

    return res.status(200).json({status:true, content: all});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getScoreViaEducationName = async (req, res) => {
    try {
        const all = await canadaEducationCRSService.getAllEducationPoints();
        if (all.length === 0 ) {
            return res.status(200).json({status:true, content: "There is no content available"});    
        }
  
        return res.status(200).json({status:true, content: all});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const create = async (req, res) => { 
  try {
    if (!req.body) {
        return res.status(400).send({status: false, content: "Enter some data in body"});
    }

    const data = req.body;
    const created = await canadaEducationCRSService.createEducationPoint(data);
    res.status(201).json({ status: true, content: created, message: "Education points created successfully" });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.body) {
      return res.status(400).send({status: false, message: "Enter some data in body"});
    }

    const updated = await canadaEducationCRSService.updateEducationPoint(id, req.body);
    res.status(200).json({ status: true, content: updated, message: "Education points updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await canadaEducationCRSService.deleteEducationPoint(id);
    res.status(200).json({ status:true, content: deleted, message: "Education points deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  getScoreViaEducationName,
  create,
  update,
  remove
};
