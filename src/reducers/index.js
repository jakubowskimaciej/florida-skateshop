import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { cartToggle } from './cartReducer';

export default combineReducers({
  user: userReducer,
  cart: cartToggle,
});
