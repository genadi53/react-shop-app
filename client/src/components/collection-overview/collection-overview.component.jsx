import React from "react";
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

import CollectionPreview from "../collection-preview/collection-preview.component";
import Spinner from "../spinner/spinner.component";
import "./collection-overview.scss";

const GET_COLLECTIONS = gql`
  query {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverview = () => {
  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return `Error! ${error.message}`;
  }

  return (
    <div className="collections-overview">
      {data.collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
// import React from "react";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
// import CollectionPreview from "../collection-preview/collection-preview.component";

// import "./collection-overview.scss";

// const CollectionOverview = ({ collections }) => (
//   <div className="collection-overview">
//     {collections.map(({ id, ...collectionProps }) => (
//       <CollectionPreview key={id} {...collectionProps} />
//     ))}
//   </div>
// );

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollectionsForPreview,
// });

// export default connect(mapStateToProps)(CollectionOverview);
