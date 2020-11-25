const express = require('express');
const productRouter = express.Router();
const productController = require("../controllers/product");


// GET a product
productRouter.get("/:id", productController.getProductById);

// UPDATE a product
productRouter.put("/:id", productController.putProduct);

//Delete product
productRouter.delete("/:id", productController.deleteProduct);

module.exports = productRouter;