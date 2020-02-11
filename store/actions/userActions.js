import * as types from '../types';

export const setUser = user => dispatch => {
  dispatch({
    type: types.SET_USER,
    payload: user,
  });
};

export const removeUser = user => dispatch => {
  dispatch({
    type: types.REMOVE_USER,
  });
};
