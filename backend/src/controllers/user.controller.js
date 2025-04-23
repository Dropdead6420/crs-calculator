const userService = require("../services/user.service");
const jwtProvider = require("../utils/jwtProvider");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        await cartService.createCart(user);
        const jwt = jwtProvider.generateToken(user._id);

        return res.status(201).send({ jwt, message: "Register success" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userService.getUserByEmail(email);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ error: "Invalid password", message: "Try another password for login" });
        }

        const jwt = jwtProvider.generateToken(user._id);

        return res.status(200).send({ jwt, message: "Login successful" });
    } catch (error) {
        console.error("Error during login: ", error.message);
        return res.status(500).send({ message: "An error occurred during login", error: error.message });
    }
};

const verify = async (req,res) => {
    return res.status(200).send({ valid: true })
}

module.exports = { login, register, verify };

module.exports = {
    addUsers,
    deleteUser,
    editUser,
    updateUser
}