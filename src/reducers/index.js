import { combineReducers } from 'redux';

import { app } from './app';
import { catalog } from './catalog';
import { cart } from './cart';

export const rootReducer = combineReducers({
  app,
  catalog,
  cart,
});
