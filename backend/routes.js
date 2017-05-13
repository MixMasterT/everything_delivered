var express = require('express');
var router = express.Router();

//import different controllers
var orderApi = require('./controllers/orders_api.js');
var itemApi = require('./controllers/item_api.js');
var verifyApi = require('./controllers/verify_api.js');


// router.post('/orders', orderApi.post);
// router.get('/orders/:user ', orderApi.showByUser);
// router.get('/orders/:driver ', orderApi.showByDriver);
// router.get('/orders', orderApi.list);

router.get('/', itemApi.listAll);
router.get('/:_id', itemApi.listOne);
router.post('/checkout', verifyApi.beginVerify)

module.exports = router;
