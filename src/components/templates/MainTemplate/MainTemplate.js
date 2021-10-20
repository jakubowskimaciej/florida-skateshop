import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/molecules/Navigation/Navigation';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 8rem 1fr;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
