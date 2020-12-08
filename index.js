require("dotenv").config();
const express = require("express");
const app = express();
const mainRouter = require("./src/routes/index");
const logger = require("morgan");
const port = 4000;
const cors = require("cors");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  })


app.use(cors());
// add logger with morgan
app.use(logger("dev"));

//add parser for x-www-form-urlencoded
app.use(express.urlencoded({extended : false}));

//add parser for raw json
app.use(express.json());

app.use("/", mainRouter);

module.exports = app;