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
  const { productType } = productObject;

  const newInventory = await mongoose
    .model(productType)
    .updateOne({ name: productType }, { $push: { products: productObject } });

  res.status(StatusCodes.CREATED).json({ newInventory });
};

export { createProduct };
