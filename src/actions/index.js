import * as TYPES from 'actions/types';

export const setCurrentUser = (user) => ({
  type: TYPES.SET_CURRENT_USER,
  payload: user,
});
