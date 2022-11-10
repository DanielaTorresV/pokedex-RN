import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { SimplePokemon } from '../interfaces/PokemonInterfaces';
import SearchScreen from '../screens/SearchScreen';

export type RootStackParams = {
  HomeScreen: undefined,
  DetailScreen: {
    simplePokemon: SimplePokemon,
    color: string
  }
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="DetailScreen" component={ DetailScreen } />
    </Stack.Navigator>
  )
}

export default StackNavigator;
