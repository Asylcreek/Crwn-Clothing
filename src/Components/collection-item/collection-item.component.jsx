import React from 'react';

import './collection-item.style.scss';

import Button from '../button/button.component';

const CollectionItem = (props) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{props.name}</span>
        <span className="price">{props.price}</span>
      </div>
      <Button inverted>Add to Cart</Button>
    </div>
  );
};

export default CollectionItem;
