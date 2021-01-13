import 'styled-components'
import { CSSProp } from 'styled-components'

import { lightTheme } from './utils'

declare module 'styled-components' {
    type Theme = typeof lightTheme;
    export interface DefaultTheme extends Theme { }
}

declare module 'react' {
    interface Attributes {
        css?: CSSProp | CSSObject;
    }
}
