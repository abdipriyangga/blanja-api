const express = require("express");

const mainRouter = express.Router();

const welcomeRouter = require("./welcome");
const productsRouter = require("./products");
const productRouter = require("./product");
const searchRouter = require("./search");
const transactionRouter = require("./transaction");
const authRouter = require("./auth")

mainRouter.use("/", welcomeRouter);
mainRouter.use("/products", productsRouter);
mainRouter.use("/product", productRouter);
mainRouter.use("/search", searchRouter);
mainRouter.use("/transaction", transactionRouter);
mainRouter.use("/auth", authRouter);

module.exports = mainRouter;

