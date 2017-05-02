/* The API controller
   Exports 3 methods:
   * post - Creates a new Order
   * list - Returns a list of all Orders
   * show - Displays a vendor and its Orders
*/


var Order = require('../models/order.js');

exports.post = function(req, res) {
    new Order({vendor: req.body.vendor,
      recipient: req.body.recipient,
      address: req.body.address}).save();
}

exports.list = function(req, res) {
  Orders.find(function(err, orders) {
    res.send(orders);
  });
}

// first locates a order by vendor.
exports.show = (function(req, res) {
    Orders.findById({vendor: req.params.vendor}, function(error, orders) {
          res.send(orders);
        });
});
