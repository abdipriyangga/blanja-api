const imageUploadRouter = require("express").Router();

const multiUpload = require("../helpers/middlewares/uploadImg");

imageUploadRouter.post("/", multiUpload, (req, res) => {
   // const filePath = "/imgTest/" + req.files.filena;
    res.json(req.files)
})

module.exports = imageUploadRouter;