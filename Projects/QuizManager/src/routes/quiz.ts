import express from "express";

import {
  createQuiz,
  getQuiz,
  updateQuiz,
  deleteQuiz,
  publishQuiz,
} from "../controllers/quiz";
import { isAuthenticated } from "../middlewares/isAuth";
const router = express.Router();

// create
// POST/quiz./

router.post("/", isAuthenticated, createQuiz);

//GET /quiz/
router.get("/:quizId", isAuthenticated, getQuiz);

// PUT

router.put("/", isAuthenticated, updateQuiz);

// Delete
router.delete("/:quizId", isAuthenticated, deleteQuiz);
// Publish

router.patch("/publish", isAuthenticated, publishQuiz);
export default router;
