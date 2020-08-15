import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

import { toggleShowCart } from '../../redux/cart/cart.actions.js';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleShowCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{props.itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowCart: () => dispatch(toggleShowCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
