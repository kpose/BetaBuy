import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from '.';
import {ThemeProvider} from 'app/providers/ThemeContext';
import {ThemeContext} from 'app/providers/ThemeContext';
import {CombinedDarkTheme, CombinedLightTheme} from 'app/utils';

const RootNavigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <NavigationContainer theme={theme}>
        <AuthStack />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default RootNavigator;
