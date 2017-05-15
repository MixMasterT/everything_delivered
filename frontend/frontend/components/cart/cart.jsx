import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.cart }
  }

  renderItems() {
    return (
      <ul className="cart-list">
        {this.state.items.map((item, i) =>
          <section key={i} className="cart-item">
          <li>{item.name}</li>
          <li>{item.price}</li>
          <section className="change-quantity">
            <span id="remove-item"> + </span>
            <span id="add-item"> - </span>
          </section>
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
