import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.cart }
  }

  renderItems() {
    return (
      <ul className="cart-items">
        {this.state.items.map((item, i) =>
          <section key={i}>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li><strong> + </strong><strong> - </strong></li>
          </section>
      )}
      </ul>
    )
  }

  render() {
    console.log(this.state);
    return (
      <section className="cart">
        {this.renderItems()}
      </section>
    );
  }
}

export default Cart;
