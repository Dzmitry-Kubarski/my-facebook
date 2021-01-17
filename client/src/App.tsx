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
import SocialLinks from './components/shared/SocialLinks/SocialLinks'
import SocialLink from './components/shared/SocialLink/SocialLink'
import { CrossIcon, DiscordIcon, DribbbleIcon, FacebookIcon, GoogleIcon, InstagramIcon, PatreonIcon, TwitterIcon, YoutubeIcon } from './icons'


const App: FC = () => {
    const [myTheme, setMyTheme] = useState(lightTheme)

    const toggleTheme = (): void => {
        setMyTheme(myTheme.title === 'light' ? darkTheme : lightTheme)
    }

    return (
        <ThemeProvider theme={myTheme}>
            <div style={{ padding: '80px' }}>
                {/* <button onClick={toggleTheme} style={{ margin: '30px' }}>темная тема</button> */}


                <SocialLinks>
                    <SocialLink href='https://www.youtube.com/' social='facebook'>
                        <FacebookIcon />
                    </SocialLink>

                    <SocialLink href='https://www.youtube.com/' social='twitter'>
                        <TwitterIcon />
                    </SocialLink>

                    <SocialLink href='https://www.youtube.com/' social='youtube'>
                        <YoutubeIcon />
                    </SocialLink>

                    <SocialLink href='https://www.youtube.com/' social='instagram'>
                        <InstagramIcon />
                    </SocialLink>

                    <SocialLink href='https://www.youtube.com/' social='patreon'>
                        <PatreonIcon />
                    </SocialLink>

                    <SocialLink href='https://www.youtube.com/' social='discord'>
                        <DiscordIcon />
                    </SocialLink>

                    <SocialLink href='https://www.youtube.com/' social='google'>
                        <GoogleIcon />
                    </SocialLink>

                    <SocialLink href='https://www.youtube.com/' social='dribbble'>
                        <DribbbleIcon />
                    </SocialLink>

                </SocialLinks>

                {/* <Route path='/test-page' component={TestPage} /> */}
            </div>

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App




