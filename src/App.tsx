import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthStack} from './navigation';
import {CombinedDarkTheme} from './utils';

const App = () => {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <AuthStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
