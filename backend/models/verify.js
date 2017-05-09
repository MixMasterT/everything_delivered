var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var verifySchema = new Schema({
    _pin:  {type: String, unique: true},
    _orderId: {type: string},
});

module.exports = mongoose.model('Verify', verifySchema);
