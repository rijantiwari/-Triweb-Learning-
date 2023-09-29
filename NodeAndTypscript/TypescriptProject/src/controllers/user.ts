import { Request, Response } from "express";

import { addUserToDB } from "../models/user";

const registerUser = (req: Request, res: Response) => {
  // fetch data from req

  // validation
  // normalize

  const username = "Rijan";
  const password = "password";

  const result = addUserToDB(username, password);
  res.send(result);
};

export { registerUser };
