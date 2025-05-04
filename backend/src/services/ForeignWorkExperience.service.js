const ForeignWorkExperienceModel = require("../models/ForeignWorkExperience.model");

const getAllForeignWorkExperience = async () => {
  return await ForeignWorkExperienceModel.find({});
};

const createForeignWorkExperience = async (data) => {
  await isExperienceExist(data.experienceRange);

  const newDoc = new ForeignWorkExperienceModel(data);
  return await newDoc.save();
};

const updateForeignWorkExperience = async (id, data) => {
  if (data.experienceRange) {
    await isExperienceExist(data.experienceRange);
  }

  const updated = await ForeignWorkExperienceModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updated) throw new Error("Foreign work experience record not found");
  return updated;
};

const deleteForeignWorkExperience = async (id) => {
  const deleted = await ForeignWorkExperienceModel.findByIdAndDelete(id);
  if (!deleted) throw new Error("This Foreign Work Experience is not exist, So we are not able to delete this.");
  return deleted;
};

const isExperienceExist = async (experience) => {
  const isExperienceExist = await ForeignWorkExperienceModel.findOne({ experienceRange: experience });

  if (isExperienceExist) {
    throw new Error(
      "This Experience is already exist. You can update the value if you want."
    );
  }

  return null;
};

module.exports = {
  getAllForeignWorkExperience,
  createForeignWorkExperience,
  updateForeignWorkExperience,
  deleteForeignWorkExperience,
};
