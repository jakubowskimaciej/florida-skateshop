import React from 'react';
import { auth } from 'firebase/firebase.utils';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LinkWrapper, StyledLink, Wrapper } from './Navigation.styles';

const Navigation = ({ history }) => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  return (
    <Wrapper>
      <h1 onClick={() => history.push(`/`)}>
        <span>florida</span> skateshop
      </h1>
      <LinkWrapper>
        <StyledLink to={'/shop'}>shop</StyledLink>
        <StyledLink to={'/contact'}>contact</StyledLink>
        {currentUser ? (
          <StyledLink as="div" onClick={() => auth.signOut()}>
            sign out
          </StyledLink>
        ) : (
          <StyledLink to={'/sign-in'}>sign in</StyledLink>
        )}
        <StyledLink to={'/chart'}>chart</StyledLink>
      </LinkWrapper>
    </Wrapper>
  );
};

export default withRouter(Navigation);
