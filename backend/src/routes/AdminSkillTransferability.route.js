const router = require("express").Router();
const SkillTransferability = require("../controllers/SkillTransferability.controller");
const { authenticate, authorizeRoles } = require("../middelware/auth.middelware");

// DELETE - By ID
router.delete('/:id', authenticate, authorizeRoles("Super Admin"), SkillTransferability.deleteById);

// PUT - Update by ID
router.put('/:id', authenticate, authorizeRoles("Super Admin"), SkillTransferability.updateById);

// POST - Create new factor
router.post('/', authenticate, authorizeRoles("Super Admin"), SkillTransferability.create);

module.exports = router;