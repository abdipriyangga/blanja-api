const conn = require('../configs/myDB');
module.exports = {
    getProductById : (id) => {
        return new Promise((resolve, reject) => {
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
    },
    putProduct : (updateBody,id) => {
        return new Promise((resolve, reject) => {
            const qs = "UPDATE products SET ? WHERE ?";
            conn.query(qs,[updateBody, id], (err, data) => {
                if(!err) {
                    resolve(data);
                }else{
                    reject(err);
                }
            });
        });
    },
    deleteProduct : (id) => {
        return new Promise((resolve, reject) => {
            const qs = "DELETE from products WHERE id=?"
            conn.query(qs,id, (err, data) => {
                if(!err) {
                    resolve(data);
                }else{
                    reject(err);
                }
            });
        });
    },
    getProductNews : () => {
        return new Promise((resolve, reject) => {
            const qs = 
                'SELECT products.id, products.product_name, products.images, category.category_name, products.product_brand,products.product_rating,products.product_price, color.color_name,size.size_name,products.qty, conditions.condition_name, products.description, products.created_time, products.updated_time from products JOIN category ON products.id_category = category.id JOIN color ON products.id_color = color.id JOIN size ON products.id_size = size.id JOIN conditions ON products.id_condition = conditions.id ORDER BY products.created_time DESC';
            conn.query(qs, (err, data) => {
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            });
        });
    },
 
}