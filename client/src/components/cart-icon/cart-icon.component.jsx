import React from "react";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
// import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";
import { createStructuredSelector } from "reselect";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import "./cart-icon.scss";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const CartIcon = ({ /*toggleCartHidden,*/ itemCount }) => {
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

// const mapStateToProps = ({ cart: { cartItems }}) => ({
//     itemCount: cartItems.reduce( (accumalatedQuantity, cartItem) =>
//     accumalatedQuantity + cartItem.quantity, 0)
// })

export default connect(mapStateToProps)(CartIcon);
