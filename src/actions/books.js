import { SET_BOOKS } from '../types/books';

export const setBooks = books => ({
  type: SET_BOOKS,
  payload: books
});
