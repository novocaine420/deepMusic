import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabsNavigator';
import LoginNavigator from './LoginNavigator';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName={'Login'}>
      <MainStack.Screen
        name={'Tabs'}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={'Login'}
        component={LoginNavigator}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};
export default MainNavigator;
