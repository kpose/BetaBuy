import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage, Out} from 'app/screens';
import {AppStackParams} from 'app/types/AppStackTypes';

const Stack = createStackNavigator<AppStackParams>();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Out" component={Out} />
    </Stack.Navigator>
  );
}

export default AppStack;
