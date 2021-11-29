import React from 'react';
import { auth } from 'firebase/firebase.utils';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LinkWrapper, StyledLink, Wrapper } from './Navigation.styles';
import CartIcon from '../../atoms/CartIcon/CartIcon';
import CartDropdown from 'components/molecules/CartDropdown/CartDropdown';
import { selectCartHidden } from 'redux/cart/cart.selectors';

const Navigation = ({ history }) => {
  const { currentUser } = useSelector((state) => state.user);
  const hidden = useSelector(selectCartHidden);

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
        <StyledLink as="div">
          <CartIcon />
        </StyledLink>
      </LinkWrapper>
      {hidden ? null : <CartDropdown />}
    </Wrapper>
  );
};

export default withRouter(Navigation);
