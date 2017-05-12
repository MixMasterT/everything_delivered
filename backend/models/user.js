var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var userSchema = new Schema({
    _userid:  {type: Schema.Types.ObjectId},
    phoneNumber: {type: String},
    name: {type: String},
    address: {type: String},
    loc: {
      type: {type: String},
      coordinates: [Number],  // [<longitude>, <latitude>]
    },
});

userSchema.index({loc: '2dsphere'});

module.exports = mongoose.model('User', userSchema);
