import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkoutPage.styles.scss';

import CheckoutItem from '../../Components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../Components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectTotalCartItemsCost,
} from '../../redux/cart/cart.selectors';

const CheckoutPage = (props) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {props.cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${props.totalCost}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments <br /> 4242 4242
        4242 4242, expiry date should be later than your current date, CVV can
        be any three digits
      </div>
      <StripeCheckoutButton price={props.totalCost} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCost: selectTotalCartItemsCost,
});

export default connect(mapStateToProps)(CheckoutPage);
