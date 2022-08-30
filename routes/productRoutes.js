import express from "express";
const router = express.Router();
import {
  createProduct,
  getProducts,
  editProduct,
  updateProductFromInventory,
  removeProduct,
} from "../controllers/productController.js";

router.route("/add-product").post(createProduct);
router.route("/").get(getProducts).patch(updateProductFromInventory);
router.route("/:id").patch(editProduct);
router.route("/remove-product").delete(removeProduct);

export default router;
