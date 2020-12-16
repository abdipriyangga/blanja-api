
const authRouter = require('express').Router();

const authController = require("../controllers/auth");

authRouter.post('/register-seller', authController.registerSellers);
authRouter.post('/login-seller', authController.loginSellers);
authRouter.post('/register-customer', authController.registerCustomers);
authRouter.post('/login-customer', authController.loginCustomers);
authRouter.post('/logout', authController.logout);

module.exports = authRouter;