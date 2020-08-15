import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowCart: () => dispatch(toggleShowCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
