import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shopPage/shopPage.component';
import Header from './Components/header/header.component';
import SignIn from './Pages/signIn/signInPage';

import { auth } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribeFromAuth();
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
