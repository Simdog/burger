const express = require("express");
const router = express.Router();
const functionMain = require("../models/burger.js");

router.get("/", function (req, res) {
    functionMain.selectAll(function (input) {
        let result = {
            functionMain: input
        };
        res.render("index", result);
    });
});

router.put("/burgers", function (req, res) {
    functionMain.updateOne([], function (input) {
    });
});

router.post("/burgers", function (req, res) {
    functionMain.insertOne([], function (input) {
    });
});

module.exports = router;