var mysql = require('mysql2')
const dotenv = require("dotenv");
dotenv.config({
    path: './.env',
});

const db = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME
})

db.getConnection((err, res) => {
    if (err) throw err
    // console.log("Database connected!")
})

module.exports = db