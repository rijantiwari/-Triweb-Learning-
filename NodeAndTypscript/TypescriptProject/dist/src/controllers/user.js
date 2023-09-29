"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.registerUser = void 0;
const user_1 = require("../models/user");
const registerUser = (req, res) => {
    // fetch data from req
    // validation
    // normalize
    const username = "Rijan";
    const password = "password";
    const age = 123;
    const result = (0, user_1.addUserToDB)(username, password, age);
    res.send(result);
};
exports.registerUser = registerUser;
const updateUser = (req, res) => {
    let xState = "locked";
    const myUser = {
        id: 1,
        uname: "Jivan",
        password: "hello",
        age: 2,
        is_active: true,
    };
    const result = (0, user_1.updateUserData)(myUser);
    res.send(result);
};
exports.updateUser = updateUser;
