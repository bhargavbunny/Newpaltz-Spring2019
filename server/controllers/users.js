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
    console.log(req, res)
    user.add({ Person_Id: "03",F_name: "bhargavbunny", L_name: "konapalli" }, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});


module.exports = app;
