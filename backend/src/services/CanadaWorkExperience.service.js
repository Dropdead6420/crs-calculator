const CanadaWorkExperienceModel = require("../models/CanadaWorkExperience.model");

const getAllCanadaWorkExperience = async () => {
  return await CanadaWorkExperienceModel.find({});
};

const createCanadaWorkExperience = async (data) => {
  await isExperienceExist(data.experienceRange);

  const newDoc = new CanadaWorkExperienceModel(data);
  return await newDoc.save();
};

const updateCanadaWorkExpereince = async (id, data) => {
  const updated = await CanadaWorkExperienceModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updated) throw new Error("Canada work experience record not found");
  return updated;
};

const deleteCanadaWorkExpereince = async (id) => {
  const deleted = await CanadaWorkExperienceModel.findByIdAndDelete(id);
  if (!deleted) throw new Error("This Canada Work Experience is not exist, So we are not able to delete this.");
  return deleted;
};

const isExperienceExist = async (experience) => {
  const isExperienceExist = await CanadaWorkExperienceModel.findOne({ experienceRange: experience });

  if (isExperienceExist) {
    throw new Error(
      "This Experience is already exist. You can update the value if you want."
    );
  }

  return null;
};

module.exports = {
  getAllCanadaWorkExperience,
  createCanadaWorkExperience,
  updateCanadaWorkExpereince,
  deleteCanadaWorkExpereince,
};
