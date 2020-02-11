import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Search from '../components/Search';
import PokemonList from '../components/PokemonList';
import { Container } from 'native-base';
// import PropTypes from 'prop-types';

import HeaderBar from '../../commons/components/HeaderBar';
import { connect } from 'react-redux';

import * as pokemonsActions from '../../../store/actions/pokemonsActions';

class PokemonsPage extends Component {
  state = {
    textSearch: '',
    filtered: [],
  };

  componentDidMount = async () => {
    this.onSearch('');
    await this.props.fetchPokemons();
  };

  onSearch = textSearch => {
    this.setState({ textSearch });
    let text = textSearch.toLowerCase();
    const filtered = this.props.pokemons.filter(pokemon => {
      if (pokemon.name.toLowerCase().match(text)) {
        return pokemon;
      }
    });
    this.setState({ filtered });
  };

  render() {
    return (
      <Container style={styles.container}>
        <HeaderBar title="Pokemons" />
        <Search
          style={styles.search}
          placeholder="Search"
          onChange={this.onSearch}
          value={this.state.textSearch}
        />
        <PokemonList data={this.state.filtered} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    margin: 10,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 7,
  },
});

PokemonsPage.propTypes = {};

const mapState = ({ pokemons }) => ({ pokemons });

const mapDispatch = { ...pokemonsActions };

export default connect(mapState, mapDispatch)(PokemonsPage);
