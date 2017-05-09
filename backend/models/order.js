var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var orderSchema = new Schema({
    _orderId:  {type: Schema.Types.ObjectId},
    _uId:  {type: Schema.Types.ObjectId, ref: 'User'},
    _dId:  {type: Schema.Types.ObjectId, ref: 'Driver'},
    total:  {type: Number},
    items:  [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    address: {type: String},
    loc: {
      type: {type: String},
      coordinates: [Number],  // [<longitude>, <latitude>]
    },
    timePlaced: {type: Date, default: Date.now},
    scheduledDeliverTime: {type: Date},
    timeDelivered: {type: Date}
});

orderSchema.index({loc: '2dsphere'});

module.exports = mongoose.model('Order', orderSchema);
