import express from "express";
import { getUser, updateUser } from "../controllers/user";

const router = express.Router();

// user should be authenticate and authorized
router.get("/:userId", getUser);
router.put("/", updateUser);
export default router;
