import React from 'react';
import { FlatList, StyleSheet, Keyboard } from 'react-native';
// import PropTypes from 'prop-types';

import Pokemon from './Pokemon';
import { Container } from 'native-base';

const renderItem = ({ item }) => <Pokemon pokemon={item} />;

const PokemonList = props => {
  return (
    <Container style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        numColumns={3}
        onTouchMove={Keyboard.dismiss}
        keyExtractor={item => JSON.stringify(item.name)}
        contentContainerStyle={styles.list}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    alignItems: 'flex-start',
  },
});

PokemonList.propTypes = {};

export default PokemonList;
