const authModel = require("../models/auth");
const form = require("../helpers/form");

module.exports = {
    register: (req,res) => {
        const { body } = req;
        authModel.postNewUser(body).then((data) => {
                form.success(res,{
                    msg: "Register berhaasil",
                    userData: {
                        email : body.email
                    }
                });
            
            
        }).catch((err) => {
            form.error(res,err);
        });
    },
    login: (req, res) => {
        const {body} = req;
        authModel.postLogin(body).then((data) => {
            form.success(res, data);
        }).catch((err) => {
            form.error(res, err);
        })
    }
}