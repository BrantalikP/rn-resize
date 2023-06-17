export const myCustomTheme = {
  colors: {
    background: '#246BFD',
    text: '#fff',
  },
} as const;

export type Theme = typeof myCustomTheme;
