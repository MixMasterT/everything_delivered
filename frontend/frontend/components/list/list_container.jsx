import React from 'react';
import { connect } from 'react-redux';
import List from './list.jsx';

const mapStateToProps = (state, ownProps) => ({
  items: [{name: 'ItemName', _itemId: 'Recepient', vid: 'VendorId', url: 'https://vignette2.wikia.nocookie.net/uncyclopedia/images/f/f4/Pizza.png/revision/latest?cb=20080107005924', price: 19.99, id: 1 },
{name: 'ItemName', vid: 'VendorId', url: 'https://vignette2.wikia.nocookie.net/uncyclopedia/images/f/f4/Pizza.png/revision/latest?cb=20080107005924', price: 14.99, id: 2 },
{name: 'ItemName', vid: 'VendorId', url: 'https://vignette2.wikia.nocookie.net/uncyclopedia/images/f/f4/Pizza.png/revision/latest?cb=20080107005924', price: 11.29, id: 3 },
{name: 'ItemName', vid: 'VendorId', url: 'https://vignette2.wikia.nocookie.net/uncyclopedia/images/f/f4/Pizza.png/revision/latest?cb=20080107005924', price: 1.99, id: 4 },
{name: 'ItemName', vid: 'VendorId', url: 'https://vignette2.wikia.nocookie.net/uncyclopedia/images/f/f4/Pizza.png/revision/latest?cb=20080107005924', price: 13.99, id: 5 },
{name: 'ItemName', vid: 'VendorId', url: 'https://vignette2.wikia.nocookie.net/uncyclopedia/images/f/f4/Pizza.png/revision/latest?cb=20080107005924', price: 2.00, id: 6 },
{name: 'ItemName', vid: 'VendorId', url: 'https://vignette2.wikia.nocookie.net/uncyclopedia/images/f/f4/Pizza.png/revision/latest?cb=20080107005924', price: 22.99, id: 7 }]
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
