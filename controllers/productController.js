import Beer from "../models/Beer.js";
import Spirit from "../models/Spirit.js";
import Wine from "../models/Wine.js";
import Cocktail from "../models/Cocktail.js";
import InventoryBeer from "../models/InventoryBeer.js";
import InventorySpirit from "../models/InventorySpirit.js";
import InventoryWine from "../models/InventoryWine.js";

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
          ...newProduct,
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

  delete productObject._id;
  let updateObject = { $set: {} };
  for (var item in productObject) {
    updateObject.$set["inventory.$." + item] = productObject[item];
  }

  const newInventory = await mongoose
    .model(`Inventory${productType}`)
    .findOneAndUpdate({ "inventory._id": id }, updateObject);

  res.status(StatusCodes.OK).json({ response, newInventory });
};

const getInventories = async (req, res) => {
  const queryObject = { createdBy: "" };
  queryObject.createdBy = req.user.userId;
  let beers = await InventoryBeer.find(queryObject);
  let spirits = await InventorySpirit.find(queryObject);
  let wines = await InventoryWine.find(queryObject);

  res.status(StatusCodes.OK).json({
    beers: beers[0].inventory,
    spirits: spirits[0].inventory,
    wines: wines[0].inventory,
  });
};

const updateInventories = async (req, res) => {
  const { beers, spirits, wines } = req.body;
  const userId = req.user.userId;

  await InventoryBeer.findOneAndUpdate(
    { createdBy: userId },
    { inventory: beers }
  );
  await InventorySpirit.findOneAndUpdate(
    { createdBy: userId },
    { inventory: spirits }
  );
  await InventoryWine.findOneAndUpdate(
    { createdBy: userId },
    { inventory: wines }
  );
  await res.status(StatusCodes.OK).json({ beers, spirits, wines });
};

const updateProductFromInventory = async (req, res) => {
  const { _id: id } = req.body;
  let { productType } = req.body;
  productType =
    productType.charAt(0).toUpperCase() + productType.slice(1).toLowerCase();
  const { userId } = req.user;

  const product = req.body;

  // const productInventory = await mongoose
  //   .model(`Inventory${productType}`)
  //   .find({ createdBy: userId });

  // const targetInventory = productInventory[0].inventory;
  // const targetProductArray = targetInventory.filter((prod) => prod.id === id);
  // const targetProduct = targetProductArray[0];

  // const updatedProduct = await mongoose
  //   .model(productType)
  //   .findOneAndUpdate({ _id: id }, targetProduct, {
  //     new: true,
  //     runValidators: true,
  //   });

  const updatedProduct = await mongoose
    .model(productType)
    .findOneAndUpdate({ _id: id }, product, {
      new: true,
      runValidators: true,
    });

  res.status(StatusCodes.OK).json({ updatedProduct });
};

export {
  createProduct,
  getProducts,
  editProduct,
  getInventories,
  updateInventories,
  updateProductFromInventory,
};
