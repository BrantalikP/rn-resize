import { useStyles } from '../index'
import { ThemeProvider } from '../../../contexts/Theme'
import { View, Text } from 'react-native'
import { mockTheme } from '../../../mocks/mockTheme'

import { styles } from './styles'

interface IThemeScreen {}

const ThemeScreen = ({}: IThemeScreen) => {
  const { container, text } = useStyles(styles)
  return (
    <View style={container}>
      <Text style={text}>ThemeScreen</Text>
    </View>
  )
}

const WrappedScreen = () => (
  <ThemeProvider theme={mockTheme}>
    <ThemeScreen />
  </ThemeProvider>
)

export { WrappedScreen, ThemeScreen }
