import React from "react";
import { useDispatch } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  const dispatch = useDispatch();
  //const clearItemClickHandler = (item) => dispatch(clearItemFromCart(item));
  //const addItemClickHandler = (item) => dispatch(addItem(item));
  //const removeItemClickHandler = (item) => dispatch(removeItem(item));

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>

      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//     clearItem: item => dispatch(clearItemFromCart(item)),
//     addItem: item => dispatch(addItem(item)),
//     removeItem: item => dispatch(removeItem(item))
// })

export default CheckoutItem;
