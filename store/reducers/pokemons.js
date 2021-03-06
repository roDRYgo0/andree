import * as types from '../types';
import { createReducer } from './utils/createReducer';

const INITIAL_STATE = [];

const handlers = {};

handlers[types.FETCH_POKEMONS] = (state, { pokemons }) => {
  if (state.length !== pokemons.length) {
    return [...pokemons];
  } else {
    return state;
  }
};

export default createReducer(INITIAL_STATE, handlers);
