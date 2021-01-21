"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// const routes = require('./routes');
var app = express_1.default();
// app.use("/", routes)
app.get('/', function (req, res) {
    res.send('home');
});
app.listen(5000, function () {
    console.log("Server has started!");
});
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://meredith:hello123@cluster0.34mxa.mongodb.net/newsdb?retryWrites=true&w=majority";
var client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(function () {
    var collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
