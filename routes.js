var express = require('express');
var router = express.Router();

// Import different controllers
var orderAPI = require('./controllers/orders_api.js');
var itemsAPI = require('./controllers/items_api.js');
var usersAPI = require('./controllers/users_api.js');

// Request phone verification
router.post('/request/', usersAPI.requestPhoneVerification);
// Verify code from phone
router.post('/verify/', usersAPI.verifyPhoneToken);


// initial order creation by user
router.post('/checkout', orderAPI.userPlaceOrder);

// get list of all items
router.get('/', itemsAPI.listAll);
router.post('/', itemsAPI.newItem);
// router.put('/', itemsAPI.updateItem);
router.get('/:itemId', itemsAPI.listOne);


module.exports = router;
