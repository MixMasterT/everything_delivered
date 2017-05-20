const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');
const config = require('./config');
const app = express();

// connect to mongoose when the app initializes
mongoose.connect('mongodb://mainuser:qwerty12!@ds133291.mlab.com:33291/order-everything');
mongoose.Promise = Promise;

// Parse incoming form-encoded HTTP bodies
app.use(bodyParser.urlencoded({
    extended: true,
}));

// Configure application routes
app.use(router);

console.log(process.env);
const port = process.env.PORT || 3000;
app.listen(config.port, function () {
  console.log('Server is listening on *:' + config.port);
})
