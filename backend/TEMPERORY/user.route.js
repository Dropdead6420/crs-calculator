const router = require("express").Router();
const userController = require("../controller/user.controller");
const { validateSignIn, validateSignUp } = require("../middleware/validateUser.middleware");
const { authenticate } = require("../middleware/auth.middleware");

router.post("/add", userController.add);
router.post("/signin", validateSignIn, userController.login);
router.post("/verify", authenticate, userController.verify);

module.exports = router;