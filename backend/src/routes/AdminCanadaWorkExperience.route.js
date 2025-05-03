const router = require("express").Router();
const CanadaWorkExperienceController = require("../controllers/CanadaWorkExperience.controller");
const {
  authenticate,
  authorizeRoles,
} = require("../middelware/auth.middelware");

router.post(
  "/add",
  authenticate,
  authorizeRoles("Super Admin"),
  CanadaWorkExperienceController.create
);

router.put(
  "/update/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  CanadaWorkExperienceController.update
);

router.delete(
  "/delete/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  CanadaWorkExperienceController.remove
);

module.exports = router;
