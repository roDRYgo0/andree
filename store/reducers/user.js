import * as types from '../types';
import { createReducer } from './utils/createReducer';

const INITIAL_STATE = {};

const handlers = {};

handlers[types.SET_USER] = (state, { payload }) => {
  return { ...payload.user };
};

handlers[types.REMOVE_USER] = () => {
  return {};
};

export default createReducer(INITIAL_STATE, handlers);
