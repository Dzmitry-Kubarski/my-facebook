import 'styled-components'

import { lightTheme } from './utils'

declare module 'styled-components' {
    type Theme = typeof lightTheme;
    export interface DefaultTheme extends Theme { }
}
