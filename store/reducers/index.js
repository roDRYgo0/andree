import { combineReducers } from 'redux';

import pokemons from './pokemons';
import pokemon from './pokemon';
import user from './user';
import generations from './generations';
import generation from './generation';

export default combineReducers({
  pokemons,
  user,
  pokemon,
  generations,
  generation,
});
