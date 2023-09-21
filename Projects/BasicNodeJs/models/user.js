const db = require("../util/databse");

module.exports.insertUser = async (userData) => {
  let id = 0;
  try {
    let query =
      "insert into users (name, email, password, remark) VALUES (?, ?, ?, ?) ";

    // execute
    let result = await db.execute(query, [
      userData.name,
      userData.email,
      userData.password,
      userData.remark,
    ]);
    id = result[0].insertId;
  } catch (error) {
    console.log(error);
  }

  // result return
  return id;
};

module.exports.get = async (userData) => {
  let retData = "";
  try {
    let query = "Select * from users WHERE id = ?";
    let result = await db.execute(query, [userData.id]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  return retData;
};

module.exports.update = async (userData) => {
  try {
    let query = "UPDATE users set password = ?  WHERE id = ? ";
    await db.execute(query, [userData.password, userData.id]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
module.exports.delete = async (userData) => {
  try {
    let query = "Delete FROM `users`  WHERE id = ? ";
    await db.execute(query, [userData.id]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
