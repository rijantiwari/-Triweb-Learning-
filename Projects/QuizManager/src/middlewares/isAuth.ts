import { Request, Response, NextFunction } from "express";
import jwt, { decode } from "jsonwebtoken";
import ProjectError from "../helper/error";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      const err = new ProjectError("Not Authenticated");
      err.statusCode = 401;
      throw err;
    }
    // jwt --> decode using sign
    const token = authHeader.split(" ")[1];
    let decodedToken: { userId: String; iat: Number; exp: Number };
    try {
      decodedToken = <any>jwt.verify(token, "secretmyverysecretkey");
    } catch (error) {
      const err = new ProjectError("Not Authenticated");
      err.statusCode = 401;
      throw err;
    }

    if (!decodedToken) {
      const err = new ProjectError("Not Authenticated");
      err.statusCode = 401;
      throw err;
    }
    // userid
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    next(error);
  }
};

export { isAuthenticated };
