import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperLightTheme,
} from 'react-native-paper';

export const CombinedLightTheme = {
  type: 'light',
  ...NavigationLightTheme,
  ...PaperLightTheme,
  roundness: 2,
  colors: {
    ...NavigationLightTheme.colors,
    ...PaperLightTheme.colors,
    primary: '#0081A7',
   // accent: '#F4A261',
    disabled: '#FFF3B0'
  },
};

export const CombinedDarkTheme = {
  type: 'dark',
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  roundness: 2,
  //mode: 'adaptive',
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#0081A7',
    disabled: '#FFF3B0',
  },
};