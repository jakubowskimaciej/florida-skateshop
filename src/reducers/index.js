import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './userReducer';
import { cartToggle } from './cartReducer';
import { directoryReducer } from './directoryReducer';
import { collectionReducer } from './collectionReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartToggle,
  directory: directoryReducer,
  collection: collectionReducer,
});

export default persistReducer(persistConfig, rootReducer);
