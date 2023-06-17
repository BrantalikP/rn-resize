import { View, Text } from 'react-native';
import { useStyles } from '@brantalikp/rn-resize';
import { styles } from './styles';

interface IThemeScreen {}

const ThemeScreen = ({}: IThemeScreen) => {
  const stole = useStyles(styles);
  return (
    <View style={stole.container}>
      <Text>ThemeScreen</Text>
    </View>
  );
};

export { ThemeScreen };
