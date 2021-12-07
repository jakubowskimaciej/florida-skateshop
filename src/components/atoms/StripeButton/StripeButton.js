import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_API_KEY;

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successfull');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="florida skateshop"
      billingAddress
      shippingAddress
      iamge="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
