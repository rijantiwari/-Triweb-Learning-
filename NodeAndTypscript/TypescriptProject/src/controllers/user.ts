import { Request, Response } from "express";

import { addUserToDB, updateUserData } from "../models/user";

const registerUser = (req: Request, res: Response) => {
  // fetch data from req

  // validation
  // normalize

  const username: string = "Rijan";
  const password: string = "password";
  const age: number = 123;

  const result = addUserToDB(username, password, age);
  res.send(result);
};

const updateUser = (req: Request, res: Response) => {
  type lockedState = "locked" | "unlocked";
  let xState: lockedState = "locked";
  const myUser = {
    id: 1,
    uname: "Jivan",
    password: "hello",
    age: 2,
    is_active: true,
  };
  const result = updateUserData(myUser);
  res.send(result);
};
export { registerUser, updateUser };
