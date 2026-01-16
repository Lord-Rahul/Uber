import express from "express";
import UserRoutes from "./routes/user.routes.js";
import CaptainRoutes from "./routes/captain.routes.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/user", UserRoutes);
app.use("/captain", CaptainRoutes);

export default app;
