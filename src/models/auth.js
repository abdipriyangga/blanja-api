const db = require("../configs/myDB");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const blackList = require('jwt-blacklist')(jwt); 
const saltRounds = 10;


module.exports = {

    postNewUser : (body) => {
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
                                const qs = "Insert into users Set ?"
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
    postLogin : (body) => {
        return new Promise((resolve, reject) => {
            const qs = "Select password From users Where email=?";
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
                            };
                            const sk = process.env.SECRET_KEY;
                            const token = jwt.sign(payload, sk);
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
    // postLogout: (body) => {
    //     const {email} = body;
    //     const payload = {
    //         email,

    //     };
    //     const sk = process.env.SECRET_KEY;
    //     const token = jwt.sign(payload, sk, {expiresIn: '1m'})
    // }
}
