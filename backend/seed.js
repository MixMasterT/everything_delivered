const fs = require('fs');
const mongoose = require('mongoose');
const config = require('./config.js');
const Item = require('./models/item.js');
const Vendor = require('./models/vendor.js');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/test', err => {
  if (err) { throw err }
});

const db = mongoose.connection;
//reset collections
db.once('open', () => {
  Vendor.remove({}, (err) => console.log('vendors reset'));
  Item.remove({}, (err) => console.log('items reset'))
});


function genVendor(amt, cb) {
  var totalCompanies = [];
  var names = `Tim's K-Shop Tommy's Jimbo's GreenCA Lantern GreenCross Dynamo UtilsX JPrint
  PizzaShop WalShop S-MART Starbricks Subwizzle SammyJe John's Albert's Asut Filer Xavier
  Gomeo Hilba Craig Robinson ZTEX Phona Bonaphone Stripe Thred Uber Sprice GoPro Lightsspeed
  OpenTable Akatana Goalabook Segment Dockers SolarTown MDNY PayBuddy Gipher NYCT Everlane
  Bloombug Thomey Capital Two Katana Goalbook iTube Gaggle Dropbux Slick MyFace FaceSpace
  MyBook FaceGram InstaFace SnapGram ChatFace ChatGram InstaChatFace LinkedOn FaceLink
  General Everything AlllTha Stipers Integrity Eloquence Wallama RedBud Budly Balla`.split(' ');

  var suffix = `Electronics Trinkets Inc LMT Limited LLC Incorporated Corporation United Media
  Solutions Motors Ecommerce Academy TM Business Shop App`.split(' ');

  var webs = `.com .org .net .io .online .gov .edu .tk`.split(' ');

  for (var i = 1; i <= amt; i++) {
    let company = names[Math.floor(Math.random() * names.length)] + ' ' +
    suffix[Math.floor(Math.random() * suffix.length)];
    let website = "http://www." + company.replace(/\s+/, '') + webs[Math.floor(Math.random() * webs.length)];
    let img = "http://www.google.com";
    let current = { _name: company, url: website, imgUrl: img }
    totalCompanies.push(current);
  }
  cb(totalCompanies);
  return totalCompanies;
}

function genItems(amt, vIds, complete) {
  var totalItems = [];
  var itemPrefix = `Red Green Blue Yellow Orange Magenta Pink Purple Maroon Black White
  Tan Sandy EggWhite Tortilla Big Huge Small Tiny Medium Itsy Grey Soft 8-Pack 12-Pack 4-Pack
  20-pack 30-pack Top Quality NameBrand TopBrand Delicious Lovely Greatest Scrumptious Family-Size
  Top-Tier Best-Deal Bargain`.split(' ');
  var itemSuffix = `Pizza, Soda, French-Fries, Shirt, Shoes, Pants, T-Shirt, Sweater, Hoodie,
  Jeans, Sneakers, Cap, Jersey, Headphones, Tacos, Burritos, Pho, Thai-Food, Sashimi, California-Roll,
  Watch, Glasses, Movies, Film, Beauty, Socks, Shampoo, Soap, Towel, Cleaner`.split(' ');
  for (var i = 1; i < amt; i++){
    let currentName = itemPrefix[Math.floor(Math.random() * itemPrefix.length)] +
    itemSuffix[Math.floor(Math.random() * itemSuffix.length)];
    let item = {
      name: currentName,
      _userId: i,
      _vid: vIds[Math.floor(Math.random() * vIds.length)],
      _price: (Math.random() * 100).toFixed(2),
      imgUrl: 'www.' + currentName.slice(0, 5).replace(/\s+/, '') + '.imgur.com'
    }
    totalItems.push(item);
  }
  complete(totalItems);
  return totalItems;
}
//declare how many Vendors to generate
var vendors = genVendor(50, writeVendors);
//callback to create DB instances upon generation
function writeVendors(vendors) {
  var vendorIds = [];
  vendors.forEach(v => {
    Vendor.create(v, (err) => {
      if (err) { throw err }
    }).then((obj) => {
      vendorIds.push(obj._id)
    });
  })
  itms = genItems(vendors.length, vendorIds, writeItems);
  generateJSON("seedFile2.json");
}

//callback to pass to generateItems function
function writeItems(itms) {
  itms.forEach(itm => {
    Item.create(itm, (err) => {
      if (err) { throw err }
    })
  })
}


//call to generate JSON file if needed
function generateJSON(filename){
  var stream = fs.createWriteStream(filename);
  stream.once('open', () => {
    stream.write("vendors: [")
    vendors.forEach(v => stream.write(JSON.stringify(v) + "," + "\n"));
    stream.write("]\n")
    stream.write("items: [")
    itms.forEach(i => stream.write(JSON.stringify(i) + "," + "\n"));
    stream.write("]\n")
    stream.end();
  });
}
