import { SET_FILTER, SET_SEARCH_QUERY } from '../types/filter';

const initialState = {
  filterBy: 'all',
  searchQuery: '',
};

export const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filterBy: action.payload,
      }
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      }
    default:
      return state;
  }
};
