const addUserToDB = (username: string, password: string, age: number) => {
  console.log(username, password, age);
  return "User Registration Done";
};

interface User {
  id: number;
  uname: string;
  password: string;
  age: number;
  is_active: true | false;
  // accountStaus: lockedState;
}
const updateUserData = (objUser: User) => {
  console.log(objUser.uname);
  return "User Updated  Successfully";
};

export { addUserToDB, updateUserData };
