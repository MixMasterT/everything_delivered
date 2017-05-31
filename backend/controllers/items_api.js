var Item = require('../models/item.js');
var Vendor = require('../models/vendor.js');
// returns all items (sold or unsold)

// var itemSchema = new Schema({
//     _name:  {type: String},
//     _itemId: {type: Schema.Types.ObjectId},
//     _vid: {type: String, ref: 'Vendor'},
//     imgUrl: {type: String},
//     price: {type: Number}
// });

exports.post = function(req, res) {
  new Item({
    _vid: req.body._vid,
    _name: req.body._name,
    _itemId: req.body._itemId,
    imgUrl: req.body.imgUrl,
    price: req.body.price
  }).save();
}

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
//find Vendor that corresponds to item
exports.listVendor = function(req, res) {
  let foundItem = Item.find({ id: req.params._id });
  if (foundItem) {
    //find or findById ?
    Vendor.find({_vid: foundItem._id }, function(err, ven) {
      res.send(ven);
    })
  }
}
