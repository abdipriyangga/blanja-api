//connection to database
const mysql = require('mysql');

const {HOST, DB, USER, PASS} = process.env;
console.log(USER);
const conn = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASS,
    database: DB
});

conn.connect((err) => {
    if(err) throw err;
    console.log("Database Connected");
})

module.exports = conn;