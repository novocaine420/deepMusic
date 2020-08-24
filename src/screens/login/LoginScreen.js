import React from 'react';
import {View, Text, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        onPress={() => navigation.navigate('Tabs')}
        title={'Authenticate'}
      />
    </View>
  );
};

export default LoginScreen;
