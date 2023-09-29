"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.addUserToDB = void 0;
const addUserToDB = (username, password, age) => {
    console.log(username, password, age);
    return "User Registration Done";
};
exports.addUserToDB = addUserToDB;
const updateUserData = (objUser) => {
    console.log(objUser.uname);
    return "User Updated  Successfully";
};
exports.updateUserData = updateUserData;
