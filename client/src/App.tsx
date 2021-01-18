// core
import React, { FC, useState } from 'react'
import { ThemeProvider } from 'styled-components'

// utils
import { darkTheme, lightTheme, GlobalStyle, typeScale, weight, gray } from './utils'

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
import { FormRow } from './components/shared/FormRow/FormRow'
import Form from './components/shared/Form/Form';
import { LinedText } from './components/shared/LinedText/LinedText'


const App: FC = () => {
    const [myTheme, setMyTheme] = useState(lightTheme)

    const toggleTheme = (): void => {
        setMyTheme(myTheme.title === 'light' ? darkTheme : lightTheme)
    }

    return (
        <ThemeProvider theme={myTheme}>
            <div style={{ padding: '80px' }}>
                <button onClick={toggleTheme} style={{ margin: '30px' }}>темная тема</button>

                <Form title='Register'>

                    <FormRow>
                        <TextField label='User name' />
                    </FormRow>

                    <FormRow>
                        <TextField label='user email' />
                    </FormRow>

                    <FormRow spaceBetween>
                        <Сheckbox label='Remember Me' id='remember' name='remember' />
                        <LinkText text='Forgot Password?' to='/forgot' />
                    </FormRow>

                    <FormRow>
                        <Button text='Login to your Account!' full secondary />
                    </FormRow>

                    <LinedText>Login with your Social Account</LinedText>

                    <FormRow marginTop>
                        <SocialLinks>
                            <SocialLink href='https://yandex.by/' social='facebook'>
                                <FacebookIcon />
                            </SocialLink>

                            <SocialLink href='https://yandex.by/' social='twitter'>
                                <TwitterIcon />
                            </SocialLink>

                            <SocialLink href='https://yandex.by/' social='dribbble'>
                                <DribbbleIcon />
                            </SocialLink>

                            <SocialLink href='https://yandex.by/' social='youtube'>
                                <YoutubeIcon />
                            </SocialLink>
                        </SocialLinks>
                    </FormRow>

                </Form>


                {/* <Route path='/test-page' component={TestPage} /> */}
            </div>

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App




