const User = require("../src/models/user.model.js");
const jwtProvider = require("../src/utils/jwtProvider.js");
const bcrypt = require("bcrypt");

const createUser = async (userData) => {
    try {
        let { fullName, email, password, role } = userData;

        if (role && role === "Admin") {
            throw new Error("You are not allowed to set your role as Admin.");
        }

        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            throw new Error(`User already exists with this email: ${email}. Please try logging in.`);
        }

        const genSaltPassword = await bcrypt.genSalt(10);
        const encodedPassword = await bcrypt.hash(password, genSaltPassword);

        const user = await User.create({ fullName, email, password: encodedPassword, role: "Customer" });

        return user;
    } catch (error) {
        throw new Error(error.message || "Error creating user");
    }
}

const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId)
        
        if (!user) {
            throw new Error("User not found with id : ", userId);
        }

        return user;

    } catch (error) {
        throw new Error({ Message: "While finding user with ID got an error", Error: error.message });
    }
}

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });

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

module.exports = { createUser, findUserById, getUserByEmail, getUserProfileByToken, getAllUsers };