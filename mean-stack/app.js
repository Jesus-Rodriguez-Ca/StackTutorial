var express = require('express');
var app = express();
app.get('/', function (req, res) {
 res.send('Hello World! This is a web app demonstration using Express.js!');
});
app.listen(3000, function () {
 console.log('App listening on port 3000!');
});