const router = require("express").Router();
const ForeignWorkExperienceController = require("../controllers/ForeignWorkExperience.controller");
const {
  authenticate,
  authorizeRoles,
} = require("../middelware/auth.middelware");

router.post(
  "/add",
  authenticate,
  authorizeRoles("Super Admin"),
  ForeignWorkExperienceController.create
);

router.put(
  "/update/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  ForeignWorkExperienceController.update
);

router.delete(
  "/delete/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  ForeignWorkExperienceController.remove
);

module.exports = router;
