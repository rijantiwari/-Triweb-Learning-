import express from "express";
import { registerUser, loginUser, isUserExist } from "../controllers/auth";
import { body } from "express-validator";
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
      .custom((emailId: String) => {
        return isUserExist(emailId)
          .then((status: Boolean) => {
            if (status) {
              return Promise.reject("User Already Exist");
            }
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      })
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength({ min: 8 })
      .withMessage("Enter at least 8 character long password"),
    body("confirm_password")
      .trim()
      .custom((value: String, { req }) => {
        if (value != req.body.password) {
          return Promise.reject("Password mismatched.");
        }
        return true;
      }),
  ],
  registerUser
);
// POST /auth/login

router.post("/login", loginUser);

export default router;
