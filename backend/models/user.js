var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
const config = require('../config');
const authy = require('authy')(config.authyKey);
console.log(authy);

var UserSchema = new Schema({
    _userid:  {type: Schema.Types.ObjectId},
    phoneNumber: {type: String},
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

UserSchema.methods.sendAuthyToken = function(cb) {
    const self = this;

    if (!self.authyId) {
        // Register this user if it's a new user
        authy.register_user(self.email, self.phoneNumber, self.countryCode,
            function(err, response) {
            if (err || !response.user) return cb.call(self, err);
            self.authyId = response.user.id;
            self.save(function(err, doc) {
                if (err || !doc) return cb.call(self, err);
                self = doc;
                sendToken();
            });
        });
    } else {
        // Otherwise send token to a known user
        sendToken();
    }

    // With a valid Authy ID, send the 2FA token for this user
    function sendToken() {
        authy.request_sms(self.authyId, true, function(err, response) {
            cb.call(self, err);
        });
    }
};

UserSchema.methods.verifyAuthyToken = function(otp, cb) {
    const self = this;
    console.log(authy);
    authy.verify(self.authyId, otp, function(err, response) {
        cb.call(self, err, response);
    });
};
// sends any message me want
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
