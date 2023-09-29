const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HellO I'm Running ");
});

app.listen(3000);
