const productsModels = require('../models/products');
const form = require("../helpers/form");

module.exports = {
    getAllProducts: (req, res) => { 
        const {query} = req;
        const limit = Number(query.limit) || 1;
        const offset = (Number(query.page) - 1) * limit || 0;  
        const page = Number(query.page) || 1;

        productsModels.
        getAllProducts(limit, offset)
            .then((data) => {
                if(data != 0) {
                    form.success(res, {
                        msg: "Data Product",
                        products: data,
                        pageInfo: {
                            currentPage: page,
                            previousPage:
                                page === 1 ? null : `/?page=${page-1}&limit=${limit}`,
                            nextPage: `/?page=${page+1}&limit=${limit}`,
                            }
                    })
                } else {
                    form.error(res,{
                        msg: "Data Not Found",
                        products: data
                    });
                } 
            })
            .catch((err) => {
                res.status(500).json(err)
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
    },
    getAllProductsNews: (_, res) => { 
        productsModels.
        getAllProductsNews()
            .then((data) => {
                const resObj = {
                    msg: "Data Product News",
                    data: data
                };
                res.json(resObj);
            })
            .catch((err) => {
                res.json(err);
            })
    },
}