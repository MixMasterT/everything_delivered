var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var verifySchema = new Schema({
    _pin:  {type: String, unique: true},
    _orderId: {type: Schema.Types.ObjectId, ref: 'Order'}
});

module.exports = mongoose.model('Verify', verifySchema);
