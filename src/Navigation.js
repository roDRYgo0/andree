import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PokemonScreen from './Pokemons/containers/PokemonScreen';
import DetailsScreen from './Details/containers/DetailsScreen';
import LoginScreen from './Login/containers/LoginScreen';
import ProfileScreen from './Profile/containers/ProfileScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={PokemonScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Navigation;
