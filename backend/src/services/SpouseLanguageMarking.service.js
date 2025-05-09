const spouseLanguageMarking = require("../models/SpouseLanguageMarking.model");

const findAll = async () => {
    return await spouseLanguageMarking.find();
};

const findById = async (id) => {
    return await spouseLanguageMarking.findById(id);
};

const findByCLBLevel = async (data) => {
    const { clbLevel } = data;

    const record = await spouseLanguageMarking.findOne();
    
    if (!record) {
        throw new Error("There is no Exam Detail found.");
    }

    // Extract numeric CLB level (e.g., "CLB 5" → 5)
    const incomingCLB = parseInt(clbLevel.replace(/[^\d]/g, ""), 10);
    const existingCLB = parseInt(record.clbLevel.replace(/[^\d]/g, ""), 10);

    const points = record.points;
    if (!Array.isArray(points) || points.length === 0) {
        throw new Error("No points available in the document.");
    }

    const resultPoint = incomingCLB < existingCLB
        ? Math.min(...points)
        : Math.max(...points);

    return {
        point: resultPoint,
    };
};


const update = async (id, data) => {
    return await spouseLanguageMarking.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
};

module.exports = { findById, findByCLBLevel, update, findAll }