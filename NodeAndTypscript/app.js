const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi From Server ");
});

app.get("/hello", (req, res) => {
  res.send(" Hello From Server ");
});

app.post("/post", (req, res) => {
  res.send("Hi I a Post Method");
});
app.listen(3000);
