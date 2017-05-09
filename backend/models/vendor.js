var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var vendorSchema = new Schema({
    _name:  {type: String},
    _vendorId: {type: Schema.Types.ObjectId},
    url: {type: String},
    imgUrl: {type: String}
});

module.exports = mongoose.model('Item', vendorSchema);
