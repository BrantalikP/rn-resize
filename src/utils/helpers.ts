import { Dimensions, Platform } from 'react-native';

export const PlatformKeys = {
  ios: 'ios',
  android: 'android',
  web: 'web',
  tablet: 'tablet',
  macos: 'macos',
  windows: 'windows',
};

const { height, width } = Dimensions.get('window');
const aspectRatio = height / width;
const isTablet = aspectRatio < 1.6;

export const currentPlatform = () => {
  if (Platform.OS !== 'web' && isTablet) {
    return PlatformKeys.tablet;
  }

  return Platform.OS;
};
