import { Request, Response, NextFunction } from "express";
import User from "../models/user";
let resp: ReturnResponse;
interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {};
}
const registerUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
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

export { registerUser, getUser, updateUser };
