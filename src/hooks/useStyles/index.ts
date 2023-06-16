import { StyleSheet } from 'react-native';

import { Theme } from '../../themes';
import { createStyle } from '../../utils/createStyle';

import { useTheme } from '../../contexts/Theme';
import { CustomStyles } from '../../types';

type MakeStylesCallback<T> = (theme: Theme | null) => T;

export const useStyles = <T extends CustomStyles>(
  makeStyles: MakeStylesCallback<T>
): StyleSheet.NamedStyles<T> => {
  const { theme } = useTheme();
  const styles = createStyle(makeStyles(theme));

  return styles;
};
