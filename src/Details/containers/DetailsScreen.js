import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import Gallery from '../components/Gallery';
import TypeList from '../components/TypeList';
// import PropTypes from 'prop-types';

class DetailsScreen extends Component {
  componentDidMount = () => {
    this.props.navigation.setOptions({ title: this.props.route.params.name });
  };

  render() {
    if (this.props.route.params.name !== this.props.pokemon.name) {
      return (
        <Container style={styles.loading}>
          <ActivityIndicator />
        </Container>
      );
    } else {
      return (
        <Container style={styles.container}>
          <Gallery sprites={this.props.pokemon.sprites} />
          <Text style={styles.name}>{this.props.pokemon.name}</Text>
          <TypeList types={this.props.pokemon.types} />
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 40,
  },
});

DetailsScreen.propTypes = {};

const mapState = ({ pokemon }) => ({ pokemon });

export default connect(mapState)(DetailsScreen);
