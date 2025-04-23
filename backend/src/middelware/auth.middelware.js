const jwtProvider = require("../utils/jwtProvider.js");
const userService = require("../services/user.service.js");

const authenticate = async (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            error: "Authentication token missing",
            message: "Please log in again or provide a valid JWT in the request header."
        });
    }

    try {
        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await userService.findUserById(userId);

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied: You are not authorized" });
        }
        next();
    };
};

module.exports = { authenticate, authorizeRoles };