import React from 'react';
import { connect } from 'react-redux';

import './collectionPage.styles.scss';

import CollectionItem from '../../Components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = (props) => {
  return (
    <div className="collection-page">
      <h2 className="title">{props.collection.title}</h2>
      <div className="items">
        {props.collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
