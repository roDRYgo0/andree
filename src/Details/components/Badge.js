import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';

import { getBackgroundColor, getColor } from '../../commons/utils/TypeColors';

const Badge = props => {
  return (
    <View
      style={{
        ...styles.badge,
        backgroundColor: getBackgroundColor(props.type.name),
      }}>
      <Text style={{ ...styles.text, color: getColor(props.type.name) }}>
        {props.type.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignItems: 'center',
    margin: 3,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

Badge.propTypes = {};

export default Badge;
