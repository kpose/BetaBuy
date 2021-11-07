import React from 'react';
import {createContext, useState, FC} from 'react';
import {CombinedDarkTheme, CombinedLightTheme} from 'app/utils';

interface IThemeContext {
  darkTheme: boolean;
  toggleTheme?: () => void;
}

const defaultState: IThemeContext = {
  darkTheme: true,
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider: FC = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(defaultState.darkTheme);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
