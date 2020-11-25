const transactionModels = require("../models/transaction");

module.exports = {
    transactionPost: (req,res) => {
        const {body} = req;
        const insertBody = {
            ...body,
            created_time: new Date(Date.now()),
            updated_time: new Date(Date.now())
        };
        transactionModels.transactionPost(insertBody) 
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
    transactionHistory : (_, res) => { 
        transactionModels.
        getTransactionHistory()
            .then((data) => {
                const resObj = {
                    msg: "Data Transaksi",
                    data: data
                };
                res.json(resObj);
            })
            .catch((err) => {
                res.json(err);
            })
    }
}