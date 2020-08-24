import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import MainNavigator from './src/navigation/MainNavigator';

const App = (props) => {
  enableScreens();

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
export default App;
