import { renderHook } from '@testing-library/react-hooks';

import { useStyles } from './index';
import { CreateStyles } from './type';
import { ThemeProvider } from '../../contexts/Theme';
import { mockTheme } from '../../mocks/mockTheme';
import { hs } from '../../utils/resize';

const wrapper = ({ children }) => (
  <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>
);

const mockStyles: CreateStyles<'container' | 'title'> = (theme) => ({
  container: {
    backgroundColor: theme.colors.background1,
    paddingLeft: 12,
  },
  title: {
    marginBottom: 15,
  },
});

test('should return valid styles', () => {
  const { result } = renderHook(() => useStyles(mockStyles), { wrapper });

  expect(result.current.container.backgroundColor).toBe(
    mockTheme.colors.background1
  );
  expect(result.current.container.paddingLeft).toBe(hs(12));
  expect(result.current.container.paddingLeft).not.toBe(15);
});
