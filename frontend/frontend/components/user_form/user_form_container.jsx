import { connect } from 'react-redux';
import UserForm from './user_form.jsx';
import {receiveUser, setAddress, setName, setPhone } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
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
)(UserForm);
