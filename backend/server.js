var express = require('express');
var mongoose = require('mongoose');
var router = require('./router');
var app = express();

// connect to mongoose when the app initializes
mongoose.connect('mongodb://mainuser:qwerty12!@ds133291.mlab.com:33291/order-everything');

app.use(router);

app.listen(3000);
console.log("Express server listening on port %d");
