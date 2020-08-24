import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';

const HomeStack = createStackNavigator();

const HomeNavigator = () => (
  <HomeStack.Navigator initialRouteName={'Home'}>
    <HomeStack.Screen name={'Home'} component={HomeScreen} />
  </HomeStack.Navigator>
);

export default HomeNavigator;
