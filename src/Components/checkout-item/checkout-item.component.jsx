import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
} from '../../redux/cart/cart.actions';

const CheckoutItem = (props) => {
  const { imageUrl, name, quantity, price } = props.item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => props.deleteItemFromCart(props.item)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => props.addItemToCart(props.item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => props.removeCartItem(props.item)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeCartItem: (item) => dispatch(removeItemFromCart(item)),
  deleteItemFromCart: (item) => dispatch(deleteItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
