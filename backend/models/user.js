var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
const config = require('../config');
const authy = require('authy')(config.authyKey);
const twilioClient = require('twilio')(config.accountSid, config.authToken);

var UserSchema = new Schema({
    _userid:  {type: Schema.Types.ObjectId},
    phoneNumber: {type: String, unique: true},
    countryCode: {type: String},
    name: {type: String},
    address: {type: String},
    authyId: {type: String},
    loc: {
      type: {type: String},
      coordinates: [Number],  // [<longitude>, <latitude>]
    },
});

UserSchema.index({loc: '2dsphere'});

// sends any message you want, not necessary right now
UserSchema.methods.sendMessage = function(message, successCb, errorCb) {
      const self = this;
      const toNumber = `+${self.countryCode}${self.phoneNumber}`;

      twilioClient.messages.create({
          to: toNumber,
          from: config.twilioNumber,
          body: message,
      }).then(function() {
        successCb();
      }).catch(function(err) {
        errorCb(err);
      });
  };


module.exports = mongoose.model('User', UserSchema);
