import { SET_FILTER } from '../types/filter';

export const setFilter = category => ({
  type: SET_FILTER,
  payload: category
});
