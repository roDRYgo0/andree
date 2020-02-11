import { combineReducers } from 'redux';

import pokemons from './pokemons';
import user from './user';

export default combineReducers({ pokemons, user });
