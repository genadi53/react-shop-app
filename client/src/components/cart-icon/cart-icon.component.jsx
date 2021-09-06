import React from "react";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";

import "./cart-icon.scss";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  const toggleCartHiddenHandler = () => dispatch(toggleCartHidden());

  return (
    <div className="cart-icon" onClick={toggleCartHiddenHandler}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount,
// });

// const mapStateToProps = ({ cart: { cartItems }}) => ({
//     itemCount: cartItems.reduce( (accumalatedQuantity, cartItem) =>
//     accumalatedQuantity + cartItem.quantity, 0)
// })

export default CartIcon;
