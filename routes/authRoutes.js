import express from "express";
const router = express.Router();
import { register, login } from "../controllers/authController.js";

import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, //15minutes
  max: 10,
  message: "Too many requests from this IP adress, please try again later.",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);

export default router;
