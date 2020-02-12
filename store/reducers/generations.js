import * as types from '../types';
import { createReducer } from './utils/createReducer';

const INITIAL_STATE = [];

const handlers = {};

handlers[types.FETCH_GENERATIONS] = (state, { generations }) => {
  if (state.length !== generations.length) {
    return [...generations];
  } else {
    return state;
  }
};

export default createReducer(INITIAL_STATE, handlers);
