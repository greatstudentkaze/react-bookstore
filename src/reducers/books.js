import { ADD_BOOK, SET_BOOKS } from '../types/books';

const initialState = {
  books: [
    {
      id: 21321,
      title: 'Boooooooooooooook',
    }
  ],
};

export const books = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload
      }
    case ADD_BOOK:
      return {
        books: [
          ...state,
          action.payload
        ]
      }
    default:
      return state;
  }
};
