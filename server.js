import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
// import cors from "cors";
//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import auth from "./middleware/auth.js";
//routes
import authRouter from "./routes/authRoutes.js";
import productRouter from "./routes/productRoutes.js";

import connectDb from "./Db/connect.js";

import morgan from "morgan";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
// app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to BarKeeper's backend!");
});

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", auth, productRouter);

//middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
