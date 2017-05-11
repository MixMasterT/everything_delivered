var express = require('express');
var mongoose = require('mongoose');
var app = express();

// connect to mongoose when the app initializes
mongoose.connect('mongodb://mainuser:qwerty12!@ds133291.mlab.com:33291/order-everything');


// set up the RESTful API, handler methods are defined in type_api.js
var orderApi = require('./controllers/orders_api.js');
var itemApi = require('./controllers/item_api.js');

app.post('/orders', orderApi.post);
app.get('/orders/:user ', orderApi.showByUser);
app.get('/orders/:driver ', orderApi.showByDriver);
app.get('/orders', orderApi.list);
app.get('/items', itemApi.list)


app.listen(3000);
console.log("Express server listening on port %d");
