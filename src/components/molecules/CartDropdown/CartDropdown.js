import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { selectCartItems } from 'redux/cart/cart.selectors';
import CartItem from '../CartItem/CartItem';
import { ItemsWrapper, StyledButton, Wrapper } from './CartDropdown.styles';

const CartDropdown = ({ history }) => {
  const cartItems = useSelector(selectCartItems);

  return (
    <Wrapper>
      <ItemsWrapper>
        {!cartItems.length ? (
          <h2>There is nothing yet.</h2>
        ) : (
          cartItems.map((itemData) => (
            <CartItem key={itemData.id} itemData={itemData} />
          ))
        )}
      </ItemsWrapper>
      <StyledButton
        disabled={!cartItems.length}
        onClick={() => history.push('/checkout')}
      >
        go to checkout
      </StyledButton>
    </Wrapper>
  );
};

export default withRouter(CartDropdown);
