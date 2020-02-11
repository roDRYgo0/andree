import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';

const Search = props => {
  return (
    <TextInput
      style={{ ...styles.input, ...props.style }}
      placeholder={props.placeholder}
      onChangeText={props.onChange}
      value={props.value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 9,
    alignSelf: 'stretch',
  },
});

Search.propTypes = {};

export default Search;
