import * as TYPES from 'actions/types';
import { addItemToCart } from '../redux/cart/cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const cartToggle = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case TYPES.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
