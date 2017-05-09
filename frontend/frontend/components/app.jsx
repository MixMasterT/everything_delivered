import React from 'react';
import { BrowserRouter, Route, history } from 'react-router-dom';

import NavBar from './nav_bar/nav_bar_container';
import List from './list/list_container';
import Cart from './cart/cart_container';
import ListItem from './list_item/list_item_container';
import MyDetails from './my_details/my_details_container';
import OrderForm from './order_form/order_form_container';
import styles from '../styles/main.scss';

const App = ({ store }) => (
  <BrowserRouter>
    <div className='route-wrapper'>
      <Route path='/' component={ NavBar } />
      <Route exact path='/' component={ List } />
      <Route path='/cart' component={ Cart } />
      <Route path="/item/:id" component={ ListItem } />
      <Route path="/mydetails" component={ MyDetails } />
      <Route path="/checkout" component={ OrderForm } />
    </div>
  </BrowserRouter>
);

export default App;
