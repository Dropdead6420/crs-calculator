const Auth = require("../models/Auth.model.js");
const jwtProvider = require("../utils/jwtProvider.js");
const bcrypt = require("bcrypt");

const createUser = async (userData) => {
    try {
        let { fullName, email, country, phone, password, role } = userData;

        if (role && role !== "Admin") {
            throw new Error(`You are not allowed to set your role as ${role}.`);
        }

        const isAuthExist = await Auth.findOne({ email });
        if (isAuthExist) {
            throw new Error(`User already exists with this email: ${email}. Please try logging in.`);
        }

        const genSaltPassword = await bcrypt.genSalt(10);
        const encodedPassword = await bcrypt.hash(password, genSaltPassword);

        const auth = await Auth.create({ fullName, country , phone, email, password: encodedPassword, role: "Admin", status:"Pending" });

        return auth;
    } catch (error) {
        throw new Error(error.message || "Error creating user");
    }
}

const updateAdmin = async (userId, userData) => {
    try {
        await findUserById(userId);  

        let updateFields = {};
        
        let { fullName, email, country, phone, password, role, status } = userData;

        if (fullName) {
            updateFields.fullName = fullName;
        }

        if (email) {
            const isEmailExist = await Auth.findOne({email});
            if (isEmailExist) {
                throw new Error (`Email is already in use : ${email}`);
            }
            updateFields.email = email;
        }

        if (country) {
            updateFields.country = country;
        }

        if (phone) {
            const isPhoneExist = await Auth.findOne({phone});
            if (isPhoneExist) {
                throw new Error (`Phone number is already in use : ${phone}`);
            }
            updateFields.phone = phone;
        }

        if (password) {
            const genSaltPassword = await bcrypt.genSalt(10);
            updateFields.password = await bcrypt.hash(password, genSaltPassword);
        }

        if (role) {
            throw new Error(`Not allowed to set role`);
        }

        if (status) {
            updateFields.status = status;
        }

        const updatedUser = await Auth.findByIdAndUpdate(userId, updateFields, { new: true });

        return updatedUser;
    } catch (error) {
        throw new Error(error.message || "Error updating user");
    }
}

const findUserById = async (id) => {
    try {
        const user = await Auth.findById(id);
        if (!user) {
            throw new Error(`User not found with id: ${user?._id}`);
        }
        return user;
    } catch (error) {
        // Include original error message for better debugging
        throw new Error(`Error finding user by ID: ${error.message}`);
    }
};


const getUserByEmail = async (email) => {
    try {
        const user = await Auth.findOne({ email });

        if (!user) {
            throw new Error(`User not found with email: ${email}. Please sign up before logging in.`);
        }

        return user;
    } catch (error) {
        throw new Error(`Error while finding user by email: ${error.message}`);
    }
};


const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await findUserById(userId);

        return user;

    } catch (error) {
        throw new Error({ Message: "While fetching user profile with ID got an error", Error: error.message });
    }
}

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;

    } catch (error) {
        throw new Error({ Message: "While fetching users data got an error", Error: error.message });
    }
}

module.exports = { createUser, findUserById, getUserByEmail, getUserProfileByToken, getAllUsers, updateAdmin };