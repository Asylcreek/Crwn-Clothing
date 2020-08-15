import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shopPage/shopPage.component';
import Header from './Components/header/header.component';
import SignIn from './Pages/signIn/signInPage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

function App(props) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) return props.setCurrentUser(null);

      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot((snapShot) => {
        props.setCurrentUser({ id: snapShot.id, ...snapShot.data() });
      });
    });

    return () => unsubscribeFromAuth();
  }, [props]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
