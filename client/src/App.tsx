// core
import React, { FC, useState } from 'react'
import { ThemeProvider } from 'styled-components'

// components
import TextField from './components/shared/TextField/TextField'
import Button from './components/shared/Button/Button'
import Сheckbox from './components/shared/Сheckbox/Сheckbox'


// utils
import { darkTheme, lightTheme, GlobalStyle } from './utils'

const App: FC = () => {
    const [myTheme, setMyTheme] = useState(lightTheme)

    const toggleTheme = (): void => {
        setMyTheme(myTheme.title === 'light' ? darkTheme : lightTheme)
    }

    return (
        <ThemeProvider theme={myTheme}>
            <div style={{ padding: '80px' }}>
                <button onClick={toggleTheme} style={{ margin: '30px' }}>темная тема</button>

                <Сheckbox label='this email' name='email' id='email' />

                <Сheckbox label='this name' id='name' name='name' />
            </div>

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App


