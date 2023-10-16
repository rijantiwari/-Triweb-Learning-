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
const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
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
        const token = jwt.sign({ userId: user.id }, "secretmyverysecretkey", {
          expiresIn: "1h",
        });
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
    next(error);
  }
};
export { registerUser, loginUser };
