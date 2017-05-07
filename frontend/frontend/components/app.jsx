import React from 'react';
import { BrowserRouter, Route, history } from 'react-router-dom';

import NavBar from './nav_bar/nav_bar_container';
import List from './list/list_container';

const App = ({ store }) => (
  <BrowserRouter>
    <div className='route-wrapper'>
      <Route path='/' component={ NavBar } />
      <Route path='/list' component={ List } />
    </div>
  </BrowserRouter>
);

export default App;
