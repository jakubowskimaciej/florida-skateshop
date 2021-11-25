import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checkout = () => {
  return (
    <Wrapper>
      <h1>Checkout view.</h1>
    </Wrapper>
  );
};

export default Checkout;
