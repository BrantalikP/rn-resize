import { createStyles } from '@brantalikp/rn-resize';

export const styles = createStyles({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    web: {
      backgroundColor: 'pink',
    },
    ios: {
      backgroundColor: 'green',
    },
    android: {
      backgroundColor: 'blue',
    },
    tablet: {
      backgroundColor: 'red',
    },
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    web: {
      color: 'red',
    },
    android: {
      fontSize: 30,
      color: 'white',
    },
  },
});
