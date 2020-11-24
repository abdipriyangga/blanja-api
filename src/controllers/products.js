const productsModels = require('../models/products');
module.exports = {
    getAllProducts: (_, res) => { 
        productsModels.
        getAllProducts()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    getProductsById: (req, res) => {
        const {id} = req.params;
        productsModels.getProductsById(id)
        .then((data) => {
            if(data.length) {
                res.json(data);
            } else {
                res.status(404).json({
                    msg: "Data Not Found"
                });
            }
        }).catch((err) => {
            res.json(err);
        })
    },
    postProduct: (req,res) => {
        const {body} = req;
        const insertBody = {
            ...body,
            created_time: new Date(Date.now()),
            updated_time: new Date(Date.now())
        };
        productsModels.postProduct() 
        .then((data) => {
            const resObj = {
                msg: "Data Berhasil ditambah",
                data:{id: data.insertId,
                    ...insertBody}
            };
            res.json(resObj);
        })
        .catch((err) => {
            res.json(err);
        })
    },
    putProduct: (req,res) => {
        const {body} = req;
        const updateBody = {
            ...body,
            created_time: new Date(Date.now()),
            updated_time: new Date(Date.now())
        };
        const putProduct = new Promise ((resolve, reject) => {
            const qs = "UPDATE INTO products SET ?";
            conn.query(qs, updateBody, (err, data) => {
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            });
        });
        putProduct.then((data) => {
            const resObj = {
                msg: "Data Berhasil diupdate",
                data:{id: data.insertId,
                    ...updateBody}
            };
            res.json(resObj);
        })
        .catch((err) => {
            res.json(err);
        })
    }
}