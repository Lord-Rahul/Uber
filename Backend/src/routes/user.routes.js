import express from "express";
import { body } from "express-validator";
import { authUser } from "../middlewares/auth.middleware.js";
import {
  getUserProfile,
  loginUser,
  logout,
  registerUser,
} from "../controllers/user.controllers.js";
const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 2 })
      .withMessage("First name must be atleast 2 characters long"),
    body("fullname.lastname")
      .isLength({ min: 2 })
      .withMessage("Last name must be atleast 2 characters long"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("password must be atleast 8 characters long"),
  ],
  registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("password must be atleast 8 characters long"),
  ],
  loginUser
);

router.get("/profile", authUser, getUserProfile);
router.get("/logout", authUser, logout);

export default router;
