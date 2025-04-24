const router = require("express").Router();
const MaritalStatusOption = require("../controllers/MaritalStatusOption.controller");
const {
    authenticate,
    authorizeRoles,
} = require("../middelware/auth.middelware");

// Only Super Admins can modify
router.post(
    "/add",
    authenticate,
    authorizeRoles("Super Admin"),
    MaritalStatusOption.create
);

router.put(
    "/update/:id",
    authenticate,
    authorizeRoles("Super Admin"),
    MaritalStatusOption.update
);

router.delete(
    "/delete/:id",
    authenticate,
    authorizeRoles("Super Admin"),
    MaritalStatusOption.remove
);

module.exports = router;
