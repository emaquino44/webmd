var express = require('express');
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
    db.symptoms.findAll().then(function(symptom) {
        res.render("symptoms/all", { symptoms: symptom });
    });
});

router.post("/", function(req, res) {
    console.log(req.body);
    db.symptoms.create(req.body).then(function(symptoms) {

        res.redirect("symptoms");
    }).catch(function(error) {
        console.log("Error happened", error);
        res.send("ERROR");
    });

});

router.get("/add", function(req, res) {
    res.sender("symptoms/add");
});

module.exports = router;
