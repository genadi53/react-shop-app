import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceFroStripe = price * 100;
    const publishableKey = 'pk_test_51IwpIGGsIir6ptzlwpkA7Acu7UuNkR6NNSaOGE4w4E7BGNNYOQMQsWLDAyQbJbca8rzTQYINltrmqpl6Kjg9bAEo00aqCaiIe9';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
              amount: priceFroStripe,
              token: token  
            }
        }).then(response => {
            alert('Payment Succesful!');
        }).catch(error => {
            console.log('Payment Error: ', error.response);
            alert('There was an issue with your payment!');
        })
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Shelby Company Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={ priceFroStripe }
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={ publishableKey }
        />
    );
}

export default StripeCheckoutButton;