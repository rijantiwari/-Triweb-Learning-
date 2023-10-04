"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const connectionString = "mongodb+srv://rijantiwari:HelloWorld123@cluster0.ayiv5v1.mongodb.net/workshopdb?retryWrites=true&w=majority";
app.use(express_1.default.json());
app.use("/user", user_1.default);
mongoose_1.default
    .connect(connectionString)
    .then((success) => app.listen(3000, () => {
    console.log("server connected");
}))
    .catch((err) => console.log(err.message));
