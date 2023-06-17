import { act, renderHook } from '@testing-library/react-hooks';

import { ThemeProvider, useTheme } from '.';
import { Theme, mockTheme } from '../../mocks/mockTheme';

const wrapper = ({ children }) => (
  <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>
);

describe('useTheme', () => {
  it('should return valid theme values', () => {
    const { result } = renderHook(() => useTheme<Theme>(), {
      wrapper,
    });

    expect(result.current.theme.colors.background1).toBe(
      mockTheme.colors.background1
    );

    //@ts-expect-error
    expect(result.current.theme.colors?.background3).toBeFalsy();
  });

  it('setTheme should change theme', async () => {
    const { result } = renderHook(() => useTheme<Theme>(), {
      wrapper,
    });

    expect(result.current.theme.colors.background1).toBe(
      mockTheme.colors.background1
    );

    act(() => {
      //@ts-expect-error
      result.current.setTheme({ colors: { background1: 'red' } });
    });

    expect(result.current.theme.colors.background1).toBe('red');

    expect(result.current.theme.colors.background1).not.toBe(
      mockTheme.colors.background1
    );
  });
});
