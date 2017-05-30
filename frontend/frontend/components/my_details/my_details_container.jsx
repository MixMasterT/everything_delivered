import React from 'react';
import { connect } from 'react-redux';
import MyDetails from './my_details.jsx';
import {receiveUser, setAddress, setName, setPhone } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  // your code here...
  phone: state.user ? state.user.phone : '',
  address: state.user ? state.user.address : '',
  name: state.user ? state.user.name : ''
});

const mapDispatchToProps = dispatch => ({
  receiveUser: (user) => dispatch(receiveUser(user)),
  setAddress: (addr) => dispatch(setAddress(addr)),
  setName: (name) => dispatch(setName(name)),
  setPhone: (phone) => dispatch(setPhone(phone))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDetails);
