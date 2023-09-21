const usermModel = require("../models/user");

module.exports.registration = async (req, res) => {
  try {
    let result = await usermModel.create(req.body);

    res.send({ status: "success", data: { id: result.dataValues.id } });
  } catch (error) {
    res.send({ status: "Error", message: "User Registration Failed" });
  }
};

// data get
module.exports.get = async (req, res) => {
  try {
    let data = await usermModel.findByPk(req.body.id);

    res.send({ status: "success", data: data });
  } catch (error) {
    res.send({ status: "Error", message: "User Not found" });
  }
};

// update
module.exports.update = async (req, res) => {
  try {
    let user = await usermModel.findByPk(req.body.id);
    user.password = req.body.password;
    await user.save();
    res.send({
      status: "success",
      message: "User data Updated Successfully ",
    });
  } catch (error) {
    res.send({ status: "Error", message: "User Not updated" });
  }
};

// delete
module.exports.delete = async (req, res) => {
  try {
    let user = await usermModel.findByPk(req.body.id);
    await user.destroy();
    res.send({ status: "success", message: "User deleted Successfully " });
  } catch (error) {
    res.send({ status: "Error", message: "User Not deleted" });
  }
};
