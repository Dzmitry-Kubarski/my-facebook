// core
import React, { FC, useState } from 'react'
import { Route } from 'react-router-dom'

// libs
import { ThemeProvider } from 'styled-components'

// utils
import { darkTheme, lightTheme, GlobalStyle, typeScale, weight, gray } from './utils'

// routes
import { useRoutes } from './routes/routes'

// components
import { Header } from './components'
import { Container, Search, ToggleTheme } from './components/shared'

const App: FC = () => {
    const [myTheme, setMyTheme] = useState(lightTheme)

    const isAuthenticated = false // mock
    const routes = useRoutes(isAuthenticated)

    const toggleTheme = (): void => {
        setMyTheme(myTheme.title === 'light' ? darkTheme : lightTheme)
    }

    return (
        <ThemeProvider theme={myTheme}>
            <ToggleTheme toggleTheme={toggleTheme} />

            {isAuthenticated && <Header />}

            <div>
                {routes}
            </div>

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App

