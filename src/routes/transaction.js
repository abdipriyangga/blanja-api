const express = require("express");
const transactionRouter = express.Router();
const transactionController = require("../controllers/transaction");
const middlewareCheckToken = require("../helpers/middlewares/checkToken");

transactionRouter.post("/", middlewareCheckToken.login, transactionController.transactionPost);
transactionRouter.get("/", transactionController.transactionHistory);


module.exports = transactionRouter;