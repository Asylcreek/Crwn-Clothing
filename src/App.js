import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shopPage/shopPage.component';

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
