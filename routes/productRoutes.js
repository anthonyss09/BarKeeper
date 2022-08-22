import express from "express";
const router = express.Router();
import {
  createProduct,
  getProducts,
  editProduct,
  getInventories,
  updateInventories,
  updateProductFromInventory,
} from "../controllers/productController.js";

router.route("/add-product").post(createProduct);
router.route("/").get(getProducts).patch(updateProductFromInventory);
router.route("/inventory").get(getInventories).patch(updateInventories);
router.route("/:id").patch(editProduct);

export default router;
