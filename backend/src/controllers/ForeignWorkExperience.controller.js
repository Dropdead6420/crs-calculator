const foreignWorkExperienceService = require("../services/ForeignWorkExperience.service");

const getAll = async (req, res) => {
  try {
    const all = await foreignWorkExperienceService.getAllForeignWorkExperience();
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
        const all = await foreignWorkExperienceService.getAllCanadaWorkExperience();
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
    const created = await foreignWorkExperienceService.createForeignWorkExperience(data);
    res.status(201).json({ status: true, content: created, message: "Foreign work experience added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.body) {
      return res.status(400).send({status: false, message: "Enter some data in body"});
    }

    const updated = await foreignWorkExperienceService.updateForeignWorkExperience(id, req.body);
    res.status(200).json({ status: true, content: updated, message: "Foreign work experience updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await foreignWorkExperienceService.deleteForeignWorkExperience(id);
    res.status(200).json({ status:true, content: deleted, message: "Foreign work experience deleted successfully" });
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
