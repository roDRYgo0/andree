import React from 'react';
import {Image, StyleSheet} from 'react-native';
// import PropTypes from 'prop-types';

const Icon = props => {
  if (props.name === 'Pokemons') {
    return (
      <Image
        style={{
          width: props.focused ? props.size + 2 : props.size,
          height: props.focused ? props.size + 2 : props.size,
          ...styles.imgae,
        }}
        source={require('../../../assets/img/Pokeball.png')}
      />
    );
  } else if (props.name === 'Generation') {
    return (
      <Image
        style={{
          width: props.focused ? props.size + 2 : props.size,
          height: props.focused ? props.size + 2 : props.size,
          ...styles.imgae,
        }}
        source={require('../../../assets/img/squirtle.png')}
      />
    );
  }
};

const styles = StyleSheet.create({
  imgae: {
    resizeMode: 'contain',
  },
});

Icon.propTypes = {};

export default Icon;
