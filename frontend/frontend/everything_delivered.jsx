import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  console.log("check");
  const root = document.getElementById('root');

  let _preExistingState = {};

  if (localStorage.getItem('user')) {
    _preExistingState['user'] = JSON.parse(localStorage.getItem('user'));
  }

  if (localStorage.getItem('cart')) {
    _preExistingState['cart'] = JSON.parse(localStorage.getItem('cart'));
  }

  const store = configureStore(_preExistingState);

  ReactDOM.render(<Root store={ store } />, root);
});
