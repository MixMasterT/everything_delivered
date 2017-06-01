var Vendor = require('../models/vendor.js');

exports.listAll = function(req, res) {
  Vendor.find(function(err, items) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.send(vendors);
    }
  });
}

exports.listOne = function(req, res) {
  Vendor.find({_id: req.params._id}, function(err, item) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.send(vendor);
    }
  });
}
