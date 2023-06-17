import { CreateStyles } from 'example/src/types';

type StylesKeys = 'container' | 'text';

export const styles: CreateStyles<StylesKeys> = (theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.text,
  },
});
