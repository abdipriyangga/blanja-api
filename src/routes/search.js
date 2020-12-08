const express = require('express');
const searchRouter = express.Router();
const searchController = require("../controllers/search");


//Search product by name
searchRouter.get("/", searchController.searchProduct);

//Search product by category
searchRouter.get("/category", searchController.searchProductByCategory);

searchRouter.get("/new", searchController.searchProductNew);
searchRouter.get("/popular", searchController.searchProductPopular);
module.exports = searchRouter;