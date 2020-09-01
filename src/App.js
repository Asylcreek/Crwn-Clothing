import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shopPage/shopPage.component';
import SignIn from './Pages/signIn/signInPage';
import CheckoutPage from './Pages/checkoutPage/checkoutPage.component';

import Header from './Components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';

function App(props) {
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

export default connect(mapStateToProps)(App);
