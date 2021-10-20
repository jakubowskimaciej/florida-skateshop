import React from 'react';
import { withRouter } from 'react-router-dom';
import { LinkWrapper, StyledLink, Wrapper } from './Navigation.styles';

const Navigation = ({ history, match }) => {
  return (
    <Wrapper>
      <h1 onClick={() => history.push(`/`)}>
        <span>florida</span> skateshop
      </h1>
      <LinkWrapper>
        <StyledLink to={'/shop'}>SHOP</StyledLink>
        <StyledLink to={'/contact'}>CONTACT</StyledLink>
        <StyledLink to={'/sign-in'}>SIGN IN</StyledLink>
        <StyledLink to={'/chart'}>chart</StyledLink>
      </LinkWrapper>
    </Wrapper>
  );
};

export default withRouter(Navigation);
