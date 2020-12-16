const db = require("../configs/myDB");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const blackList = require('jwt-blacklist')(jwt); 
const saltRounds = 10;


module.exports = {

    postNewSellers : (body) => {
        return new Promise ((resolve, reject) => {
                bcrypt.genSalt(saltRounds, (err,salt) => {
                    if(err) {
                        reject(err);
                    } else {
                        bcrypt.hash(body.password, salt, (err,hashedPass) => {
                            if(err) {
                                reject(err);
                            }
                            else{
                                const newBody = {
                                    ...body, password: hashedPass
                                };
                                const qs = "Insert into sellers Set ?, level ='seller'"
                                db.query(qs, newBody, (err, data) => {
                                    if(!err){
                                        resolve(data);
                                    }else {
                                        reject(err);
                                    }
                                })
                            }
                        })
                    }
                })
            
        })
    },
    postLoginSeller : (body) => {
        return new Promise((resolve, reject) => {
            const qs = "Select password, level From sellers Where email=?";
            const {email, password} = body;
            db.query(qs, email, (err, data) => {
                if(err) {
                    reject({
                        msg: "ERROR SQL",
                        status: 500,
                        err
                    });
                }
                // else {
                //  console.log(data)
                //    resolve(data);
                // }
                if(!data[0]) {
                    reject({
                        msg : "User not Found",
                        status: 404
                    });
                }
                else {
                    bcrypt.compare(password, data[0].password, (err, result) => {
                        if(err){
                            reject({
                                msg: "Hash Error",
                                status: 500,
                                err
                            });
                        }
                        if(!result){
                            reject({
                                msg : "Wrong Password",
                                status: 401
                            });
                        }
                        else {
                            const payload = {
                                email,
                                level: data[0].level
                            };
                            const sk = process.env.SECRET_KEY;
                            const token = jwt.sign(payload, sk, {expiresIn:"1 days"});
                            resolve({
                                msg: "Login Berhasil",
                                loginToken: token
                            });
                        }
                    })
                }
                
            })
        })
    },
    postNewCustomers : (body) => {
        return new Promise ((resolve, reject) => {
                bcrypt.genSalt(saltRounds, (err,salt) => {
                    if(err) {
                        reject(err);
                    } else {
                        bcrypt.hash(body.password, salt, (err,hashedPass) => {
                            if(err) {
                                reject(err);
                            }
                            else{
                                const newBody = {
                                    ...body, password: hashedPass
                                };
                                const qs = "Insert into customers Set ?, level = 'customer'";
                                db.query(qs, newBody, (err, data) => {
                                    if(!err){
                                        resolve(data);
                                    }else {
                                        reject(err);
                                    }
                                })
                            }
                        })
                    }
                })
            
        })
    },
    postLoginCustomers : (body) => {
        return new Promise((resolve, reject) => {
            const qs = "Select password, level From customers Where email=?";
            const {email, password} = body;
            db.query(qs, email, (err, data) => {
                if(err) {
                    reject({
                        msg: "ERROR SQL",
                        status: 500,
                        err
                    });
                }
                // else {
                //  console.log(data)
                //    resolve(data);
                // }
                if(!data[0]) {
                    reject({
                        msg : "User not Found",
                        status: 404
                    });
                }
                else {
                    bcrypt.compare(password, data[0].password, (err, result) => {
                        if(err){
                            reject({
                                msg: "Hash Error",
                                status: 500,
                                err
                            });
                        }
                        if(!result){
                            reject({
                                msg : "Wrong Password",
                                status: 401
                            });
                        }
                        else {
                            const payload = {
                                email,
                                level: data[0].level
                            };
                            const sk = process.env.SECRET_KEY;
                            const token = jwt.sign(payload, sk, {expiresIn:"1 days"});
                            resolve({
                                msg: "Login Berhasil",
                                loginToken: token
                            });
                        }
                    })
                }
                
            })
        })
    },
    postLogout : (createBlacklist) => {
            return new Promise((resolve, reject) => {
                const qs = "Insert into blacklist_token Set ?";
                db.query(qs, createBlacklist, (err, data) => {
                    if(!err) {
                        resolve({
                            msg: "Logout Berhasil"
                        });
                    } else {
                        reject({
                            msg: "Maaf Anda tidak berhasil Logout"
                        });
                    }
                })
            })
        }
}
