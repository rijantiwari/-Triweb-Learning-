const express = require("express");
const app = express();
const userRoute = require("./router/user");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("I am working");
});

app.use("/user", userRoute);
app.listen(3000);
