import axios from 'axios';

import { AUTH_ERROR, AUTH_USER } from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps);
    const { token } = response.data;

    dispatch({
      type: AUTH_USER,
      payload: token,
    });

    localStorage.setItem('token', token);
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email in use',
    });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signin', formProps);
    const { token } = response.data;

    dispatch({
      type: AUTH_USER,
      payload: token,
    });

    localStorage.setItem('token', token);
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid sign in credentials',
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: '',
  };
};
