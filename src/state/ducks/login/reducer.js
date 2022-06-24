import { SET_IS_LOGGED_IN, SET_LOGGED_OUT } from './types';
const initialState = {
  isLoggedIn: false,
  email: null,
};
export const setIsLoggedIn = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: payload.value, email: payload.data.email };
    case SET_LOGGED_OUT:
      return { ...state, isLoggedIn: payload.value, email: null };
    default:
      return state;
  }
};
