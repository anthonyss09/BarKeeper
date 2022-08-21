import express from "express";
const router = express.Router();
import {
  createProduct,
  getProducts,
  editProduct,
} from "../controllers/productController.js";

router.route("/add-product").post(createProduct);
router.route("/").get(getProducts);
router.route("/:id").patch(editProduct);

export default router;
