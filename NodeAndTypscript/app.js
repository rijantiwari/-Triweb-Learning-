const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send(" Hello From Server ");
});
app.get("/", (req, res) => {
  res.send("Hi ");
});

app.listen(3000);
