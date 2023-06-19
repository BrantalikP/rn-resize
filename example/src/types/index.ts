import { MakeStylesProps } from '@brantalikp/rn-resize';

import { Theme } from '../theme/defaultTheme';

export type CreateStyles<T extends string> = MakeStylesProps<T, Theme>;
