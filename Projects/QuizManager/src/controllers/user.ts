import { Request, Response, NextFunction } from "express";
import User from "../models/user";

let resp: ReturnResponse;
interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {};
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.userId;

    if (req.userId != req.params.userId) {
      throw new Error("Function not allowed");
    }

    const user = await User.findById(userId, { name: 1, email: 1 });
    if (!user) {
      resp = { status: "error", message: "No user Found", data: {} };
      res.send(resp);
    } else {
      resp = { status: "success", message: "User Found", data: { user: user } };
      res.send(resp);
    }
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.userId != req.body._id) {
      throw new Error("User not authorized");
    }
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
    next(error);
  }
};

export { getUser, updateUser };
