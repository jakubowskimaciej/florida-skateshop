import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from 'selectors/cart/cart.selectors';
import { clearItemsFromCart, addItem, removeItem } from 'actions';
import CheckoutItem from 'components/molecules/CheckoutItem/CheckoutItem';
import { CheckoutHeader, StyledTotal, Wrapper } from './Checkout.styles';
import StripeButton from 'components/atoms/StripeButton/StripeButton';
import PaymentInfo from 'components/molecules/PaymentInfo/PaymentInfo';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const dispatch = useDispatch();
  const clearItems = (item) => dispatch(clearItemsFromCart(item));
  const handleAddItem = (item) => dispatch(addItem(item));
  const handleRemoveItem = (item) => dispatch(removeItem(item));

  return (
    <Wrapper>
      <CheckoutHeader>
        <div>
          <span>Product</span>
        </div>
        <div>
          <span>Description</span>
        </div>
        <div>
          <span>Quantity</span>
        </div>
        <div>
          <span>Price</span>
        </div>
        <div>
          <span>Remove</span>
        </div>
      </CheckoutHeader>
      {cartItems.map((itemData) => (
        <CheckoutItem
          key={itemData.id}
          itemData={itemData}
          clicked={() => clearItems(itemData)}
          addItem={() => handleAddItem(itemData)}
          removeItem={() => handleRemoveItem(itemData)}
        />
      ))}
      <StyledTotal>
        <div>
          <p>TOTAL PRICE: ${total}</p>
          {!cartItems.length ? null : <StripeButton price={total} />}
        </div>
      </StyledTotal>
      <PaymentInfo />
    </Wrapper>
  );
};

export default Checkout;
