import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LibraryScreen from '../screens/library/LibraryScreen';

const LibraryStack = createStackNavigator();

const LibraryNavigator = () => (
  <LibraryStack.Navigator initialRouteName={'Library'}>
    <LibraryStack.Screen name={'Library'} component={LibraryScreen} />
  </LibraryStack.Navigator>
);

export default LibraryNavigator;
