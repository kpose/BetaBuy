import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from 'app/screens';
import {AppStackParams} from 'app/types/AppStackTypes';

const Stack = createStackNavigator<AppStackParams>();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerTitle: 'Log in'}}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
