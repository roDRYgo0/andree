import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
// import PropTypes from 'prop-types';

import HeaderBar from '../../commons/components/HeaderBar';
import GenerationsList from '../components/GenerationsList';
import Search from '../components/Search';
import PokemonList from '../components/PokemonList';
import { connect } from 'react-redux';

import * as generationsActions from '../../../store/actions/generationsActions';

class GenerationPage extends Component {
  state = {
    isLoading: false,
    textSearch: '',
    filtered: [],
  };

  toggleLoading = () => {
    this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
  };

  componentDidMount = () => {
    this.toggleLoading();
    this.props.fetchGenerations();
    if (this.props.generation.url) {
      this.onSearch(this.state.textSearch);
    }
    this.toggleLoading();
  };

  onGenerationChange = async value => {
    this.toggleLoading();
    this.setState({ filtered: [] });
    await this.props.setGeneration(value);
    this.onSearch(this.state.textSearch);
    this.toggleLoading();
  };

  onSearch = textSearch => {
    this.setState({ textSearch });
    let text = textSearch.toLowerCase();
    let filtered = [];
    if (this.props.generation.pokemon_species) {
      filtered = this.props.generation.pokemon_species.filter(pokemon => {
        if (pokemon.name.toLowerCase().match(text)) {
          return pokemon;
        }
      });
    }
    this.setState({ filtered });
  };

  render() {
    return (
      <Container style={styles.container}>
        <HeaderBar title="Generations" />
        <GenerationsList
          selectedGeneration={this.props.generation.url}
          generations={this.props.generations}
          onGenerationChange={this.onGenerationChange}
          isLoading={this.state.isLoading}
        />
        {!this.state.isLoading && (
          <Search
            style={styles.search}
            placeholder="Search"
            onChange={this.onSearch}
            value={this.state.textSearch}
          />
        )}
        <PokemonList data={this.state.filtered} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    margin: 10,
  },
});

GenerationPage.propTypes = {};

const mapState = ({ generations, generation }) => ({ generations, generation });

const mapDispatch = { ...generationsActions };

export default connect(mapState, mapDispatch)(GenerationPage);
