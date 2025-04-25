const ExamName = require("../models/ExamName.model");

const createExam = async (data) => {
  await getExamByName (data.name);

  return await ExamName.create(data);
};

const getAllExams = async () => {

  return await ExamName.find();
};

const getExamById = async (id) => {
  return await ExamName.findById(id);
};

const getExamByName = async (examName) => {
  const exam = await ExamName.findOne({name: examName});
  if (exam) {
    throw new Error("An exam with this name already exists. Please use a different name or edit the existing exam.");
  }

  return null;
};

const updateExam = async (id, data) => {
  await getExamByName(data.name);

  return await ExamName.findByIdAndUpdate(id, data, { new: true });
};

const deleteExam = async (id) => {
  
  // Add here some login If CLB Marks present than do not able to remove the exam name

  return await ExamName.findByIdAndDelete(id);
};

module.exports = { getAllExams, createExam, updateExam, deleteExam, getExamById };
