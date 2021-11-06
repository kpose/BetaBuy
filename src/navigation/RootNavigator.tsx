import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack, AppStack} from '.';
import {ThemeProvider} from 'app/providers/ThemeContext';
import {ThemeContext} from 'app/providers/ThemeContext';
import auth from '@react-native-firebase/auth';
import {CombinedDarkTheme, CombinedLightTheme} from 'app/utils';
import {Spinner} from 'app/components';

const RootNavigator = () => {
  const {theme} = useContext(ThemeContext);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return <Spinner />;

  if (!user) {
    return (
      <ThemeProvider>
        <NavigationContainer theme={CombinedDarkTheme}>
          <AuthStack />
        </NavigationContainer>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <NavigationContainer theme={CombinedDarkTheme}>
        <AppStack />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default RootNavigator;

// theme={theme}
