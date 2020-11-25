const productModels = require("../models/product");
module.exports = {
    getProductById: (req, res) => {
        const {id} = req.params;
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
        const {id} = req.params;
        const {body} = req;
        const updateBody = {
            ...body,
            updated_time: new Date(Date.now())
        };
        productModels.putProduct(updateBody,id) 
        .then((data) => {
            const resObj = {
                msg: "Data dengan id: " + id + "Berhasil diubah",
                data:{id: data.updateId,
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
                msg: "Data dengan id: " + id + "Berhasil dihapus",
                data: {id: data.id}
            };
            res.json(resObj);
        })
        .catch((err) => {
            res.json(err);
        })
    }
}