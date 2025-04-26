const router = require('express').Router();
const binaryOptionScoreController = require('../controllers/BinaryOptionScore.controller');
const { authenticate, authorizeRoles } = require('../middelware/auth.middelware');
const { validateTheInputs, validateUpdateData } = require("../middelware/ValidateBinaryOptionScore.middelware");

router.post('/add', authenticate, authorizeRoles('Super Admin'), validateTheInputs, binaryOptionScoreController.create);
router.put('/update/:id', authenticate, authorizeRoles('Super Admin'), validateUpdateData, binaryOptionScoreController.update);
router.delete('/delete/:id', authenticate, authorizeRoles('Super Admin'),  binaryOptionScoreController.remove);

module.exports = router;