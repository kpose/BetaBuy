import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Signin, Signup} from 'app/screens';
import {getHeaderTitle} from '@react-navigation/elements';
import {AuthNavHeader} from 'app/components';
import {AuthStackParams} from 'app/types/AuthStackTypes';

const Stack = createStackNavigator<AuthStackParams>();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        header: ({navigation, route, options, back}) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <AuthNavHeader title={title} onBackPress={navigation.goBack} />
          );
        },
      }}>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{headerTitle: 'Log in'}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerTitle: 'Sign up'}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
