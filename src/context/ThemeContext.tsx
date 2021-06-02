import React, { useState, createContext } from "react";

import lightTheme from "../styles/themes/light";
import darkTheme from "../styles/themes/dark";
import { ITheme } from "../styles/styled";

interface IThemeContext {
  theme: ITheme;
  setTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: lightTheme,
  setTheme: () => {},
});

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const setThemeHandler = () => {
    setTheme(theme.title === "light" ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
