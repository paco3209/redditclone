var express = require('express');
var routes = require('./routes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.text({ defaultCharset: "utf-8",
									type: "text/plain"}))

app.use('/api', routes);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

 mongoose.connect('localhost:27017/devcoffe');

module.exports = app;