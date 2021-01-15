// core
import React, { FC, useState } from 'react'
import { ThemeProvider } from 'styled-components'

// utils
import { darkTheme, lightTheme, GlobalStyle } from './utils'

// components
import TextField from './components/shared/TextField/TextField'
import Button from './components/shared/Button/Button'
import Сheckbox from './components/shared/Сheckbox/Сheckbox'
import LinkText from './components/shared/LinkText/LinkText'
import { Link, Route } from 'react-router-dom';
import TestPage from './pages/TestPage';


const App: FC = () => {
    const [myTheme, setMyTheme] = useState(lightTheme)

    const toggleTheme = (): void => {
        setMyTheme(myTheme.title === 'light' ? darkTheme : lightTheme)
    }

    return (
        <ThemeProvider theme={myTheme}>
            <div style={{ padding: '80px' }}>
                <button onClick={toggleTheme} style={{ margin: '30px' }}>темная тема</button>

                <LinkText text='Forget' to='/users' />

                <LinkText text='Ссылка в тексте' to='/users' static />

                <Route path='/test-page' component={TestPage} />
            </div>

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App


