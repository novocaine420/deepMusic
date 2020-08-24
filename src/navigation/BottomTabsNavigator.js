import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import LibraryNavigator from './LibraryNavigator';

const BottomTabStack = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <BottomTabStack.Navigator
    initialRouteName={'Home'}
    tabBarPosition={'bottom'}
    backBehavior={'initialRoute'}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let text;
        switch (route.name) {
          case 'Home':
            text = 'Home';
            break;
          case 'Library':
            text = 'Library';
            break;
          default:
            return null;
        }

        return (
          <Text
            style={{
              width: 26,
              height: 26,
              paddingBottom: 3,
            }}>
            {text}
          </Text>
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
      style: {
        borderTopWidth: 1,
        paddingTop: 5,
      },
    }}>
    <BottomTabStack.Screen name={'Home'} component={HomeNavigator} />
    <BottomTabStack.Screen name={'Library'} component={LibraryNavigator} />
  </BottomTabStack.Navigator>
);

export default BottomTabNavigator;
