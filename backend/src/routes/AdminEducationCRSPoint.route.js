const router = require("express").Router();
const EducationCRSPointController = require("../controllers/EducationCRSPoint.controller");
const {
  authenticate,
  authorizeRoles,
} = require("../middelware/auth.middelware");

router.post(
  "/add",
  authenticate,
  authorizeRoles("Super Admin"),
  EducationCRSPointController.create
);

router.put(
  "/update/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  EducationCRSPointController.update
);

router.delete(
  "/delete/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  EducationCRSPointController.remove
);

module.exports = router;
