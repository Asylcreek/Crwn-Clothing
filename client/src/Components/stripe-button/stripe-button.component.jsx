import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios';

import './stripe-button.styles.scss';

const StripeCheckoutButton = (props) => {
  const priceForStripe = props.price * 100;
  const publishableKey =
    'pk_test_51HIX2GDBZU9bB8f5zOjozXNu65e9qmdzwnvVjZZCA9LfPQlhHM8Ynvdy1dUv4JTIMEn9w2epM6OYQkAXIwH8FeLb00hyLgGIVt';

  const onToken = async (token) => {
    try {
      // await axios.post('/payment', {
      //   amount: priceForStripe,
      //   token,
      // });
      console.log(token);
      alert('Payment Successful');
    } catch (err) {
      console.log(err);
      alert(
        'There was an issue with your payment, please make sure you use the provided card details'
      );
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${props.price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
