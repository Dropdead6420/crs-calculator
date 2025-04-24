const router = require("express").Router();
const EducationPointsController = require("../controllers/EducationPoints.controller");
const {
  authenticate,
  authorizeRoles,
} = require("../middelware/auth.middelware");

router.post(
  "/add",
  authenticate,
  authorizeRoles("Super Admin"),
  EducationPointsController.create
);

router.put(
  "/update/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  EducationPointsController.update
);

router.delete(
  "/delete/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  EducationPointsController.remove
);

module.exports = router;
