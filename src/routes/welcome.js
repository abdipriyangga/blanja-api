const express = require('express');
const welcomeRouter = express.Router();

welcomeRouter.get("/", (_, res) => {
    res.send("hello Guuys!")
})

module.exports = welcomeRouter;