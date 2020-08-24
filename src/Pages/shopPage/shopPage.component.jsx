import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../Components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collectionPage/collectionPage.container';

const ShopPage = (props) => {
  const { fetchCollectionsStartAsync } = props;

  React.useEffect(() => fetchCollectionsStartAsync(), [
    fetchCollectionsStartAsync,
  ]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${props.match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${props.match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
