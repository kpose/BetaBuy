import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Signin, Signup} from 'app/screens';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{gestureEnabled: false, headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
