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
