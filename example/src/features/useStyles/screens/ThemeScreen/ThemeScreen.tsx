import { View, Text } from 'react-native';
import { useStyles } from '@brantalikp/rn-resize';
import { styles } from './styles';

interface IThemeScreen {}

const ThemeScreen = ({}: IThemeScreen) => {
  const { container } = useStyles(styles);
  return (
    <View style={container}>
      <Text>ThemeScreen</Text>
    </View>
  );
};

export { ThemeScreen };
