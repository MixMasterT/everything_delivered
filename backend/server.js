var express = require('express');
var mongoose = require('mongoose');
var app = express();

// connect to mongoose when the app initializes
mongoose.connect('mongodb://localhost/test');


// set up the RESTful API, handler methods are defined in api.js
var api = require('./controllers/orders_api.js');
app.post('/orders', api.post);
app.get('/orders/:vendor ', api.show);
app.get('/orders', api.list);

app.listen(3000);
console.log("Express server listening on port %d");
