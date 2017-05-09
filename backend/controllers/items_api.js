var Item = require('../models/item.js');

// returns all items (sold or unsold)
exports.list = function(req, res) {
  Item.find(function(err, items) {
    res.send(items);
  });
}
