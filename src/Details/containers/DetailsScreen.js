import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import PropTypes from 'prop-types';

class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

DetailsScreen.propTypes = {};

export default DetailsScreen;
