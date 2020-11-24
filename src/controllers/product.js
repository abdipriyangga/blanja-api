const productModels = require("../models/product");
module.exports = {
    getProductById: (req, res) => {
        const {id} = req.params;
        productModels.getProductById(id)
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
    }
}