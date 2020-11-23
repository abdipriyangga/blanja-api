const conn = require('../configs/myDB');
module.exports = {
    getProductById: (req, res) => {
        const {id} = req.params;
        const getProductById = new Promise((resolve, reject) => {
            const qs = 
                'SELECT products.id, products.product_name, products.images, category.category_name, products.product_brand,products.product_rating,products.product_price, color.color_name,size.size_name,products.qty, conditions.condition_name, products.description, products.created_time, products.updated_time from products JOIN category ON products.id_category = category.id JOIN color ON products.id_color = color.id JOIN size ON products.id_size = size.id JOIN conditions ON products.id_condition = conditions.id WHERE products.id = ?';
            conn.query(qs, id, (err, data) => {
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            });
        });
        getProductById.then((data) => {
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