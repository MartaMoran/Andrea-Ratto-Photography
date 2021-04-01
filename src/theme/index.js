import { createMuiTheme } from '@material-ui/core';
import { esES } from '@material-ui/core/locale';

import palette from './palette';
import overrides from './overrides';

const baseTheme = {
  palette
};
const theme = createMuiTheme(baseTheme, esES);
theme.overrides = overrides(theme);

export default theme;
