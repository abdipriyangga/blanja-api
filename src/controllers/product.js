const productModels = require("../models/product");
module.exports = {
    getProductById: (req, res) => {
        const {id} = req.params;
        console.log(req.decodedToken);
        const level = req.decodedToken.level;
        if(level > 1) {
            res.status(401).json({
                msg: "You don't have authorizathion to access this data!"
            });
        }
        productModels.getProductById(id)
        .then((data) => {
            if(data.length) {
                const resObj = {
                    msg: "Data Product id : " + id,
                    data: data
                };
                res.json(resObj);
            } else {
                res.status(404).json({
                    msg: "Data Not Found"
                });
            }
        }).catch((err) => {
            res.json(err);
        })
    },
    putProduct: (req,res) => {
        const {id} = req.body;
        const {body} = req;
        const updateBody = {
            ...body,
            updated_time: new Date(Date.now())
        };
        const idBody = { id };
        const uploadMultipleImg = JSON.stringify(
            req.files.map((e) => "/images" + "/" + e.filename + " ")
        )
        productModels.putProduct(updateBody,idBody) 
        .then((data) => {
            const resObj = {
                msg: "Data id: " + id + " has changed",
                data:{id: data.updateId,
                    images: uploadMultipleImg,
                    ...updateBody}
            };
            res.json(resObj);
        })
        .catch((err) => {
            res.json(err);
        })
    },
    deleteProduct : (req,res) => {
        const {id} = req.params;
    
        productModels.deleteProduct(id) 
        .then((data) => {
            const resObj = {
                msg: "Data dengan id: " + id + " Berhasil dihapus",
                data: {id: data.id}
            };
            res.json(resObj);
        })
        .catch((err) => {
            res.json(err);
        })
    },
    getProductNews: (_, res) => {
        productModels
        .getProductNews()
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    }
}