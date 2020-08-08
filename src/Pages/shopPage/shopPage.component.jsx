import React from 'react';
import { withRouter } from 'react-router-dom';

import shopData from './shop.data';
import CollectionPreview from '../../Components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map((collection) => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(ShopPage);
