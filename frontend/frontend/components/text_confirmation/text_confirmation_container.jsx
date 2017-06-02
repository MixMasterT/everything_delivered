import React from 'react';
import { connect } from 'react-redux';
import TextConfirmation from './text_confirmation';
import { requestToken } from '../../util/text_confirmation_util'

const mapStateToProps = (state, ownProps) => ({
  requestToken: (phoneNumber) => requestToken(phoneNumber)
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextConfirmation);
