const router = require("express").Router();
const AuthController = require("../controllers/Auth.controller");
const { validateSignIn, validateSignUp } = require("../middelware/ValidateUser.middleware");
const { authenticate } = require("../middelware/auth.middelware");

router.post("/login", validateSignIn, AuthController.login);
router.post("/register", validateSignUp, AuthController.register);
router.post("/verify", authenticate, AuthController.verify);

module.exports = router;