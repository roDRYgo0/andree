import * as types from '../types';
import PokemonService from '../../services/PokemonService';

export const fetchGenerations = () => async dispatch => {
  let generations = await PokemonService.getGenerations();
  dispatch({
    type: types.FETCH_GENERATIONS,
    generations,
  });
};

export const setGeneration = value => async dispatch => {
  let generation = {};
  if (value) {
    let id = value.split('generation/')[1];
    generation = await PokemonService.getGeneration(id);
    generation.url = value;
  }
  dispatch({
    type: types.SET_GENERATION,
    generation,
  });
};
