import express from "express";
// const userController = require("../controllers/user");

import { registerUser, updateUser } from "../controllers/user";

const router = express.Router();

router.post("/register", registerUser);
router.post("/update", updateUser);
export default router;
