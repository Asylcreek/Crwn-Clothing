import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection-overview.styles.scss';

import CollectionPreview from '../../Components/preview-collection/preview-collection.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = (props) => {
  return (
    <div className="collections-overview">
      {props.collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
