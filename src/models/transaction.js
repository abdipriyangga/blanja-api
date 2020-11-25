const conn = require('../configs/myDB');

module.exports = {
    transactionPost: (insertBody) => {
        return new Promise ((resolve, reject) => {
            const qs = "INSERT INTO transactions SET ?";
            conn.query(qs, insertBody, (err, data) => {
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            });
        });
    },
    getTransactionHistory : () => {
        return new Promise ((ressolve, reject) => {
            const qs = 
            'SELECT transactions.no_transaction, transactions.id_user, products.product_name from transactions JOIN products on transactions.id = products.id ORDER BY created_time DESC';
            conn.query(qs, (err, data) => {
                if(!err){
                    ressolve(data);
                }else {
                    reject(err);
                }
            });
        });
    }
}