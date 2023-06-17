import { StyleSheet } from 'react-native';

import { useTheme } from '../../contexts/Theme';
import { CustomStyles } from '../../types';
import { createStyle } from '../../utils/createStyle';

export const useStyles = <T extends CustomStyles, U>(
  makeStyles: (theme: U | null) => T
): StyleSheet.NamedStyles<T> => {
  const { theme, options } = useTheme<U>();
  const styles = createStyle(makeStyles(theme), options);

  return styles;
};
