import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleShowCart } from '../../redux/cart/cart.actions';

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.cartItems.length ? (
          props.cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <Button
        handleClick={() => {
          props.history.push('/checkout');
          props.dispatch(toggleShowCart());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
