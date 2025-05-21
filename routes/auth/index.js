import express from "express";
import {
  changePassword,
  loginUser,
  registerUser,
} from "../../controllers/auth/index.js";
import { protectRoute } from "../../middleware/auth/protectRoute.js";
const authRoutes = express.Router();

authRoutes.post("/user/register", registerUser);
authRoutes.post("/user/login", loginUser);
authRoutes.patch("/user/changePassword", protectRoute, changePassword);

export default authRoutes;
