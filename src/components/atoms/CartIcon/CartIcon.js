import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartToggleHidden } from 'actions';

import { ItemCount, ShoppingIcon, Wrapper } from './CartIcon.styles';
import { selectCartItemsCount } from 'selectors/cart/cart.selectors';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <Wrapper onClick={() => dispatch(cartToggleHidden())}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </Wrapper>
  );
};

export default CartIcon;
