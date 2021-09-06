import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import axios from "axios";

import { clearCart, updateCartInFirebase } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price }) => {
  const dispatch = useDispatch();
  const clearCartHandler = () => dispatch(clearCart());
  const updateCartInFirebaseHandler = () => dispatch(updateCartInFirebase());

  const priceFroStripe = price * 100;
  const publishableKey =
    "pk_test_51IwpIGGsIir6ptzlwpkA7Acu7UuNkR6NNSaOGE4w4E7BGNNYOQMQsWLDAyQbJbca8rzTQYINltrmqpl6Kjg9bAEo00aqCaiIe9";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceFroStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("Payment Succesful!");
        clearCartHandler();
        updateCartInFirebaseHandler();
      })
      .catch((error) => {
        console.log("Payment Error: ", error.response);
        alert("There was an issue with your payment!");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Shelby Company Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg" //https://svgshare.com/i/CUz.svg https://sendeyo.com/up/d/f3eb2117da
      description={`Your total is ${price}`}
      amount={priceFroStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
// const mapDispatchToProps = (dispatch) => ({
//   clearCart: () => dispatch(clearCart()),
//   updateCartInFirebase: () => dispatch(updateCartInFirebase()),
// });

export default StripeCheckoutButton;
