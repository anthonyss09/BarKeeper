import Beer from "../models/Beer.js";
import Spirit from "../models/Spirit.js";
import Wine from "../models/Wine.js";
import Cocktail from "../models/Cocktail.js";
// import InventoryBeer from "../models/InventoryBeer.js";
// import InventoryCocktail from "../models/InventoryCocktail.js";
// import InventorySpirit from "../models/InventorySpirit.js";
// import InventoryWine from "../models/InventoryWine.js";

import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../Errors/index.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

const createProduct = async (req, res) => {
  const productObject = req.body;

  if (!productObject.name) {
    throw new BadRequestError("Please provide all values.");
  }

  productObject.createdBy = req.user.userId;
  let { productType } = productObject;
  productType =
    productType.charAt(0).toUpperCase() + productType.slice(1).toLowerCase();

  const newProduct = await mongoose.model(productType).create(productObject);

  const tempId = newProduct.createdBy;

  await mongoose.model(`Inventory${productType}`).updateOne(
    { createdBy: tempId },
    {
      $push: {
        inventory: {
          _id: newProduct._id,
          stock: newProduct.stock,
          productType: newProduct.productType,
        },
      },
    }
  );

  res.status(StatusCodes.CREATED).json({ newProduct });
};

const getProducts = async (req, res) => {
  const { productType, search, sort } = req.query;
  const queryObject = {
    createdBy: req.user.userId,
  };
  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }

  let beers = await Beer.find(queryObject);
  let cocktails = await Cocktail.find(queryObject);
  let spirits = await Spirit.find(queryObject);
  let wines = await Wine.find(queryObject);

  let products = beers.concat(cocktails).concat(spirits).concat(wines);

  if (productType !== "all") {
    products = products.filter(
      (product) => product.productType === productType
    );
  }

  res.status(StatusCodes.OK).json({ products: products });
};

export { createProduct, getProducts };
