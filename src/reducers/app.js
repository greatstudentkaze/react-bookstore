import { HIDE_LOADER, SHOW_LOADER } from '../types/app';

const initialState = {
  isLoading: false,
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      }
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  }
};
