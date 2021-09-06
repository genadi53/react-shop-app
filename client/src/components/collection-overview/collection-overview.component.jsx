import React from "react";
import { useSelector } from "react-redux";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collection-overview.scss";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollectionsForPreview,
// });

export default CollectionOverview;
