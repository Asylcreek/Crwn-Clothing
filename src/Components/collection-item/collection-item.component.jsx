import React from 'react';
import { connect } from 'react-redux';

import './collection-item.style.scss';

import Button from '../button/button.component';
import { addItemToCart } from '../../redux/cart/cart.actions';

const CollectionItem = (props) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.item.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{props.item.name}</span>
        <span className="price">{props.item.price}</span>
      </div>
      <Button handleClick={() => props.addItemToCart(props.item)} inverted>
        Add to Cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
