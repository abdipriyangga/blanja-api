const authModel = require("../models/auth");
const form = require("../helpers/form");
let { createBlackList } = require("jwt-blacklist");

module.exports = {
    registerSellers: (req,res) => {
        const { body } = req;
        authModel.postNewSellers(body).then((data) => {
                form.success(res,{
                    msg: "Register berhaasil",
                    userData: {
                        name : body.name,
                        email : body.email,
                        phone : body.phone_number,
                        store : body.store_name
                    }
                });
        }).catch((err) => {
            form.error(res,err);
        });
    },
    loginSellers: (req, res) => {
        const {body} = req;
        authModel.postLoginSeller(body).then((data) => {
            form.success(res, data);
        }).catch((err) => {
            form.error(res, err);
        })
    },
    registerCustomers: (req,res) => {
        const { body } = req;
        authModel.postNewCustomers(body).then((data) => {
                form.success(res,{
                    msg: "Register berhaasil",
                    userData: {
                        name : body.name,
                        email : body.email
                    }
                });
        }).catch((err) => {
            form.error(res,err);
        });
    },
    loginCustomers: (req, res) => {
        const {body} = req;
        authModel.postLoginCustomers(body).then((data) => {
            form.success(res, data);
        }).catch((err) => {
            form.error(res, err);
        })
    },
    logout: (req, res) => {
        const bearerToken = req.header("x-access-token");
        if(!bearerToken) {
            res.json({
                msg: "Token Null"
            })
        } else {
            createBlackList = {
                token: bearerToken.split(" ")[1],
            }
        }
        authModel.postLogout(createBlackList).then((result) => {
            form.success(res, result);
        }).catch((error) => {
            form.error(res, error);
        })
    }
}