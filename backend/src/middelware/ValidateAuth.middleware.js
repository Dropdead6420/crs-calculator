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

const validateAdmin = (req, res, next) => {
    if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({ message: "Invalid or missing request body", status: false });
    }
    
    const { fullName, phone, email, password, role, status } = req.body;

    if (fullName !== undefined && fullName.length < 3) {
        return res.status(400).json({ message: "Full name must be at least 3 characters", status: false });
    }

    if (email !== undefined) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format", status: false });
        }
    }

    if (password !== undefined && password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters", status: false });
    }

    if (phone !== undefined && phone.length < 10) {
        return res.status(400).json({ message: "Phone number must be at least 10 characters", status: false });
    }

    if (role !== undefined && role !== "Admin" && role !== "Super Admin") {
        return res.status(400).json({ message: "Role must be either 'Admin' or 'Super Admin'", status: false });
    }

    if (status !== undefined && !["Active", "Pending", "Blocked"].includes(status)) {
        return res.status(400).json({ message: "Status must be 'Active', 'Pending', or 'Blocked'", status: false });
    }

    next();
};


// For Update Admin
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
    validateAdmin
};