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
    surface: '#e8e8e8',
    primary: '#264653',
    accent: '#2A9D8F',
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
    surface: '#000',
    primary: '#264653',
    accent: '#2A9D8F',
  },
};