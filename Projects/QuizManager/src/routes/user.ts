import express from "express";
import { registerUser } from "../controllers/user";
const router = express.Router();

router.post("/", registerUser);

router.get("/:userId");
export default router;
