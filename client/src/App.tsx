// core
import React, { FC, useState } from 'react'
import { Route } from 'react-router-dom'

// libs
import { ThemeProvider } from 'styled-components'

// utils
import { darkTheme, lightTheme, GlobalStyle, typeScale, weight, gray } from './utils'

// components
import TestPage from './pages/TestPage'
import AuthPage from './pages/AuthPage'
import { ToggleTheme } from './components';


const App: FC = () => {
    const [myTheme, setMyTheme] = useState(lightTheme)

    const toggleTheme = (): void => {
        setMyTheme(myTheme.title === 'light' ? darkTheme : lightTheme)
    }

    return (
        <ThemeProvider theme={myTheme}>

            <ToggleTheme toggleTheme={toggleTheme} />

            <Route path='/test-page' component={TestPage} />
            <Route path='/' component={AuthPage} />

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App

