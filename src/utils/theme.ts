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
    primary: '#9E2A2B',
    accent: '#F4A261',
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
    primary: '#9E2A2B',
    disabled: '#FFF3B0',
  },
};