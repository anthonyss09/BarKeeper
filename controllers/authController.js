import User from "../models/User.js";
import InventoryBeer from "../models/InventoryBeer.js";
import InventoryWine from "../models/InventoryWine.js";
import InventorySpirit from "../models/InventorySpirit.js";
import InventoryCocktail from "../models/InventoryCocktail.js";

import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../Errors/index.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) {
    throw new BadRequestError("Email already in use.");
  }
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values.");
  }
  const user = await User.create({ name, email, password });

  await InventoryBeer.create({ inventory: [], createdBy: user._id });
  await InventorySpirit.create({ inventory: [], createdBy: user._id });
  await InventoryWine.create({ inventory: [], createdBy: user._id });
  await InventoryCocktail.create({ inventory: [], createdBy: user._id });

  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.name, email: user.email }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide all values.");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new BadRequestError("Invalid credentials.");
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new UnauthenticatedError("Invalid credentials.");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token });
};

export { register, login };
