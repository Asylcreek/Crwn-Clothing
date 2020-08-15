import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

import { toggleShowCart } from '../../redux/cart/cart.actions.js';

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleShowCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleShowCart: () => dispatch(toggleShowCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
