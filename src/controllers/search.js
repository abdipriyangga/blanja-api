const searchModel = require("../models/search");
const form = require("../helpers/form");

module.exports = {
    searchProduct: (req, res) => {
        //const {query} = req;
        const {name} = req.query;
        // const limit = Number(query.limit) || 1;
        // const offset = (Number(query.page) - 1) * limit || 0;  
        // const page = Number(query.page) || 1;
        const key = "%" + name + "%";
        searchModel
        .searchProduct(key).then((data) => {
            const resObj = {
                msg: "Data search Product by name",
                data: data
            };
            res.json(resObj);
        }).catch((err) => {
            res.json(err);
        })
    },
    searchProductByCategory: (req, res) => {
        const {q} = req.query;
        const key = "%" + q + "%";
        searchModel
        .searchProductByCategory(key).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    },
    searchProductNew: (_, res) => {
        searchModel
        .searchProductNew().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    },
    searchProductPopular: (_, res) => {
        searchModel
        .searchProductPopular().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    }   
}
   

