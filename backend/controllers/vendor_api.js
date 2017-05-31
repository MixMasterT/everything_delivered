var Vendor = require('../models/vendor.js');

exports.listAll = function(req, res) {
  Vendor.find(function(err, items) {
    res.send(vendors);
  });
}

exports.listOne = function(req, res) {
  Vendor.find({_id: req.params._id}, function(err, item) {
    res.send(vendor);
  });
}
