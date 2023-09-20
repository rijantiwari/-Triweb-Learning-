const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
router.post("/register", userController.registration);
router.post("/get", userController.get);
router.post("/update", userController.update);
router.post("/delete", userController.delete);

module.exports = router;
