//connection to database
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@#OnePiece007',
    database: 'test'
})

conn.connect((err) => {
    if(err) throw err;
    console.log("Database Connected");
})

module.exports = conn;