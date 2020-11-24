const searchModel = require("../models/search");

module.exports = {
    searchProduct: (req, res) => {
        const {name} = req.query;
        const key = "%" + name + "%";
        searchModel
        .searchProduct(key).then((data) => {
          res.json(data);
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
    }   
}
   

