/* The API controller
   Exports 3 methods:
   * post - Creates a new Order
   * list - Returns a list of all Orders
   * show - Displays a vendor and its Orders
*/


var Order = require('../models/order.js');

exports.post = function(req, res) {
  new Order({
    _uId: req.body._uId,
    _dId: req.body._dId,
    total: req.body.total,
    items: req.body.items,
    address: req.body.address,
    loc: req.body.loc,
    scheduledDeliverTime: req.body.scheduledDeliverTime,
  }).save();
}

exports.list = function(req, res) {
  Orders.find(function(err, orders) {
    res.send(orders);
  });
}

// first locates a order by user.
exports.showByUser = function(req, res) {
  Orders.findById({_uId: req.params._uId}, function(error, orders) {
    res.send(orders);
  });
};

//
exports.showByDriver = function(req, res) {
  Orders.findById({_dId: req.params._dId}, function(error, orders) {
    res.send(orders);
  });
};
