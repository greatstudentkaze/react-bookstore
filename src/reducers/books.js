import { SET_BOOKS } from '../types/books';

const initialState = {
  items: [],
};

export const books = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        items: action.payload,
      }
    default:
      return state;
  }
};
