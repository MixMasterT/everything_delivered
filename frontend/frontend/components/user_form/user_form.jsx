import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    //dispatch actions
  }

  handleChange() {
    //set field
  }

  render() {
    return (
      <div className="user-form">
        <form onSubmit={ handleSubmit }>
          <input type='text' onChange={() => handleChange('name')} />
          <input type='text' onChange={() => handleChange('address')} />
          <input type='text' onChange={() => handleChange('phone')} />
        </form>
      </div>
    );
  }
}

export default UserForm;
