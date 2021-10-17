import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 9rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.2rem solid var(--color-white);
  color: var(--color-white);
  position: absolute;

  h2 {
    font-weight: 900;
    margin-bottom: 6px;
    font-size: 22px;
    text-transform: uppercase;
    z-index: 1;
  }

  span {
    font-weight: 400;
    font-size: 1.6rem;
    z-index: 1;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.55);
  }
`;

const ContentWrapper = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <span>show now</span>
    </Wrapper>
  );
};

export default ContentWrapper;
