var express = require('express');
var mongoose = require('mongoose');
var router = require('./routes');
var app = express();

// connect to mongoose when the app initializes
mongoose.connect('mongodb://mainuser:qwerty12!@ds133291.mlab.com:33291/order-everything');

app.use(router);

console.log(process.env);
var port = process.env.PORT || 3000;
app.listen(3000, function () {
  console.log('Server is listening on port 3000!')
})
