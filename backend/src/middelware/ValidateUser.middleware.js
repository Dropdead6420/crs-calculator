 // For Sign Up
const validateSignUp = (req, res, next) => {
    const { fullName, phone, email, country, password, role } = req.body;

    if (!fullName || !email || !password || !phone || !country) {
        return res.status(400).json({ message: "Full name, email, phone, country and password are required", status: false });
    }

    if (fullName.length < 3) {
        return res.status(400).json({ message: "Full name must be at least 3 characters", status: false });
    }
 
    if (!email.includes("@") || !email.includes(".")) {
        return res.status(400).json({ message: "Invalid email format", status: false });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters", status: false });
    }

    if (phone.length < 10) {
        return res.status(400).json({ message: "Phone number must be at least 10 characters", status: false });
    }

    if (role && role !== "Admin" && role !== "Super Admin") {
        return res.status(400).json({ message: "Role must be Admin and Super Admin", status: false });
    }

    next();
};

// For Sign In
const validateSignIn = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required", status: false });
    }

    if (!email.includes("@") || !email.includes(".")) {
        return res.status(400).json({ message: "Invalid email format", status: false });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters", status: false });
    }

    next();
};

module.exports = {
    validateSignUp,
    validateSignIn,
};