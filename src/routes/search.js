const express = require('express');
const searchRouter = express.Router();
const searchController = require("../controllers/search");


//Search product by name
searchRouter.get("/", searchController.searchProduct);

//Search product by category
searchRouter.get("/category", searchController.searchProductByCategory);

module.exports = searchRouter;