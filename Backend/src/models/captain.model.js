import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: [2, "First name must be 2 Characters or long "],
    },
    lastname: {
      type: String,
      minLength: [2, "last name must be 2 Characters or long "],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    minlength: [5, "Email length must have to be greater than 5 "],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
    color: {
      type: String,
      required: true,
      minLength: [3, "Color must be 2 Characters or long "],
    },
    plate: {
      type: String,
      required: true,
      unique: true,
      minLength: [9, "enter a valid plate number"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be atleat 1"],
    },
    model: {
      type: String,
      required: true,
      minLength: [3, "model must be 2 Characters or long "],
    },
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.AUTH_SECRET, {
    expiresIn: process.env.AT_EXPIRY,
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const Captain = mongoose.model("Captain", captainSchema);

export default Captain;
