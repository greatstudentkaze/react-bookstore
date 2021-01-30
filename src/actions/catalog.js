import { SET_FILTER, SET_PRODUCTS } from '../types/catalog';

export const setProducts = goods => ({
  type: SET_PRODUCTS,
  payload: goods
});

export const setFilter = category => ({
  type: SET_FILTER,
  payload: category
});
