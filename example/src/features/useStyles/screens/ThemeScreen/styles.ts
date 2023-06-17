import { MakeStylesProps } from '@brantalikp/rn-resize';

type StylesKeys = 'container';

export const styles: MakeStylesProps<StylesKeys> = (theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
