const express = require('express');
const productsRouter = express.Router();
const productController = require("../controllers/products");

//get all products with endpoint /product
productsRouter.get("/", productController.getAllProducts);
//productsRouter.get("/:id", productController.getProductsById);

// POST
productsRouter.post("/", productController.postProduct);

//PUT
//productsRouter.put("/", productController.putProduct);
//ProductNews
productsRouter.get("/new", productController.getAllProductsNews);

module.exports = productsRouter;