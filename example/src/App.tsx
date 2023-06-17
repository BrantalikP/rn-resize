import * as React from 'react';

import { ThemeScreen } from './features/useStyles/screens/ThemeScreen';
import { ThemeProvider } from '@brantalikp/rn-resize';
import { myCustomTheme } from './theme/defaultTheme';

export default function App() {
  return (
    <ThemeProvider theme={myCustomTheme}>
      <ThemeScreen />
    </ThemeProvider>
  );
}
