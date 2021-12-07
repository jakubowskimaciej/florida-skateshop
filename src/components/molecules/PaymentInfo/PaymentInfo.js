import React from 'react';
import { TestInfoWrapper } from './PaymentInfo.styles';

const PaymentInfo = () => {
  return (
    <TestInfoWrapper>
      <h2>*For payment test please use the following card numbers:*</h2>
      <p>4242 4242 4242 4242</p>
      <p>Date: any future date</p>
      <p>CVC: any 3 digits</p>
    </TestInfoWrapper>
  );
};

export default PaymentInfo;
