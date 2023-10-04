import express from "express";
import userRoute from "./routes/user";

const app = express();
app.use(express.json());

app.use("/user", userRoute);

app.listen(3000);
