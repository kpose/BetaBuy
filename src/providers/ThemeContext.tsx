import React from 'react';
import {createContext, useState, FC} from 'react';
import {CombinedDarkTheme, CombinedLightTheme} from 'app/utils';

interface IThemeContext {
  theme: typeof CombinedLightTheme;
  toggleTheme?: () => void;
}

const defaultState: IThemeContext = {
  theme: CombinedDarkTheme,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState(CombinedLightTheme);

  const toggleTheme = () => {};

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
