import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const defaultBaseWidth = 375;
const defaultBaseHeight = 812;

export interface ResizeOptions {
  baseWidth?: number;
  baseHeight?: number;
}

const horizontalScale = (size: number, options?: ResizeOptions) => {
  const baseWidth = options?.baseWidth || defaultBaseWidth;
  return (width / baseWidth) * size;
};

const verticalScale = (size: number, options?: ResizeOptions) => {
  const baseHeight = options?.baseHeight || defaultBaseHeight;
  return (height / baseHeight) * size;
};

const moderateScale = (size: number, factor = 0.5, options?: ResizeOptions) =>
  size + (horizontalScale(size, options) - size) * factor;

export { horizontalScale as hs, verticalScale as vs, moderateScale as ms };
