import React from 'react';
import { useSelector } from 'react-redux';
import {
  ItemsWrapper,
  StyledButton,
  Wrapper,
  ItemWrapper,
  StyledInfo,
} from './CartDropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Wrapper>
      <ItemsWrapper>
        {!cartItems.length ? (
          <h2>There is nothing yet.</h2>
        ) : (
          cartItems.map((item) => (
            <ItemWrapper key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <StyledInfo>
                <p>{item.name}</p>
                <p>1 x ${item.price}</p>
              </StyledInfo>
            </ItemWrapper>
          ))
        )}
      </ItemsWrapper>
      <StyledButton>go to checkout</StyledButton>
    </Wrapper>
  );
};

export default CartDropdown;
