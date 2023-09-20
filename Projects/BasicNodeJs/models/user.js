const db = require("../util/databse");

module.exports.insertUser = (userData) => {
  console.log(userData);

  let query =
    "insert into users('name', 'email','password', 'remark') VALUES (?,?,?,?)";

  // execute
  db.execute(query, [
    userData.name,
    userData.email,
    userData.password,
    userData.remark,
  ]);
  // result return
  return true;
};
