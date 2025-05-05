const router = require("express").Router();
const NOCTeerJobOfferController = require("../controllers/NOCTeerJobOffer.controller");
const {
  authenticate,
  authorizeRoles,
} = require("../middelware/auth.middelware");

router.post(
  "/add",
  authenticate,
  authorizeRoles("Super Admin"),
  NOCTeerJobOfferController.create
);

router.put(
  "/update/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  NOCTeerJobOfferController.updateNOCTeer
);

router.delete(
  "/delete/:id",
  authenticate,
  authorizeRoles("Super Admin"),
  NOCTeerJobOfferController.removeNOCTeerJob
);

module.exports = router;
