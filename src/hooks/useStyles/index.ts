import { StyleSheet } from 'react-native';

import { createStyle } from '../../utils/createStyle';

import { useTheme } from '../../contexts/Theme';
import { CustomStyles } from '../../types';

export const useStyles = <T extends CustomStyles, U>(
  makeStyles: (theme: U | null) => T
): StyleSheet.NamedStyles<T> => {
  const { theme } = useTheme<U>();
  const styles = createStyle(makeStyles(theme));

  return styles;
};
