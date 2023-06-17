import { MakeStylesProps } from 'src/types';

import { Theme } from '../../mocks/mockTheme';

export type CreateStyles<T extends string> = MakeStylesProps<T, Theme>;
