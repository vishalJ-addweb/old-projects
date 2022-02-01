var express = require('express');
var path = require('path');
var _a = require('express-validator'), body = _a.body, validationResult = _a.validationResult, check = _a.check;
var upload = require('express-fileupload');
var EventEmitter = require('events');
// const event = new EventEmitter();
var fs = require('fs');
var stringify = require('querystring').stringify;
var app = express();
// Use public folder for static files
app.use(express.static('public'));
// PUG SPECIFIC STUFF(set view engine as pug)
app.set('view engine', 'ejs'); //set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //set the view directory
// Middleware to get html/pug form data 
app.use(express.json());
app.use(express.urlencoded());
// use of fileupload function
// app.use(upload());
// End points
app.post('/', res.render('form', { data: stringify(req.body) }));
console.log(req.body);
// data=req.body;
var data = JSON.stringify(req.body);
fs.appendFileSync('data.txt', data, function (err) {
    if (err) {
        throw err;
    }
    console.log('JSON data saved');
});
// listen on port
app.listen(4005, function () {
    console.log("Server started on 4005");
});
