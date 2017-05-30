var Verify = require('../models/verify.js');
var User = require('../models/user.js');
var twilio = require('twilio');
<<<<<<< HEAD
=======

>>>>>>> 1578c3b0072986839e510bb227df04284ed6f79b
// var twilioKeys = require('../config.js')


//test keys direct to twilio test api and not real one.
// var accountSid = twilioKeys.test.sid;
// var authToken = twilioKeys.test.auth;

//beginVerify: creates a new entry into verify collection.
exports.beginVerify = function(req, res) {
  var newPin = Math.random().toString(36).substr(2, 5);
  User.find({ _id: req.body._uid }, function(err, user) {
    if(err) return handleError(err);

    new Verify({
      _pin: newPin,
      _orderId: req.body._id
    }).save();

    var client = new twilio(accountSid, authToken);
    console.log(client);

    client.messages.create({
      body: `${newPin}`,
      to: `${user.phoneNumber}`,
      from: `${twilioKeys.number}`
    }).then((message) => console.log(message));
  })
};

//endVerify: checks to see if pin entered matches pin in db. If so, it removes data and fires off order to delivery man.
exports.endVerify = function(req, res) {
  var currVerif = Verify.find({_orderId: req.body._orderId});
  var response
  if(currVerif._pin === req.body._pin) {
    Verify.remove({_orderId: req.body._orderId});
    //success
  } else {
    //failure
  }
}
