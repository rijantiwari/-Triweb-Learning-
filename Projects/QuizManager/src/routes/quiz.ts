import express from "express";

import {
  createQuiz,
  getQuiz,
  updateQuiz,
  deleteQuiz,
  publisheQuiz,
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

router.patch("/publish", isAuthenticated, publisheQuiz);
export default router;
