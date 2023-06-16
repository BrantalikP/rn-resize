import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
const DashboardScreen = () => {
  // const { container } = useStyles(styles);
  return (
    <View style={styles.container}>
      <Text>DashboardScreen</Text>
    </View>
  );
};

export { DashboardScreen };
