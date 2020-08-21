import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = (props) => {
  const priceForStripe = props.price * 100;
  const publishableKey =
    'pk_test_51HIX2GDBZU9bB8f5zOjozXNu65e9qmdzwnvVjZZCA9LfPQlhHM8Ynvdy1dUv4JTIMEn9w2epM6OYQkAXIwH8FeLb00hyLgGIVt';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
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
