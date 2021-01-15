import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../src/utils'

export const contexts = [
    {
        icon: 'box',
        title: 'Themes',
        components: [ThemeProvider],
        params: [
            { name: 'Light theme', props: { theme: lightTheme, default: true } },
            { name: 'Dark theme', props: { theme: darkTheme } }
        ],
        options: {
            deep: true,
        }
    }
]
