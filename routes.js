var express = require('express');
var router = express.Router();

//import different controllers
var orderApi = require('./controllers/orders_api.js');
var itemsApi = require('./controllers/items_api.js');
var usersApi = require('./controllers/users_api.js');


router.post('/request/', usersApi.requestPhoneVerification);
router.post('/.*verify$/', usersApi.verifyPhoneToken);

router.get('/', itemsApi.listAll);
router.post('/', itemsApi.newItem);
// router.put('/', itemsApi.updateItem);
router.get('/:itemId', itemsApi.listOne);


module.exports = router;
