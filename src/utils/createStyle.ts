import { StyleSheet } from 'react-native';

import { currentPlatform } from './helpers';
import { vsKeys, msKeys, hsKeys, PlatformKeys } from './presets';
import { ResizeOptions, hs, ms, vs } from './resize';
import { CustomStyles } from '../types';

const resizeValue = (key: string, value: number, options?: ResizeOptions) => {
  if (vsKeys.has(key)) {
    return vs(value, options);
  } else if (hsKeys.has(key)) {
    return hs(value, options);
  } else if (msKeys.has(key)) {
    return ms(value, undefined, options);
  } else {
    return value;
  }
};

const platform = currentPlatform();

const getResizedValues = (
  styles: Record<string, any>,
  options?: ResizeOptions
) => {
  const newStyles: Record<string, any> = {};
  for (const key in styles) {
    if (PlatformKeys.has(key)) continue; // Skip the platform-specific key

    const value = styles[key];

    if (typeof value !== 'number') {
      newStyles[key] = value;
      continue;
    }

    newStyles[key] = resizeValue(key, value, options);
  }

  return newStyles;
};

export const createStyle = <T extends CustomStyles>(
  styles: T,
  options?: ResizeOptions
): StyleSheet.NamedStyles<T> => {
  const newStyles: Record<string, Record<string, any>> = {};

  for (const style in styles) {
    const mainStyles = styles[style] as Record<string, any>;
    const platformStyles = mainStyles[platform] as Record<string, any>;

    let processedStyles = getResizedValues(mainStyles, options);

    if (platformStyles) {
      const resizedPlatformStyles = getResizedValues(platformStyles, options);
      processedStyles = { ...processedStyles, ...resizedPlatformStyles };
    }

    newStyles[style] = processedStyles;
  }

  return StyleSheet.create(newStyles) as StyleSheet.NamedStyles<T>;
};
