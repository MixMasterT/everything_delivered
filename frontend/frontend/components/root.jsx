import React from 'react';
import { Provider } from 'react-redux';

import App from './app.jsx';

const Root = ({ store }) => {
  window.store = store
  //TODO When frontend done, remove store from window
return (<Provider store={ store }>
    <App />
  </Provider>)
}

export default Root;
