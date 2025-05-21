import express from "express";
import { registerUser } from "../../controllers/auth/index.js";
const authRoutes = express.Router();

authRoutes.post("/user/register", registerUser);

export default authRoutes;
