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

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, "./client/build")));
// app.use(cors());

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", auth, productRouter);

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
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
