const express = require('express');
const productRouter = express.Router();
const productController = require("../controllers/product");

// GET a product
productRouter.get("/:id", productController.getProductById);

// UPDATE a product
productRouter.patch("/", productController.putProduct);

//Delete product
productRouter.delete("/:id", productController.deleteProduct);

productRouter.get("/news", productController.getProductNews);

module.exports = productRouter;