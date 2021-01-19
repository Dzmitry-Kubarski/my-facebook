// core
import { FC } from 'react'
import styled, { css } from 'styled-components'

// components
import { Сheckbox, Button, Form, FormRow, LinedText, LinkText, SocialLink, SocialLinks, TextField } from '../shared';

// images
import decorationImg from '../../images/landing/rocket.png'

const Register: FC = () => {
    return (
        <>
            <Form title='Create your Account!' decoration={decorationImg}>

                <FormRow>
                    <TextField label='Your Email' />
                </FormRow>

                <FormRow>
                    <TextField label='user email' />
                </FormRow>

                <FormRow>
                    <TextField label='Password' type='password' />
                </FormRow>

                <FormRow>
                    <TextField label='Repeat Password' type='password' />
                </FormRow>

                <FormRow spaceBetween>
                    <Сheckbox label='Remember Me' id='register' name='register' />
                    <LinkText text='Forgot Password?' to='/forgot' />
                </FormRow>

                <FormRow>
                    <Button text='Login to your Account!' full secondary />
                </FormRow>

            </Form>
        </>
    )
}

export default Register