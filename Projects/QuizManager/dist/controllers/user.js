"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.registerUser = void 0;
const user_1 = __importDefault(require("../models/user"));
let resp;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_1.default(req.body);
        const result = yield user.save();
        if (!result) {
            resp = { status: "error", message: "No result Found", data: {} };
            res.send(resp);
        }
        else {
            resp = {
                status: "success",
                message: "Registration done",
                data: { userId: result.id },
            };
            res.send(resp);
        }
    }
    catch (error) {
        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(500).send(resp);
    }
});
exports.registerUser = registerUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const user = yield user_1.default.findById(userId, { name: 1, email: 1 });
        if (!user) {
            resp = { status: "error", message: "No user Found", data: {} };
            res.send(resp);
        }
        else {
            resp = { status: "success", message: "User Found", data: { user: user } };
            res.send(resp);
        }
    }
    catch (error) {
        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(500).send(resp);
    }
});
exports.getUser = getUser;
