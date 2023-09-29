const express = require("express");
const app = express();
const userRoute = require("./routes/user");
app.get("/", (req, res) => {
  res.send("Hi From Server ");
});
app.use("/user", userRoute);

app.listen(process.env.PORT);
