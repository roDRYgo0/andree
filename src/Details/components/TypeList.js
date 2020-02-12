import React from 'react';
import { FlatList } from 'react-native';
import Badge from './Badge';
// import PropTypes from 'prop-types';

const renderItem = ({ item }) => <Badge type={item.type} />;

const TypeList = props => {
  return (
    <FlatList
      data={props.types}
      renderItem={renderItem}
      keyExtractor={item => JSON.stringify(item.slot)}
      numColumns={4}
    />
  );
};

TypeList.propTypes = {};

export default TypeList;
