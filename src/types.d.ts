import 'styled-components';
import { theme } from './app/theme.ts';
// and extend them!
type CustomTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
