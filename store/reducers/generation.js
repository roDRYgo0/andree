import * as types from '../types';
import { createReducer } from './utils/createReducer';

const INITIAL_STATE = {};

const handlers = {};

handlers[types.SET_GENERATION] = (state, { generation }) => {
  return { ...generation };
};

export default createReducer(INITIAL_STATE, handlers);
