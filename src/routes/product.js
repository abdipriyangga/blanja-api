const express = require('express');
const productRouter = express.Router();
const productController = require("../controllers/product");


// GET a product
productRouter.get("/:id", productController.getProductById);

productRouter.put("/:id", productController.putProduct);

productRouter.delete("/:id", productController.deleteProduct);

module.exports = productRouter;