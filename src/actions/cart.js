import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/cart';

export const addToCart = product => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id
});
