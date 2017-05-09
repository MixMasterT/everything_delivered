var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var driverSchema = new Schema({
    _name:  {type: String},
    _driverId:  {type: Schema.Types.ObjectId},
    phoneNumber: {type: String}
});

module.exports = mongoose.model('Driver', driverSchema);
