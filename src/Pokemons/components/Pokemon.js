import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text, CardItem, Thumbnail, Body } from 'native-base';
import { useNavigation } from '@react-navigation/native';
// import PropTypes from 'prop-types';

const Pokemon = props => {
  const navigation = useNavigation();
  const pokemon = props.pokemon;

  const getImage = url => {
    const id = url.split('/')[6];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  return (
    <Card style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
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

export default Pokemon;
