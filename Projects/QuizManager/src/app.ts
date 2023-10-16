import { Request, Response, NextFunction } from "express";
import express from "express";
import mongoose from "mongoose";

import userRoute from "./routes/user";
import authRoute from "./routes/auth";

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

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // email to corresponding email
  // logger for error
  console.log(err);
  res.send("Something went wrong, Please try after sometimes");
});
mongoose
  .connect(connectionString)
  .then((success) =>
    app.listen(process.env.PORT, () => {
      console.log("server connected");
    })
  )
  .catch((err) => console.log(err.message));
