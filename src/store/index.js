import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from 'reducers/index';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
