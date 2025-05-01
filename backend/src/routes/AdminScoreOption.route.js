const express = require("express");
const router = express.Router();
const scoreOptionController = require("../controllers/scoreOptions.controller");
const { authenticate, authorizeRoles } = require("../middelware/auth.middelware");

router.post("/add", authenticate, authorizeRoles("Super Admin"), scoreOptionController.createScoreOption);
router.put("/update/:id", authenticate, authorizeRoles("Super Admin"), scoreOptionController.updateScoreOption);
router.delete("/delete/:id", authenticate, authorizeRoles("Super Admin"), scoreOptionController.deleteScoreOption);

module.exports = router;
