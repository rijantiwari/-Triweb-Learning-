import express from "express";
import { registerUser, loginUser, isUserExist } from "../controllers/auth";
import { body } from "express-validator";
import ProjectError from "../helper/error";
const router = express.Router();

router.post(
  "/",
  [
    body("name")
      .trim()
      .notEmpty()
      .isLength({ min: 4 })
      .withMessage("Please Enter a valid name minimum 4 charactor long"),
    body("email")
      .trim()
      .notEmpty()
      .isEmail()
      .custom((emailId) => {
        return isUserExist(emailId)
          .then((status) => {
            if (status) {
              return Promise.reject("User Already Exist");
            }
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      })
      .normalizeEmail(),
  ],
  registerUser
);
// POST /auth/login

router.post("/login", loginUser);

export default router;
