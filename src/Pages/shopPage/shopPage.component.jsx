import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../Components/collection-overview/collection-overview.component';
import CollectionPage from '../collectionPage/collectionPage.component';

const ShopPage = (props) => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${props.match.path}`}
        component={CollectionsOverview}
      />
      <Route
        path={`${props.match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
