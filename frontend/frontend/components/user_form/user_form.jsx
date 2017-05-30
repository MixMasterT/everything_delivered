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
    // verify phone number, send error if not valid

    // verify address, send error if not valid

    // set user
    this.props.receiveUser(this.state);
  }

  handleChange(field) {
    e => this.setState({ [field]: e.target.value })
  }

  render() {
    return (
      <div className="user-form">
        <form onSubmit={ handleSubmit }>
          <input type='text' onChange={handleChange('name')} placeholder="Name"/>
          <input type='text' onChange={handleChange('address')} placeholder="Address" />
          <input type='text' onChange={handleChange('phone')} placeholder="Phone Number"/>
          <input type='submit' value='save' />
        </form>
      </div>
    );
  }
}

export default UserForm;
