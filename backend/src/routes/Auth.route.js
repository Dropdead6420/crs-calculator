const router = require("express").Router();
const AuthController = require("../controllers/Auth.controller");
const {
  validateSignIn,
  validateSignUp,
  validateAdmin,
} = require("../middelware/ValidateAuth.middleware");
const {
  authenticate,
  authorizeRoles,
} = require("../middelware/auth.middelware");

router.post("/login", validateSignIn, AuthController.login);
router.post("/register", validateSignUp, AuthController.register);
router.put(
  "/update/:id",
  validateAdmin,
  authenticate,
  authorizeRoles("Super Admin"),
  AuthController.update
);
router.post("/verify", authenticate, AuthController.verify);

module.exports = router;
