import React from 'react';
import { connect } from 'react-redux';
import ItemDetail from './item_detail.jsx';

const mapStateToProps = (state, ownProps) => {
  //TESTING ONLY
  let items = [{name: 'ItemName', _itemId: 'Recepient', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 1 },
  {name: 'ItemName', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 2 },
  {name: 'ItemName', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 3 },
  {name: 'ItemName', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 4 },
  {name: 'ItemName', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 5 },
  {name: 'ItemName', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 6 },
  {name: 'ItemName', vid: 'VendorId', url: 'https://image.shutterstock.com/display_pic_with_logo/596689/225746563/stock-photo-hot-homemade-pepperoni-pizza-ready-to-eat-225746563.jpg', price: 19.99, id: 7 }];
let item = items.filter(item => item.id == ownProps.match.params.id)[0];
return { item }
}

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
