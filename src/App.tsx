import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthStack} from './navigation';
import {CombinedDarkTheme, CombinedLightTheme} from './utils';

const App = () => {
  return (
    <PaperProvider theme={CombinedLightTheme}>
      <NavigationContainer theme={CombinedLightTheme}>
        <AuthStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
