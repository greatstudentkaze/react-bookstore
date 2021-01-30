import { SET_PRODUCTS } from '../types/catalog';

export const setProducts = goods => ({
  type: SET_PRODUCTS,
  payload: goods
});
