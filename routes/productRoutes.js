import express from "express";
const router = express.Router();
import { createProduct } from "../controllers/productController.js";

router.route("/add-product").post(createProduct);

export default router;
