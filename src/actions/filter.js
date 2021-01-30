import { SET_FILTER, SET_SEARCH_QUERY } from '../types/filter';

export const setFilter = category => ({
  type: SET_FILTER,
  payload: category
});

export const setSearchQuery = value => ({
  type: SET_SEARCH_QUERY,
  payload: value
});
