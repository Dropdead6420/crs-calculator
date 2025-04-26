const validateTheInputs = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ status: false, content: 'Request body cannot be empty.' });
    }

    const { question, option, maximumPoint, yourScore } = req.body;

    if (yourScore !== undefined) {
        return res.status(400).json({ status: false, content: 'You are not permitted to set the "yourScore" field manually.' });
    }

    if (typeof question !== 'string' || question.trim().length === 0) {
        return res.status(400).json({ status: false, content: 'A valid "question" is required.' });
    }

    if (typeof option !== 'boolean') {
        return res.status(400).json({ status: false, content: '"option" must be a boolean value (true or false).' });
    }

    if (typeof maximumPoint !== 'number' || isNaN(maximumPoint)) {
        return res.status(400).json({ status: false, content: '"maximumPoint" must be a valid number.' });
    }

    // Set score based on the option
    req.body.yourScore = option ? maximumPoint : 0;

    next();
};

const validateUpdateData = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ status: false, content: 'Request body cannot be empty.' });
    }

    const { question, maximumPoint, yourScore, option } = req.body;

    if (yourScore !== undefined) {
        return res.status(400).json({ status: false, content: 'You are not permitted to set the "yourScore" field manually.' });
    }

    if (option !== undefined) {
        return res.status(400).send({status: false, content:"You are not permitted to set the 'option' field manually."});
    }

    if (question && (typeof question !== 'string' || question.trim().length === 0)) {
        return res.status(400).json({ status: false, content: 'A valid "question" is required.' });
    }

    if (maximumPoint && (typeof maximumPoint !== 'number' || isNaN(maximumPoint))) {
        return res.status(400).json({ status: false, content: '"maximumPoint" must be a valid number.' });
    }

    next();
};

module.exports = { validateTheInputs, validateUpdateData };
