import { connect } from 'react-redux';
import UserForm from './user_form.jsx';
import {receiveUser, setAddress, setName, setPhone } from '../../actions/user_actions';
import { addMessage } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  receiveUser: (user) => dispatch(receiveUser(user)),
  setAddress: (addr) => dispatch(setAddress(addr)),
  setName: (name) => dispatch(setName(name)),
  setPhone: (phone) => dispatch(setPhone(phone)),
  addMessage: (message) => dispatch(addMessage(message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
