import express from "express";
import {
  registerUser,
  getUser,
  updateUser,
  loginUser,
} from "../controllers/user";

const router = express.Router();

router.post("/", registerUser);
// POST /user/login

router.post("/login", loginUser);
router.get("/:userId", getUser);
router.put("/", updateUser);
export default router;
