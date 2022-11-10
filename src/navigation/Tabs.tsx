import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import StackNavigator from './StackNavigator';
import { colors } from '../theme/themeApp';
import StackTabSearch from './StackTabSearch';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.92)',
          height: ( Platform.OS === 'ios' ) ? 80 : 65,
          borderWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          marginBottom: ( Platform.OS === 'ios' ) ? 0 : 10,
          fontSize: 15
        }
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={ StackNavigator } 
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color }) => (
          <Icon name='list-outline' color={ color } size={ 25 } />
          )
        }}
      />
      <Tab.Screen 
        name="SearchScreen" 
        component={ StackTabSearch }
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color }) => (
          <Icon name='search-outline' color={ color } size={ 25 } />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs;
