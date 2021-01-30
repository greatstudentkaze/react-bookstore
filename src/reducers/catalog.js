import { SET_FILTER, SET_PRODUCTS } from '../types/catalog';

const initialState = {
  items: [],
  filterBy: 'all',
};

export const catalog = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      }
    case SET_FILTER:
      return {
        ...state,
        filterBy: action.payload,
      }
    default:
      return state;
  }
};
