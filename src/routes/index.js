const express = require("express");

const mainRouter = express.Router();

const welcomeRouter = require("./welcome");
const productsRouter = require("./products");
const productRouter = require("./product");
const searchRouter = require("./search");
const transactionRouter = require("./transaction");
const authRouter = require("./auth");
const middlewareCheckToken = require("../helpers/middlewares/checkToken");
const uploadRouter = require("./imgUpload");

mainRouter.use("/", welcomeRouter);
mainRouter.use("/products", productsRouter);
mainRouter.use("/product",middlewareCheckToken.login, middlewareCheckToken.seller, productRouter);
mainRouter.use("/search", searchRouter);
mainRouter.use("/transaction", transactionRouter);
mainRouter.use("/auth", authRouter);
mainRouter.use("/upload", uploadRouter);

module.exports = mainRouter;

