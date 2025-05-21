import express from "express";
import authRoutes from "./auth/index.js";
import articleRoutes from "./article/index.js";
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/article", articleRoutes);

export default router;
