import React from 'react';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>order form</h3>
          <form onSubmit={ handleSubmit }>
            <input type='text' onChange={handleChange('phone')} placeholder="Phone Number"/>
            <input type='submit' value='save' />
          </form>
      </div>
    );
  }
}

export default OrderForm;
