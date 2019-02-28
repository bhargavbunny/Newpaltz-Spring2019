const express = require('express');
const user = require('../models/user');

const app = express.Router();

app.get("/", (req, res) => {

    user.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.post("/", (req, res) => {

    user.add({ Person_Id : 01 , F_name: "bhargav", L_name: "reddy konapalli" }, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});


module.exports = app;
