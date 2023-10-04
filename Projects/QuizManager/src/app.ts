import express from "express";
import mongoose from "mongoose";

import userRoute from "./routes/user";

const app = express();
const connectionString =
  "mongodb+srv://rijantiwari:HelloWorld123@cluster0.ayiv5v1.mongodb.net/workshopdb?retryWrites=true&w=majority";

app.use(express.json());

app.use("/user", userRoute);

mongoose
  .connect(connectionString)
  .then((success) =>
    app.listen(3000, () => {
      console.log("server connected");
    })
  )
  .catch((err) => console.log(err.message));
