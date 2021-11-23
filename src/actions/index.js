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
