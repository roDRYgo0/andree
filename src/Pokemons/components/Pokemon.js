import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text, CardItem, Thumbnail, Body } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import * as pokemonsActions from '../../../store/actions/pokemonsActions';

const Pokemon = props => {
  const navigation = useNavigation();
  const pokemon = props.pokemon;

  const getImage = url => {
    const id = url.split('/')[6];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  const setPokemon = () => {
    props.setPokemon(pokemon.url.split('/')[6]);
    navigation.navigate('Details', { name: pokemon.name });
  };

  return (
    <Card style={styles.container}>
      <TouchableOpacity onPress={setPokemon}>
        <CardItem>
          <Body style={styles.center}>
            <Thumbnail
              large
              square
              source={{
                uri: getImage(pokemon.url),
              }}
            />
          </Body>
        </CardItem>
        <CardItem>
          <Body style={styles.center}>
            <Text>{pokemon.name}</Text>
          </Body>
        </CardItem>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 126,
  },
  center: {
    alignItems: 'center',
  },
});

Pokemon.propTypes = {};

const mapDispatch = { ...pokemonsActions };

export default connect(null, mapDispatch)(Pokemon);
