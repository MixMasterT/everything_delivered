var MongooseSeed = require('mongoose-seed-db');
//import MongooseSeed from 'mongoose-seed-db';
var orderModel = require('../models/order.js');


MongooseSeed.connect('mongodb://localhost:27017/mongoose-seed').then(() => {
    MongooseSeed.loadModels(__dirname + '../models/order.js');
    MongooseSeed.clearAll().then(() => {
        MongooseSeed.populate(__dirname + './seed.json').then(() => {
            process.exit();
        });
    });
});
