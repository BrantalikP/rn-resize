import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type StyleProp = ViewStyle & TextStyle & ImageStyle;

export type MakeStylesProps<T extends string, U> = (
  theme: U | null
) => Record<T, StyleProp>;

export type CustomStyle = ViewStyle | TextStyle | ImageStyle;

export interface CustomStyles {
  [key: string]: CustomStyle & PlatformStyle;
}

interface PlatformStyle {
  ios?: CustomStyle;
  android?: CustomStyle;
  web?: CustomStyle;
  tablet?: CustomStyle;
  macos?: CustomStyle;
  windows?: CustomStyle;
}
