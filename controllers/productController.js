import Beer from "../models/Beer.js";
import Spirit from "../models/Spirit.js";
import Wine from "../models/Wine.js";
import Cocktail from "../models/Cocktail.js";

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

  res.status(StatusCodes.OK).json({ products });
};

const editProduct = async (req, res) => {
  const productObject = req.body;
  let { productType } = productObject;
  const { _id: id } = productObject;
  productType =
    productType.charAt(0).toUpperCase() + productType.slice(1).toLowerCase();

  const exists = await mongoose.model(productType).findOne({ _id: id });

  if (!exists) {
    throw new NotFoundError(`No product with id of ${id} found.`);
  }

  const response = await mongoose
    .model(productType)
    .findOneAndUpdate({ name: productObject.name }, productObject, {
      new: true,
      runValidators: true,
    });

  res.status(StatusCodes.OK).json({ response, newInventory });
};

const updateProductFromInventory = async (req, res) => {
  const { _id: id } = req.body;
  let { productType } = req.body;
  productType =
    productType.charAt(0).toUpperCase() + productType.slice(1).toLowerCase();
  const { userId } = req.user;

  const product = req.body;

  const exists = await mongoose.model(productType).find({ _id: id });
  if (!exists) {
    throw new BadRequestError(`No product with id:${id} exists.`);
  }

  const updatedProduct = await mongoose
    .model(productType)
    .findOneAndUpdate({ _id: id }, product, {
      new: true,
      runValidators: true,
    });

  res.status(StatusCodes.OK).json({ updatedProduct });
};

export { createProduct, getProducts, editProduct, updateProductFromInventory };
