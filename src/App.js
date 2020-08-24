import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shopPage/shopPage.component';
import SignIn from './Pages/signIn/signInPage';
import CheckoutPage from './Pages/checkoutPage/checkoutPage.component';

import Header from './Components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

function App(props) {
  const { setCurrentUser } = props;

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) return setCurrentUser(null);

      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot((snapShot) => {
        setCurrentUser({ id: snapShot.id, ...snapShot.data() });
      });
    });

    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => (props.currentUser ? <Redirect to="/" /> : <SignIn />)}
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
