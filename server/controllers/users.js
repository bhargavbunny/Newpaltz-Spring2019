const express = require('express');
const conn = require('../models/mysql_connection')

const app = express.Router();

app.get("/", (req, res) => {
    conn.query()
    res.send([{FirstName: "Fake person"}]);

});


module.exports = app;