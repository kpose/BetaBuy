import {createContext, useState} from 'react';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperLightTheme,
} from 'react-native-paper';
import {ThemeTypes} from 'app/types/ThemeTypes';

const initialTheme = {
  type: 'light',
  ...NavigationLightTheme,
  ...PaperLightTheme,
  roundness: 2,
  colors: {
    ...NavigationLightTheme.colors,
    ...PaperLightTheme.colors,
    primary: '#0081A7',
    // accent: '#F4A261',
    disabled: '#FFF3B0',
  },
};
export const ThemeContext = createContext<ThemeTypes>(initialTheme);

export function ThemeProvider() {
  const [theme, setTheme] = useState<ThemeTypes>(initialTheme);

  return <ThemeContext.Provider value={theme}></ThemeContext.Provider>;
}
