import React from 'react';

class TextConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      console.log(`handle Change fired on ${field}`);
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.requestToken(this.state.phone)
  }

  render() {
    return (
        <form className='text-confirmation' onSubmit={this.handleSubmit}>
        <input type='text'
          className='text-confirmation'
          onChange={this.handleChange('phone')}
          value={this.state.phone}/>
        <input type='submit' className='text-confirmation'/>
      </form>
    );
  }
}

export default TextConfirmation;
