const express = require("express");
const app = express();
const calculatorRouter = require("./router/calculator");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("I'am Respnse");
});
// app.get("/add", (req, res) => {
//   let n1 = 3;
//   let n2 = 4;
//   let sum = n1 + n2;
//   res.send("Addition is " + sum);
// });

app.use("/calculator", calculatorRouter);
app.listen(3000);
