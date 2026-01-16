import { UserModel } from "../models/user.models.js";
import createUser from "../services/user.services.js";
import { validationResult } from "express-validator";

const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  //check if user exist
  const duplicate = await UserModel.findOne({ email: email });
  if (duplicate) {
    res.status(401).json({ message: "email already exist" });
  }

  const hashedPassword = await UserModel.hashPassword(password);

  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });
  const token = user.generateAuthToken();

  const userResponse = user.toObject();
  delete userResponse.password;

  res.cookie("token", token);
  res.status(200).json({ token, user: userResponse });
};

const loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }

  const { email, password } = req.body;
  const user = await UserModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "invalid email or password" });
  }

  const token = user.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, user });
};

const getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

export { registerUser, loginUser, getUserProfile };
