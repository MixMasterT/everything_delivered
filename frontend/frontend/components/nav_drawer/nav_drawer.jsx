import React from 'react';

import { Link } from 'react-router-dom';

const NavDrawer = ({ navIsOpen, closeNav })=> (
  <div className='nav-bar'>
    <span className='close-ex' onClick={closeNav}>
      &times;
    </span>

    <ul className='nav-links'>
      <li onClick={closeNav}><Link to='/'>Main Menu</Link></li>
      <li onClick={closeNav}><Link to='my_details'>My Details</Link></li>
      <li onClick={closeNav}><Link to='cart'>Cart</Link></li>
      <li onClick={closeNav}><Link to='checkout'>Checkout</Link></li>
    </ul>
  </div>
)

export default NavDrawer;
