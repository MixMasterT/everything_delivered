/* The API controller
   Exports 3 methods:
   * post - Creates a new Order
   * list - Returns a list of all Orders
   * show - Displays a vendor and its Orders
*/
const key = require('../config.js').gmapskey;
const googleMapsClient = require('@google/maps').createClient({key: key});
const Order = require('../models/order.js');

// initial order placing method
// need to derive address from location somehow.
exports.userPlaceOrder = function(req, res) {
  //example address format: '1600 Amphitheatre Parkway, Mountain View, CA'
  var newLoc = googleMapsClient.geocode({
    address: req.body.address
    }, function(err, response) {
      if (!err) {
        console.log(response.json.results);
      }});
  console.log(newLoc);
  new Order({
    _uId: req.body._uId,
    total: req.body.total,
    items: req.body.items,
    address: req.body.address,
    loc: newLoc,
  }).save();
}

// returns all orders
exports.list = function(req, res) {
  Orders.find(function(err, orders) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.send(orders);
    }
  });
}

// returns all orders made by a user
exports.showByUser = function(req, res) {
  Orders.findById({_uId: req.params._uId}, function(err, orders) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.send(orders);
    }
  });
};

// returns all orders made by a driver (open and completed)
exports.showByDriver = function(req, res) {
  Orders.findById({_dId: req.params._dId}, function(err, orders) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.send(orders);
    }
  });
};
