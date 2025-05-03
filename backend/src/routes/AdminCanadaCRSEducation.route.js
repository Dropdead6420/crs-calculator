const router = require("express").Router();
const CanadaCRSEducationController = require("../controllers/CanadaCRSEducation.controller");
const {
  authenticate,
  authorizeRoles,
} = require("../middelware/auth.middelware");

router.post(
  "/add",
  authenticate,
  authorizeRoles("Super Admin"),
  CanadaCRSEducationController.create
);

router.put(
  "/update/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  CanadaCRSEducationController.update
);

router.delete(
  "/delete/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  CanadaCRSEducationController.remove
);

module.exports = router;
