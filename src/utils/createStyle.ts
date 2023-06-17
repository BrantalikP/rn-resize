import { StyleSheet } from 'react-native';

import { vsKeys, msKeys, hsKeys } from './presets';
import { ResizeOptions, hs, ms, vs } from './resize';
import { CustomStyles } from '../types';

export const createStyle = <T extends CustomStyles>(
  styles: T,
  options?: ResizeOptions
): StyleSheet.NamedStyles<T> => {
  const newStyles: Record<string, Record<string, any>> = {};

  for (const style in styles) {
    newStyles[style] = {};

    for (const key in styles[style]) {
      const value = styles[style][key];

      if (typeof value !== 'number') {
        newStyles[style][key] = value;
        continue;
      }

      if (vsKeys.has(key)) {
        newStyles[style][key] = vs(value, options);
      } else if (hsKeys.has(key)) {
        newStyles[style][key] = hs(value, options);
      } else if (msKeys.has(key)) {
        newStyles[style][key] = ms(value, undefined, options);
      } else {
        newStyles[style][key] = value;
      }
    }
  }

  return StyleSheet.create(newStyles) as StyleSheet.NamedStyles<T>;
};
