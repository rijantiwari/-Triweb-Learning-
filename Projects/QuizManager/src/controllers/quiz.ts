import { Request, Response, NextFunction } from "express";
import Quiz from "../models/quiz";

interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {} | [];
}
const createQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const created_by = req.userId;
    const name = req.body.name;
    const question_list = req.body.question_list;
    const answers = req.body.answers;
    const quiz = new Quiz({ name, question_list, answers, created_by });
    const result = await quiz.save();
    let resp: ReturnResponse = {
      status: "success",
      message: "Quiz Created Successfully",
      data: { quizId: result._id },
    };
    res.status(201).send(resp);
  } catch (error) {
    next(error);
  }
};
const getQuiz = (req: Request, res: Response) => {
  res.send(req.params.quizId);
};
const updateQuiz = (req: Request, res: Response) => {
  res.send(req.body);
};
const deleteQuiz = (req: Request, res: Response) => {
  res.send(req.params.quizId);
};
const publisheQuiz = (req: Request, res: Response) => {
  res.send(req.body);
};

export { createQuiz, getQuiz, updateQuiz, deleteQuiz, publisheQuiz };
