import express from "express";

import {
  createQuiz,
  getQuiz,
  updateQuiz,
  deleteQuiz,
  publishQuiz,
} from "../controllers/quiz";
import { isAuthenticated } from "../middlewares/isAuth";
import { body } from "express-validator";

const router = express.Router();

// create
// POST/quiz./

router.post(
  "/",
  isAuthenticated,
  [
    body("name")
      .trim()
      .notEmpty()
      .isLength({ min: 4 })
      .withMessage("Please Enter a valid name minimum 4 charactor long"),
    body("question_list").custom((question_list) => {
      console.log(question_list);
    }),
  ],
  createQuiz
);

//GET /quiz/
router.get("/:quizId", isAuthenticated, getQuiz);

// PUT

router.put("/", isAuthenticated, updateQuiz);

// Delete
router.delete("/:quizId", isAuthenticated, deleteQuiz);
// Publish

router.patch("/publish", isAuthenticated, publishQuiz);
export default router;
