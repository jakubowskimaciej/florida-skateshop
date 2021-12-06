import * as TYPES from 'actions/types';
import {
  addItemToCart,
  removeItemFromCart,
} from '../selectors/cart/cart.utils';

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
    case TYPES.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case TYPES.CLEAR_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
};
