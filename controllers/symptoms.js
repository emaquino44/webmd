var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
    db.symptom.findAll().then(function(symptoms) {
        res.render("symptoms/all", { symptoms: symptoms });
    });
});

router.post("/", function(req, res) {
    console.log(req.body);
    db.symptoms.create(req.body).then(function(symptom) {
        res.redirect("/symptoms");
    }).catch(function(error) {
        console.log("Error happened", error);
        res.send("ERROR");
    });

});

router.get("/add", function(req, res) {
    res.sender("symptoms/add");
});

router.get("/:id", function(req, res) {
    db.disease.findOne({
        where: { id: req.parmas.id },
        include: [db.disease]
    }).then(function(symptoms) {
        res.render("symptoms/show", { symptoms: symptoms });
    });
});

module.exports = router;
