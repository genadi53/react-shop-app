import React from "react";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
// import { selectCartItems } from "../../redux/cart/cart.selectors";
// import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.scss";
const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdown = ({ /*cartItems,*/ history /*dispatch*/ }) => {
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);
  const { data } = useQuery(GET_CART_ITEMS);
  const { cartItems } = data;
  console.log(cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          //dispatch(toggleCartHidden());
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
// });

// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// });

// const mapStateToProps = ({ cart: { cartItems }}) => ({
//     cartItems
// });

//export default withRouter(connect(mapStateToProps)(CartDropdown));
export default withRouter(CartDropdown);
