var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var driverSchema = new Schema({
    _name:  {type: String},
    _driverId:  {type: String},
    phoneNumber: {type: String}
});

module.exports = mongoose.model('Driver', driverSchema);
