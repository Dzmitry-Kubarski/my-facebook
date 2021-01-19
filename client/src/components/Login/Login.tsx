// core
import { FC } from 'react'
import styled, { css } from 'styled-components'

// icons
import { DribbbleIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from '../../icons';

// components
import { Сheckbox, Button, Form, FormRow, LinedText, LinkText, SocialLink, SocialLinks, TextField } from '../shared';

// images
import decorationImg from '../../images/landing/rocket.png'

const Login: FC = () => {
    return (
        <>
            <Form title='Account Login' decoration={decorationImg}>

                <FormRow>
                    <TextField label='Username' />
                </FormRow>

                <FormRow>
                    <TextField label='Password' />
                </FormRow>

                <FormRow spaceBetween>
                    <Сheckbox label='Remember Me' id='login' name='login' />
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
        </>
    )
}

export default Login