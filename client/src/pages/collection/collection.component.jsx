import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

import CollectionItem from "../../components/collection-item/collection-item.component";
import Spinner from "../../components/spinner/spinner.component";

import "./collection.scss";

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

const CollectionPage = ({ match }) => {
  const { loading, data } = useQuery(GET_COLLECTION_BY_TITLE, {
    variables: { title: match.params.collectionId },
  });

  if (loading) return <Spinner />;

  const { getCollectionsByTitle } = data;
  const { title, items } = getCollectionsByTitle;

  if (data)
    return (
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
};

export default CollectionPage;
// import React from "react";
// import { connect } from "react-redux";

// import CollectionItem from "../../components/collection-item/collection-item.component";
// import { selectCollection } from "../../redux/shop/shop.selectors";
// import "./collection.scss";

// const CollectionPage = ({ collection }) => {
//   const { title, items } = collection;
//   return (
//     <div className="collection-page">
//       <h2 className="title">{title}</h2>
//       <div className="items">
//         {items.map((item) => (
//           <CollectionItem key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
// });

// export default connect(mapStateToProps)(CollectionPage);
