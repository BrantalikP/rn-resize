export const myCustomTheme = {
  colors: {
    background: 'pink',
  },
} as const;

export type Theme = typeof myCustomTheme;
