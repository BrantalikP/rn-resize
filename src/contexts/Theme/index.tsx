import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ResizeOptions } from 'src/utils/resize';

interface ThemeContextProps<T> {
  theme: T | null;
  setTheme: (theme: T | null) => void;
  options?: ResizeOptions;
}

interface ThemeProviderProps<T> {
  children: ReactNode;
  theme?: T;
  options?: ResizeOptions;
}

export const ThemeContext = createContext<ThemeContextProps<any>>({
  theme: null,
  setTheme: () => {},
});

export const ThemeProvider = <T,>({
  children,
  theme: initialTheme = {} as T,
  options = {},
}: ThemeProviderProps<T>) => {
  const [theme, setTheme] = useState<T | null>(initialTheme || null);

  const values = useMemo(() => {
    return { theme, setTheme, options };
  }, [theme]);

  return (
    <ThemeContext.Provider value={values as ThemeContextProps<T>}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = <T,>() =>
  useContext(ThemeContext) as ThemeContextProps<T>;
