import axios from 'axios';
import { SET_IS_LOGGED_IN, SET_LOGGED_OUT } from './types';

// export const setIsLoggedIn = (data) => ({
//   type: SET_IS_LOGGED_IN,
//   payload: { value: true, email: data.email },
// });

export const setLogOut = (data) => ({
  type: SET_LOGGED_OUT,
  payload: { value: false, data: null },
});

export const setIsLoggedIn = (data) => async (dispatch, getState) => {
  //static data to get response
  const staticData = {
    username: 'sattaluri@cypresslawn.com',
    password: 'Vpn@cypress1',
  };

  const response = await axios
    .post(`http://dev-app01:3007/api/v1/login`, staticData)
    .catch((error) => {
      console.log('error in logged: ', error);
    });
  console.log('response', response);
  if (response) {
    dispatch({
      type: SET_IS_LOGGED_IN,
      payload: { value: true, data: response.data.userDetails },
    });
  }
};
