import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/cart';

const initialState = {
  items: [],
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      }
    default:
      return state;
  }
};
