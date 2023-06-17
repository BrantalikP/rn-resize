import { useStyles } from '@brantalikp/rn-resize';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface IThemeScreen {}

const ThemeScreen = ({}: IThemeScreen) => {
  const { container, text } = useStyles(styles);
  return (
    <View style={container}>
      <Text style={text}>ThemeScreen</Text>
    </View>
  );
};

export { ThemeScreen };
