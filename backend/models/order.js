var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var orderSchema = new Schema({
    _orderId:  {type: Schema.Types.ObjectId},
    _uId:  {type: String}
    _dId:  {type: String}
    total:  {type: Number}
    items:  {type: Object}
    address: {type: String}
    loc: {
      type: "Point",
      coordinates: [Number],  // [<longitude>, <latitude>]
      index: '2dsphere'
    }
    timePlaced: {type: Date, default: Date.now},
    scheduledDeliverTime: {type: Date},
    timeDelivered: {type: Date}
});

module.exports = mongoose.model('Order', orderSchema);
