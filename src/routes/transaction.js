const express = require("express");
const transactionRouter = express.Router();
const transactionController = require("../controllers/transaction");


transactionRouter.post("/", transactionController.transactionPost);
transactionRouter.get("/", transactionController.transactionHistory);


module.exports = transactionRouter;