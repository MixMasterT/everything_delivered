var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var itemSchema = new Schema({
    _name:  {type: String},
    _itemId: {type: Schema.Types.ObjectId},
    _vid: {type: String, ref: 'Vendor'},
    imgUrl: {type: String},
    price: {type: Number}
});

module.exports = mongoose.model('Item', itemSchema);
