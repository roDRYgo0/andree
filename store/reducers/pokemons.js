import * as types from '../types';
import { createReducer } from './utils/createReducer';

const INITIAL_STATE = [];

const handlers = {};

handlers[types.FETCH_POKEMONS] = (state, { pokemons }) => {
  return [...pokemons];
};

export default createReducer(INITIAL_STATE, handlers);
