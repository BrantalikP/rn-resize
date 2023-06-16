import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

import { Theme, defaultTheme } from '../../themes';

interface ThemeContextProps {
  theme: Theme | null;
  setTheme: (theme: Theme | null) => void;
}

const contextDefaults = {
  theme: defaultTheme,
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(contextDefaults);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme | null>(defaultTheme);

  const values = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
