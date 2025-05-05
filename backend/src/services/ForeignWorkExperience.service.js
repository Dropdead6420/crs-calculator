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

const getScoreViaInfo = async (data) => {
  const { canadianWork, experienceRange, clb } = data;

  // Get the experience range details
  const yourExperienceRange = await ForeignWorkExperienceModel.findOne({ experienceRange: experienceRange });
  if (!yourExperienceRange) {
    return 0;
  }

  // Extract a CLB number from the input `clb` string
  const clbScore = extractNumber(clb);
  if (clbScore === null) {
    return 0;
  }

  // Extract CLB values from DB
  const experienceCLB = yourExperienceRange.clb.map(extractNumber).filter(n => n !== null);

  // Determine CRS value based on CLB
  let clbCRS = 0;
  if (clbScore >= 9) {
    clbCRS = Math.max(yourExperienceRange.crs[1], yourExperienceRange.crs[0]) || 0;
  } else if (clbScore === 7 || clbScore === 8) {
    clbCRS = Math.min(yourExperienceRange.crs[0], yourExperienceRange.crs[1]) || 0;
  }

  // Process Canadian Work Experience
  let canadianWorkScore = 0;
  if (yourExperienceRange.canadianWork?.length && canadianWork?.length) {
    for (const cw of canadianWork) {
      const cwNumber = extractNumber(cw);
      if (cwNumber !== null) {
        if (cwNumber > 1) {
          canadianWorkScore = Math.max(yourExperienceRange.crs[1], yourExperienceRange.crs[0]) || 0;
        } else {
          canadianWorkScore = Math.min(yourExperienceRange.crs[0], yourExperienceRange.crs[1]) || 0;
        }
      }
    }
  }

  const finalScore = Math.max(clbCRS, canadianWorkScore);
  return {crs: finalScore, fswp: yourExperienceRange.fswp};
};

// Helper function to extract first number from a string
const extractNumber = (str) => {
  const match = str.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
};

module.exports = {
  getScoreViaInfo,
  getAllForeignWorkExperience,
  createForeignWorkExperience,
  updateForeignWorkExperience,
  deleteForeignWorkExperience,
};
