import express from "express";
const router = express.Router();
import {
  createProduct,
  getProducts,
} from "../controllers/productController.js";

router.route("/add-product").post(createProduct);
router.route("/").get(getProducts);

export default router;
