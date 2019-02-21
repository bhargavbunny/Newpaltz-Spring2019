const mysql = require("mysql");
              require('dotenv').load()

const conn = mysql.createPool({
    host: "",
    user: "",
    password: "",
    database: "",
    connectionLimit: 10
})

module.exports = conn