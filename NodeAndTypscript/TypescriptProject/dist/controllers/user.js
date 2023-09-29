"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_1 = require("../models/user");
const registerUser = (req, res) => {
    // fetch data from req
    // validation
    // normalize
    const username = "Rijan";
    const password = "password";
    const result = (0, user_1.addUserToDB)(username, password);
    res.send(result);
};
exports.registerUser = registerUser;
