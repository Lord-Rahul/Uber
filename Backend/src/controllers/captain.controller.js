import Captain from "../models/captain.model.js";
import blacklistToken from "../models/blacklistToken.model.js";
import createCaption from "../services/caption.service.js";
import { validationResult } from "express-validator";

const registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const duplicate = await Captain.findOne({ email });
  if (duplicate) {
    res.status(401).json({ message: "email already exist" });
  }

  const hashedPassword = await Captain.hashPassword(password);

  const captain = await createCaption({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    model: vehicle.model,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();
  res.status(201).json({ token, captain });
};

//login controller
const loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await Captain.findOne({ email }).select("+password");

  if (!captain) {
    return res.status(401).json({ message: "Invalid email or password " });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password " });
  }

  const token = captain.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, captain });
};

//profile
const getCaptainProfile = async (req, res, next) => {
  res.status(200).json(req.captain);
};

//logout
const logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await blacklistToken.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Captain logged out successfully" });
};

export { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain };
