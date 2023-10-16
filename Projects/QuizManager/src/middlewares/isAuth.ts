import { Request, Response, NextFunction } from "express";
import jwt, { decode } from "jsonwebtoken";
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      const err = new Error("Not Authenticated");

      throw err;
      // res.status(401).send("Not Authenticated");
    }
    // jwt --> decode using sign
    const token = authHeader.split(" ")[1];
    let decodedToken: { userId: String; iat: Number; exp: Number };
    try {
      decodedToken = <any>jwt.verify(token, "secretmyverysecretkey");
    } catch (error) {
      const err = new Error("Not Authenticated");
      throw err;
      // res.send("Here at decoded jwt in is auth");
    }

    if (!decodedToken) {
      const err = new Error("Not Authenticated");
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
