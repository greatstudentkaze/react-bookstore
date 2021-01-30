import { SET_PRODUCTS } from '../types/catalog';

const initialState = {
  items: [],
};

export const catalog = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      }
    default:
      return state;
  }
};
