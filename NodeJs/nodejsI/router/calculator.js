const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculator");
router.post("/add", calculatorController.add);
router.post("/subtract", calculatorController.subtract);
router.post("/multiply", calculatorController.multiply);
router.post("/divide", calculatorController.divide);

module.exports = router;
