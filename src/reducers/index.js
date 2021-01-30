import { combineReducers } from 'redux';

import { app } from './app';
import { books } from './books';
import { cart } from './cart';

export const rootReducer = combineReducers({
  app,
  books,
  cart,
});
