import * as types from '../types';
import PokemonService from '../../services/PokemonService';

export const fetchPokemons = () => async dispatch => {
  let pokemons = await PokemonService.fetch();
  dispatch({
    type: types.FETCH_POKEMONS,
    pokemons,
  });
};

export const setPokemon = url => async dispatch => {
  let pokemon = await PokemonService.getPokemon('pokemon/' + url);
  dispatch({
    type: types.SET_POKEMON,
    pokemon,
  });
};
