import { renderHook } from '@testing-library/react-hooks'

import { useStyles } from './index'
import { CreateStyles } from './type'
import { ThemeProvider } from '../../contexts/Theme'
import { mockTheme } from '../../mocks/mockTheme'
import { hs } from '../../utils/resize'
import { WrappedScreen } from './components/WrappedScreen'
import { render, screen } from '@testing-library/react-native'

const mockStyles: CreateStyles<'container' | 'title'> = (theme) => ({
  container: {
    backgroundColor: theme.colors.background1,
    paddingLeft: 12,
  },
  title: {
    marginBottom: 15,
  },
})

const newBaseWidth = 1000
const newBaseHeight = 1000

describe('useStyles', () => {
  it('should return valid styles', () => {
    const wrapper = ({ children }) => (
      <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>
    )

    const { result } = renderHook(() => useStyles(mockStyles), { wrapper })

    expect(result.current.container.backgroundColor).toBe(
      mockTheme.colors.background1
    )
    expect(result.current.container.paddingLeft).toBe(hs(12))
    expect(result.current.container.paddingLeft).not.toBe(15)
  })

  it('options should change styles', () => {
    const wrapper = ({ children }) => (
      <ThemeProvider
        options={{
          baseWidth: newBaseWidth,
          baseHeight: newBaseHeight,
        }}
        theme={mockTheme}
      >
        {children}
      </ThemeProvider>
    )

    const { result } = renderHook(() => useStyles(mockStyles), { wrapper })
    expect(result.current.container.paddingLeft).toBe(
      hs(12, {
        baseWidth: newBaseWidth,
      })
    )
  })
  it('should render component', () => {
    render(<WrappedScreen />)
    const text = screen.getByText('ThemeScreen')
    expect(text).toBeTruthy()
  })
})
