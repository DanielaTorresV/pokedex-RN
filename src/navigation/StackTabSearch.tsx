import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import DetailScreen from "../screens/DetailScreen";
import SearchScreen from "../screens/SearchScreen";
import { RootStackParams } from "./StackNavigator";

const TabSearch = createStackNavigator<RootStackParams>();

const StackTabSearch = () => {
  return (
    <TabSearch.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <TabSearch.Screen name="HomeScreen" component={ SearchScreen } />
      <TabSearch.Screen name="DetailScreen" component={ DetailScreen } />
    </TabSearch.Navigator>
  )
}

export default StackTabSearch;