import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

// import CollectionPageContainer from "../collection/collection.container";
// import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";

import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shopPage">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
