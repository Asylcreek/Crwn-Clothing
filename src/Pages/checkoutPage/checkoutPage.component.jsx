import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkoutPage.styles.scss';

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

      <div className="total">
        <span>TOTAL: ${props.totalCost}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCost: selectTotalCartItemsCost,
});

export default connect(mapStateToProps)(CheckoutPage);
