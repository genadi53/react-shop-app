import React from "react";
// import { connect } from "react-redux";
// import { addItem } from "../../redux/cart/cart.actions.js";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.scss";

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const [addItemToCart, { data }] = useMutation(ADD_ITEM_TO_CART);
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        inverted //onClick={() => addItem(item)}>
        onClick={() => {
          addItemToCart({ variables: { item } });
          console.log(item);
        }}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   addItem: (item) => dispatch(addItem(item)),
// });

//export default connect(null, mapDispatchToProps)(CollectionItem);
export default CollectionItem;
