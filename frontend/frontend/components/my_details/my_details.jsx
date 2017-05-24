import React from 'react';

class MyDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: this.props.address,
      name: this.props.name,
      phone: this.props.phone,
      saved: true
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
    //show user the information is saved
    this.setState({ saved: true });
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value, saved: false })
  }
}

renderSaved() {
  if (this.state.saved) {
    return (<span id="checkmark">✓</span>)
  }
}

  render() {
    return (
      <div className="user-form">
        <form onSubmit={ this.handleSubmit }>
          <input type='text'
            onChange={this.handleChange('name')}
            placeholder="Name"
            value={this.state.name}/>
          <input type='text'
            onChange={this.handleChange('address')}
            placeholder="Address"
            value={this.state.address} />
          <input type='text'
            onChange={this.handleChange('phone')}
            placeholder="Phone Number"
            value={this.state.phone}/>
          <input type='submit' value='save' />
        </form>
        {this.renderSaved()}
      </div>
    );
  }
}

export default MyDetails;
