import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      name: "",
      phone: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('handle submit fired');
    console.log('state: ', this.state);
    // verify phone number, send error if not valid

    // verify address, send error if not valid

    // set user
    this.props.receiveUser(this.state);
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
