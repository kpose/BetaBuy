import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {HomePage, Out, NewNotePage} from 'app/screens';
import {AppStackParams} from 'app/types/AppStackTypes';

const Stack = createStackNavigator<AppStackParams>();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        //gestureEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Out" component={Out} />
      <Stack.Screen
        name="NewNotePage"
        component={NewNotePage}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
