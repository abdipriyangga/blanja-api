const jwt = require("jsonwebtoken");
const form = require("../form");
const db = require("../../configs/myDB");

module.exports = {
    login: (req, res, next) => {
        const bearerToken = req.header("x-access-token");
        if (!bearerToken) {
          form.error(res, {
            msg: "Please Login First",
            status: 401,
          });
        } else {
          const token = bearerToken.split(" ")[1];
          return new Promise((resolve, reject) => {
            const qs = "Select token FROM blacklist_token WHERE token = ?";
            db.query(qs, token, (err, data) => {
              console.log(data);
              if (!err) {
                if (!data[0]) {
                  resolve(token);
                } else {
                  reject({
                    msg: "Invalid Token",
                  });
                }
              } else {
                reject({
                  msg: "Error SQL",
                });
              }
            });
          })
            .then((token) => {
              try {
                const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
                req.decodeToken = decodedToken;
                next();
              } catch (error) {
                form.error(res, {
                  msg: "Invalid Token",
                  error,
                  status: 401
                });
              }
            })
            .catch((error) => {
              form.error(res, {
                msg: "Invalid Token",
                error,
              });
            });
        }
      },
    seller: (req, res, next) => {
        const { level } = req.decodeToken;
        if (level !== "seller") {
          form.error(res, {
            status: 401,
            msg: `Unauthorized Access`,
            details: `You dont have permission to access this page.`,
          });
        } else {
          next();
        }
    }
    
}