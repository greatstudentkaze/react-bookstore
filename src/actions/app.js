import { HIDE_LOADER, SHOW_LOADER } from '../types/app';

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});
