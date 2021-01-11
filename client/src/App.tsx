// core
import React, { FC, useState } from 'react'
import { ThemeProvider } from 'styled-components'

// components
import TextField from './components/shared/TextField/TextField'
import Button from './components/shared/Button/Button'

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

                <TextField label='Your Email' type='tel' />

                <TextField label='Username' type='text' />

                <Button text='button' full />

                <Button text='button' full secondary />

                <Button text='button' full secondary />

                <button onClick={toggleTheme}>темная тема</button>
            </div>

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App


