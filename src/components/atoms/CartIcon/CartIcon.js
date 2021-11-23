import React from 'react';
import { useDispatch } from 'react-redux';
import { cartToggleHidden } from 'actions';

import { ItemCount, ShoppingIcon, Wrapper } from './CartIcon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper onClick={() => dispatch(cartToggleHidden())}>
      <ShoppingIcon />
      <ItemCount>0</ItemCount>
    </Wrapper>
  );
};

export default CartIcon;
