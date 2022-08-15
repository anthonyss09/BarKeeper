import User from "../models/User.js";
import Beer from "../models/Beer.js";
import Wine from "../models/Wine.js";
import Spirit from "../models/Spirit.js";
import Cocktail from "../models/Cocktail.js";

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
  await Beer.create({
    name: "Beer",
    products: [],
    createdBy: user._id,
  });
  await Spirit.create({
    name: "Spirit",
    products: [],
    createdBy: user._id,
  });
  await Wine.create({
    name: "Wine",
    products: [],
    createdBy: user._id,
  });
  await Cocktail.create({
    name: "Cocktail",
    products: [],
    createdBy: user._id,
  });
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
