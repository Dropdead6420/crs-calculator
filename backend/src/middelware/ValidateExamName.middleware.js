const validateExamName = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            status: false,
            error: "Request body is required and cannot be empty.",
        });
    } else {
        const allowedKeys = ["name"];
        const keys = Object.keys(req.body);

        // Check for unexpected fields
        const invalidKeys = keys.filter((key) => !allowedKeys.includes(key));
        if (invalidKeys.length > 0) {
            return res.status(400).json({
                status: false,
                error: `Only 'name' is allowed in the request body. Invalid field(s): ${invalidKeys.join(
                    ", "
                )}`,
            });
        }
        
        if (
            !req.body.name ||
            typeof req.body.name !== "string" ||
            req.body.name.trim() === ""
        ) {
            return res.status(400).json({
                status: false,
                error: "The 'name' field is required and must be a non-empty string.",
            });
        }
    }

    next();
};

module.exports = { validateExamName };
