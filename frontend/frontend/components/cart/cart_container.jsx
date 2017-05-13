import React from 'react';
import { connect } from 'react-redux';
import Cart from './cart.jsx';

//FOR TESTING ONLY
const mockCart = function() {
  let result = [];
  let items = [{name: 'Soda', _itemId: 'Recepient', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 1 },
  {name: 'Beer', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 2 },
  {name: 'Pizza', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 3 },
  {name: 'Car', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 4 },
  {name: 'Pasta', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 5 },
  {name: 'Sandwich', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 6 },
  {name: 'Coffee', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 7 }];
  var cartArr = [];
  var amount = Math.ceil(Math.random() * 10);
  for (var i = 0; i < amount; i++) {
    var curr = items[Math.floor(Math.random() * items.length - 1)];
    if (curr) { result.push(curr)}
  }
return result;
}

//TESING ONLY
const mapStateToProps = (state, ownProps) => ({
  cart: mockCart()
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
