import { StyleSheet } from 'react-native';

import { useTheme } from '../../contexts/Theme';
import { CustomStyles } from '../../types';
import { createStyles } from '../../utils/createStyles';

export const useStyles = <T extends CustomStyles, U>(
  makeStyles: (theme: U | null) => T
): StyleSheet.NamedStyles<T> => {
  const { theme, options } = useTheme<U>();
  const styles = createStyles(makeStyles(theme), options);

  return styles;
};
