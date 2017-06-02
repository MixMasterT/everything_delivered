var Item = require('../models/item.js');
var Vendor = require('../models/vendor.js');

exports.newItem = function(req, res) {
  new Item({
    _vid: req.body._vid,
    _name: req.body._name,
    _itemId: req.body._itemId,
    imgUrl: req.body.imgUrl,
    price: req.body.price
  }).save();
  //add error handling with .catch
}

// exports.updateItem

exports.listAll = function(req, res) {
  Item.find(function(err, items) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.send(items);
    }
  });
}

exports.listOne = function(req, res) {
  Item.find({_id: req.params._id}, function(err, item) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.send(item);
    }
  });
}
//find Vendor that corresponds to item
exports.listVendor = function(req, res) {
  let foundItem = Item.find({ id: req.params._id });
  if (foundItem) {
    //find or findById ?
    Vendor.find({_vid: foundItem._id }, function(err, ven) {
      if (err) {
        console.log(err);
        throw err;
      } else {
        res.send(ven);
      }
    });
  }
}
