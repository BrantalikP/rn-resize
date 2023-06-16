import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../themes';

export type StyleProp = ViewStyle & TextStyle & ImageStyle;
export type CustomStyles = Record<string, StyleProp>;

export type MakeStylesProps<T extends string> = (
  theme: Theme
) => Record<T, StyleProp>;
