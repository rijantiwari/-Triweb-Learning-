const usermModel = require("../models/user");

module.exports.registration = async (req, res) => {
  let insertId = await usermModel.insertUser(req.body);
  console.log("id", insertId);
  if (insertId > 0) {
    res.send({ status: "success", data: { id: insertId } });
  } else {
    res.send({ status: "Error", message: "User Registration Failed" });
  }
};

// data get
module.exports.get = async (req, res) => {
  let data = await usermModel.get(req.body);

  if (data) {
    res.send({ status: "success", data: data });
  } else {
    res.send({ status: "Error", message: "User Not found" });
  }
};

// update
module.exports.update = (req, res) => {
  res.send(req.body);
};

// delete
module.exports.delete = (req, res) => {
  res.send(req.body);
};
