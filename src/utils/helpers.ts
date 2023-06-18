import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
const aspectRatio = height / width;
const isTablet = aspectRatio < 1.6;

export const currentPlatform = () => {
  if (Platform.OS !== 'web' && isTablet) {
    return 'tablet';
  }

  return Platform.OS;
};
