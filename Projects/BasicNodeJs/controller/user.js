const usermModel = require("../models/user");

module.exports.registration = async (req, res) => {
  let insertId = await usermModel.insertUser(req.body);
  console.log("id", insertId);
  if (insertId > 0) {
  } else {
    res.send({ status: "Error", message: "User Registration Failed" });
  }
};

// data get
module.exports.get = (req, res) => {
  res.send(req.body);
};

// update
module.exports.update = (req, res) => {
  res.send(req.body);
};

// delete
module.exports.delete = (req, res) => {
  res.send(req.body);
};
