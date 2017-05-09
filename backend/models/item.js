var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var itemSchema = new Schema({
    _userid:  {type: String},
    _itemId: {type: Schema.Types.ObjectId},
    _vid: {type: String},
    imgUrl: {type: String},
    price: {type: Number}
});

module.exports = mongoose.model('Item', itemSchema);
