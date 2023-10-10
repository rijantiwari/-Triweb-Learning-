import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
let resp: ReturnResponse;
interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {};
}
const registerUser = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const password = await bcrypt.hash(req.body.password, 10);

    const user = new User({ email, name, password });
    const result = await user.save();
    if (!result) {
      resp = { status: "error", message: "No result Found", data: {} };
      res.send(resp);
    } else {
      resp = {
        status: "success",
        message: "Registration done",
        data: { userId: result.id },
      };

      res.send(resp);
    }
  } catch (error) {
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // find user with email
    const user = await User.findOne({ email });
    if (!user) {
      resp = { status: "error", message: "User not found", data: {} };
      res.status(401).send(resp);
    }

    if (user && user.password) {
      const status = await bcrypt.compare(password, user.password);
      if (status) {
        const token = jwt.sign({ userId: user.id }, "secretmyverysecretkey");
        resp = { status: "success", message: "Logged In", data: { token } };
        res.send(resp);
      } else {
        resp = { status: "error", message: "Credential Mismatched", data: {} };
        res.status(401).send(resp);
      }
    } else {
      resp = { status: "error", message: "User data incomplete", data: {} };
      res.send(resp);
    }
  } catch (error) {
    console.log(error);
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

const getUser = async (req: Request, res: Response) => {
  console.log("Change 124");
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId, { name: 1, email: 1 });
    if (!user) {
      resp = { status: "error", message: "No user Found", data: {} };
      res.send(resp);
    } else {
      resp = { status: "success", message: "User Found", data: { user: user } };
      res.send(resp);
    }
  } catch (error) {
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.body._id;
    const user = await User.findById(userId);

    if (!user) {
      resp = { status: "error", message: "User not found", data: {} };
      return res.send(resp);
    }

    user.name = req.body.name;
    await user.save();

    resp = { status: "success", message: "User updated", data: { user } };
    res.send(resp);
  } catch (error) {
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

export { registerUser, getUser, updateUser, loginUser };
