const { addUserToDB } = require("../models/user");

const registerUser = (req, res) => {
  // fetch data from req

  // validation
  // normalize

  const username = "Rijan";
  const password = "password";

  const result = addUserToDB(username, password);
  res.send(result);
};

module.exports = { registerUser };
