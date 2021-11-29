import * as TYPES from 'actions/types';

export const setCurrentUser = (user) => ({
  type: TYPES.SET_CURRENT_USER,
  payload: user,
});

export const cartToggleHidden = () => ({
  type: TYPES.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: TYPES.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: TYPES.REMOVE_ITEM,
  payload: item,
});

export const clearItemsFromCart = (item) => ({
  type: TYPES.CLEAR_ITEMS,
  payload: item,
});
