var express = require('express');
var router = express.Router();

//import different controllers
var orderApi = require('./controllers/orders_api.js');
var itemApi = require('./controllers/item_api.js');


router.post('/orders', orderApi.post);
router.get('/orders/:user ', orderApi.showByUser);
router.get('/orders/:driver ', orderApi.showByDriver);
router.get('/orders', orderApi.list);
router.get('/items', itemApi.list)


module.exports = router;
