import React from 'react';
import { BrowserRouter, Route, history } from 'react-router-dom';

import NavBar from './nav_bar/nav_bar_container';
import List from './list/list_container';
import Cart from './cart/cart_container';

const App = ({ store }) => (
  <BrowserRouter>
    <div className='route-wrapper'>
      <Route path='/' component={ NavBar } />
      <Route exact path='/' component={ List } />
      <Route path='/cart' component={ Cart } />
    </div>
  </BrowserRouter>
);

export default App;
