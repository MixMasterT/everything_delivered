import React from 'react';
import TextConfirmation from '../text_confirmation/text_confirmation_container'

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>order form</h3>
        <TextConfirmation />
      </div>
    );
  }
}

export default OrderForm;
