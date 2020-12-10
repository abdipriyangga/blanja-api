const express = require('express');
const productRouter = express.Router();
const productController = require("../controllers/product");
const multiUpload = require("../helpers/middlewares/uploadImg");
const middlewareCheckToken = require("../helpers/middlewares/checkToken");
// GET a product
productRouter.get("/:id", productController.getProductById);

// UPDATE a product
productRouter.patch("/", middlewareCheckToken, multiUpload ,productController.putProduct);

//Delete product
productRouter.delete("/:id", middlewareCheckToken, productController.deleteProduct);

productRouter.get("/news", productController.getProductNews);

module.exports = productRouter;