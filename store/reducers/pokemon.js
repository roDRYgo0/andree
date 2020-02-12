import * as types from '../types';
import { createReducer } from './utils/createReducer';

const INITIAL_STATE = { sprites: {} };

const handlers = {};

handlers[types.SET_POKEMON] = (state, { pokemon }) => {
  return { ...pokemon };
};

export default createReducer(INITIAL_STATE, handlers);
