import { ThemeProvider } from '@brantalikp/rn-resize';
import * as React from 'react';

import { Example } from './features/createStyle/screens/Example';
import { myCustomTheme } from './theme/defaultTheme';

export default function App() {
  return (
    <ThemeProvider theme={myCustomTheme}>
      <Example />
    </ThemeProvider>
  );
}
