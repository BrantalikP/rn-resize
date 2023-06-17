import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

interface ThemeContextProps<T> {
  theme: T | null;
  setTheme: (theme: T | null) => void;
}

interface ThemeProviderProps<T> {
  children: ReactNode;
  theme?: T;
}

export const ThemeContext = createContext<ThemeContextProps<any>>({
  theme: null,
  setTheme: () => {},
});

export const ThemeProvider = <T,>({
  children,
  theme: initialTheme = {} as T,
}: ThemeProviderProps<T>) => {
  const [theme, setTheme] = useState<T | null>(initialTheme || null);

  const values = useMemo(() => {
    return { theme, setTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={values as ThemeContextProps<T>}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = <T,>() =>
  useContext(ThemeContext) as ThemeContextProps<T>;
