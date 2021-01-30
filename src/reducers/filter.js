import { SET_FILTER } from '../types/filter';

const initialState = {
  filterBy: 'all',
};

export const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filterBy: action.payload,
      }
    default:
      return state;
  }
};
