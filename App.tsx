import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//import StackNavigator from './src/navigation/StackNavigator';
import Tabs from './src/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <Tabs />
    </NavigationContainer>
  )
}

export default App;
