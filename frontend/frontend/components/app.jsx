import React from 'react';
import { BrowserRouter, Route, history } from 'react-router-dom';

import NavBar from './nav_bar/nav_bar_container';
import List from './list/list_container';
import Cart from './cart/cart_container';
import ItemDetail from './item_detail/item_detail_container';
import UserForm from './user_form/user_form_container';
import OrderForm from './order_form/order_form_container';
import styles from '../styles/main.scss';

const App = ({ store }) => (
  <BrowserRouter>
    <div className='route-wrapper'>
      <Route path='/' component={ NavBar } />
      <Route exact path='/' component={ List } />
      <Route path='/cart' component={ Cart } />
      <Route path="/items/:id" component={ ItemDetail } />
      <Route path="/my_details" component={ MyDetails } />
      <Route path="/checkout" component={ OrderForm } />
    </div>
  </BrowserRouter>
);

export default App;
