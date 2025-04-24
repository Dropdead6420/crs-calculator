const router = require("express").Router();
const AgePointsController = require("../controllers/AgePoints.controller");
const {
  authenticate,
  authorizeRoles,
} = require("../middelware/auth.middelware");

router.post(
  "/add",
  authenticate,
  authorizeRoles("Super Admin"),
  AgePointsController.create
);

router.put(
  "/update/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  AgePointsController.update
);

router.delete(
  "/delete/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  AgePointsController.remove
);

module.exports = router;
