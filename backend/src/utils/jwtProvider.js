const jwt = require("jsonwebtoken");
const { jwtExpire, jwtSecret } = require("../config/env");

const generateToken = (userId) => {
    try {
        const token = jwt.sign({ userId }, jwtSecret, { expiresIn: jwtExpire });
        return token;
    } catch (error) {
        console.error("Error generating token:", error);
        return null;
    }
}

const getUserIdFromToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, jwtSecret);
        return decodedToken.userId;
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            console.error("Token has expired:", error.message);
        } else {
            console.error("Invalid token:", error.message);
        }
        throw new Error("Invalid or expired token.");
    }
}

module.exports = { generateToken, getUserIdFromToken };