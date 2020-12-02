const conn = require("../configs/myDB");
module.exports = {
    searchProduct: (keyword) => {
        return new Promise((resolve, reject) => {
            const qs = 
                "SELECT products.id, products.product_name, products.images, category.category_name, products.product_brand,products.product_rating,products.product_price, color.color_name,size.size_name,products.qty, conditions.condition_name, products.description, products.created_time, products.updated_time from products JOIN category ON products.id_category = category.id JOIN color ON products.id_color = color.id JOIN size ON products.id_size = size.id JOIN conditions ON products.id_condition = conditions.id WHERE products.product_name LIKE ? GROUP BY products.product_name ORDER BY products.product_price DESC";
            conn.query(qs, keyword, (err, data) => {
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            });
        });
    },
    searchProductByCategory : (key) => {
        return new Promise((resolve, reject) => {
            const qs = 
                "SELECT products.id, products.product_name, products.images, category.category_name, products.product_brand,products.product_rating,products.product_price, color.color_name,size.size_name,products.qty, conditions.condition_name, products.description, products.created_time, products.updated_time from products JOIN category ON products.id_category = category.id JOIN color ON products.id_color = color.id JOIN size ON products.id_size = size.id JOIN conditions ON products.id_condition = conditions.id WHERE category.category_name LIKE ? ORDER BY products.product_name DESC, products.created_time ASC";
            conn.query(qs, key, (err, data) => {
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            });
        });
    },
    searchProductNew : () => {
        return new Promise((resolve, reject) => {
            const qs = 
                "SELECT products.id, products.product_name, products.images, category.category_name, products.product_brand,products.product_rating,products.product_price, color.color_name,size.size_name,products.qty, conditions.condition_name, products.description, products.created_time, products.updated_time from products JOIN category ON products.id_category = category.id JOIN color ON products.id_color = color.id JOIN size ON products.id_size = size.id JOIN conditions ON products.id_condition = conditions.id ORDER BY products.created_time DESC";
            conn.query(qs, (err, data) => {
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            });
        });
    }
}