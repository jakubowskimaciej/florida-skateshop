import React from 'react';
import { ItemWrapper, StyledInfo } from './CartItem.styles';

const CartItem = ({ itemData: { imageUrl, name, quantity, price } }) => {
  return (
    <ItemWrapper>
      <img src={imageUrl} alt={name} />
      <StyledInfo>
        <p>{name}</p>
        <p>
          {quantity} x ${price}
        </p>
      </StyledInfo>
    </ItemWrapper>
  );
};

export default CartItem;
