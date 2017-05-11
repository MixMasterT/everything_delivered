var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var userSchema = new Schema({
    _userid:  {type: Schema.Types.ObjectId},
    phoneNumber: {type: String},
    name: {type: String},
    address: {type: String},
    loc: {
      type: "Point",
      coordinates: [Number],  // [<longitude>, <latitude>]
      index: '2dsphere'
    }
});

module.exports = mongoose.model('User', orderSchema);
