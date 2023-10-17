import { Request, Response, NextFunction } from "express";
import Quiz from "../models/quiz";
const createQuiz = (req: Request, res: Response) => {
  const quiz = new Quiz(req.body);

  res.send(req.body);
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
