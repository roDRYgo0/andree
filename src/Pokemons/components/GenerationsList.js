import React from 'react';
import { Form, Item, Picker, Icon } from 'native-base';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';

const GenerationsList = props => {
  return (
    <Form>
      {props.isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      ) : (
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            placeholder="Select your SIM"
            placeholderStyle={{ color: '#bfc6ea' }}
            placeholderIconColor="#007aff"
            selectedValue={props.selectedGeneration}
            onValueChange={props.onGenerationChange}>
            <Picker.Item label="Seleccionar" />
            {props.generations.map((generation, index) => {
              return (
                <Picker.Item
                  label={generation.name}
                  value={generation.url}
                  key={index}
                />
              );
            })}
          </Picker>
        </Item>
      )}
    </Form>
  );
};

const styles = StyleSheet.create({
  loading: {
    height: 110,
    justifyContent: 'center',
  },
});

GenerationsList.propTypes = {};

export default GenerationsList;
