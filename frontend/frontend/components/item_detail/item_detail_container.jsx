import React from 'react';
import { connect } from 'react-redux';
import ItemDetail from './item_detail.jsx';

const mapStateToProps = (state, ownProps) => {
  let items = [{name: 'ItemName', _itemId: 'Recepient', vid: 'VendorId', url: 'imageurl', price: 19.99, id: 1 },
{name: 'ItemName' vid: 'VendorId', url: 'imageurl', price: 19.99, id: 2 },
{name: 'ItemName' vid: 'VendorId', url: 'imageurl', price: 19.99, id: 3 },
{name: 'ItemName' vid: 'VendorId', url: 'imageurl', price: 19.99, id: 4 },
{name: 'ItemName' vid: 'VendorId', url: 'imageurl', price: 19.99, id: 5 },
{name: 'ItemName' vid: 'VendorId', url: 'imageurl', price: 19.99, id: 6 },
{name: 'ItemName' vid: 'VendorId', url: 'imageurl', price: 19.99, id: 7 }];
let obj = items.filter(item => item.id = ownProps.params.id)[0];
console.log(obj);
return {item: obj}
}

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
