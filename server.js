var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var path = process.cwd();


app.use(express.static('public'));

app.get("/", function(req,res) {
    res.sendFile(path+'/public/index.html');



});

app.get("/2", function(req,res) {
    res.sendFile(path+'/public/index2.html');



});


app.listen(8000);