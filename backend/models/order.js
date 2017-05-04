var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var orderSchema = new Schema({
    vendor:  String,
    orderdate: {type: Date, default: Date.now},
    recipient: {type: String},
    address: {type: String}
});

module.exports = mongoose.model('Test', orderSchema);
