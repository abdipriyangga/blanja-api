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
    postProduct: (req,res) => {
        const {body} = req;
        const insertBody = {
            ...body,
            created_time: new Date(Date.now()),
            updated_time: new Date(Date.now())
        };
        productsModels.postProduct(insertBody) 
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
    }  
}