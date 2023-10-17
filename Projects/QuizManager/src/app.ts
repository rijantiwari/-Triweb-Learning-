import { Request, Response, NextFunction } from "express";
import express from "express";
import mongoose from "mongoose";

import userRoute from "./routes/user";
import quizRoute from "./routes/quiz";
import authRoute from "./routes/auth";
import ProjectError from "./helper/error";
interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {} | [];
}
const app = express();
const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());

declare global {
  namespace Express {
    interface Request {
      userId: String;
    }
  }
}
app.use("/user", userRoute);

app.use("/auth", authRoute);

// Redirect Quiz
app.use("/quiz", quizRoute);
app.use(
  (err: ProjectError, req: Request, res: Response, next: NextFunction) => {
    // email to corresponding email
    // logger for error
    let message: string;
    let statusCode: number;

    if (!!err.statusCode && err.statusCode < 500) {
      message = err.message;
      statusCode = err.statusCode;
    } else {
      message = "Something went wrong, Please try after sometimes";
      statusCode = 500;
    }
    let resp: ReturnResponse = { status: "error", message, data: {} };
    if (!!err.data) {
      resp.data = err.data;
    }
    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
  }
);
mongoose
  .connect(connectionString)
  .then((success) =>
    app.listen(process.env.PORT, () => {
      console.log("server connected");
    })
  )
  .catch((err) => console.log(err.message));
