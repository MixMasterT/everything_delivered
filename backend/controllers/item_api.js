var Item = require('../models/item.js');

// returns all items (sold or unsold)
exports.listAll = function(req, res) {
  Item.find(function(err, items) {
    res.send(items);
  });
}

exports.listOne = function(req, res) {
  Item.find({_id: req.params._id}, function(err, item) {
    res.send(item);
  });
}
