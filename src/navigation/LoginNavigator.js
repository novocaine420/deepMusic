import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';

const LoginStack = createStackNavigator();

const LoginNavigator = () => (
  <LoginStack.Navigator initialRouteName={'Login'}>
    <LoginStack.Screen name={'Login'} component={LoginScreen} />
  </LoginStack.Navigator>
);

export default LoginNavigator;
