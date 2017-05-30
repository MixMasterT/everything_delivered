import React from 'react';
import { Provider } from 'react-redux';

import App from './app.jsx';

//TODO Remove store from window
const Root = ({ store }) => {
  window.store = store
  return (
  <Provider store={ store }>
    <App />
  </Provider>
);
}

export default Root;
