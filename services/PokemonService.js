import BaseService from './core/BaseService';

class PokemonService extends BaseService {
  numPokemons = 964;

  async fetch() {
    const {
      data: { count, results },
    } = await this.get(`pokemon?limit=${this.numPokemons}`);

    if (count !== this.numPokemons) {
      // console.log('');
    }

    return results;
  }
}

export default new PokemonService();
