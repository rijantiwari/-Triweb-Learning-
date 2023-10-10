import express from "express";
import { registerUser, loginUser } from "../controllers/auth";

const router = express.Router();

router.post("/", registerUser);
// POST /auth/login

router.post("/login", loginUser);

export default router;
