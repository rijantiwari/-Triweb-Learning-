const usermModel = require("../models/user");

module.exports.registration = async (req, res) => {
  let insertId = await usermModel.insertUser(req.body);
  console.log("id", insertId);
  res.send(req.body);
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
