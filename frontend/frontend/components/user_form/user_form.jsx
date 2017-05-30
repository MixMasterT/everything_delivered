import React from 'react';

import merge from 'lodash/merge';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = merge({
      address: "",
      name: "",
      phone: "",
    }, this.props.user);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // verify phone number, send error if not valid
    if (this.state.phone === '') {
      this.props.addMessage("Phone number can't be blank.")
    } else if (!this.state.phone.match(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/)) {
      this.props.addMessage('Phone number format invalid.');
    } else {
      this.props.receiveUser(this.state);
    }
    // verify address, send error if not valid

    // set user
  }

  handleChange(field) {
    return e => {
      console.log(`handle Change fired on ${field}`);
      this.setState({ [field]: e.target.value });
    }
  }

  render() {
    return (
      <div className="user-form">
        <form onSubmit={ this.handleSubmit }>

          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            onChange={this.handleChange('name')}
            value={this.state.name}
            placeholder='Name'
          />

          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            onChange={this.handleChange('address')}
            value={this.state.address}
            placeholder='Address'
          />

          <label htmlFor='phone'>Phone Number</label>
          <input
            type='text'
            id='phone'
            onChange={this.handleChange('phone')}
            value={this.state.phone}
            placeholder='phone number'
          />

          <input type='submit' value='save' />
        </form>
      </div>
    );
  }
}

export default UserForm;
