import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PropTypes from 'prop-types';

import GenerationPage from './GenerationPage';
import PokemonsPage from './PokemonsPage';
import Icon from '../components/Icon';

const Tab = createBottomTabNavigator();

class PokemonScreen extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({ title: 'p' });
  }

  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{ keyboardHidesTabBar: true }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={route.name} size={size} focused={focused} />;
          },
        })}>
        <Tab.Screen name="Pokemons" component={PokemonsPage} />
        <Tab.Screen name="Generation" component={GenerationPage} />
      </Tab.Navigator>
    );
  }
}

PokemonScreen.propTypes = {};

export default PokemonScreen;
