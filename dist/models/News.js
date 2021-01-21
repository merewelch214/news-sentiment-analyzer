"use strict";
var mongoose = require("mongoose");
var schema = mongoose.Schema({
    source: String,
    date: Date,
    content: String,
    score: Number
});
module.exports = mongoose.model("Post", schema);
