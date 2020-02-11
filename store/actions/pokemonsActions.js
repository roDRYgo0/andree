import * as types from '../types';
import PokemonService from '../../services/PokemonService';

export const fetchPokemons = () => async dispatch => {
  let pokemons = await PokemonService.fetch();
  dispatch({
    type: types.FETCH_POKEMONS,
    pokemons,
  });
};
