import BaseService from './core/BaseService';

class PokemonService extends BaseService {
  numPokemons = 1100;

  async fetch() {
    const {
      data: { count, results },
    } = await this.get(`pokemon?limit=${this.numPokemons}`);

    if (count !== this.numPokemons) {
      // console.log('');
    }

    return results;
  }

  async getPokemon(url) {
    const { data } = await this.get(url);
    return data;
  }

  async getGenerations() {
    const {
      data: { results },
    } = await this.get('generation/');
    return results;
  }

  async getGeneration(id) {
    const { data } = await this.get(`generation/${id}`);
    return data;
  }
}

export default new PokemonService();
