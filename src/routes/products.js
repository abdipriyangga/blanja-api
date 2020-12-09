const express = require('express');
const productsRouter = express.Router();
const productController = require("../controllers/products");
const multiUpload = require("../helpers/middlewares/uploadImg");

//get all products with endpoint /product
productsRouter.get("/", productController.getAllProducts);
//productsRouter.get("/:id", productController.getProductsById);

// POST
productsRouter.post("/", multiUpload ,productController.postProduct);

//PUT
//productsRouter.put("/", productController.putProduct);
//ProductNews
productsRouter.get("/new", productController.getAllProductsNews);

module.exports = productsRouter;