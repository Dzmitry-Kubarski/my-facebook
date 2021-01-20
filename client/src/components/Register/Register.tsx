// core
import { FC } from 'react'

// libs
import styled from 'styled-components'

import { weight, typeScale } from '../../utils'

// components
import { Сheckbox, Button, Form, FormRow, LinkText, TextField } from '../shared'

// styles
const StyledFormText = styled.p`
    color: ${({ theme }) => theme.colorText};
    font-size: ${typeScale.fs14};
    font-weight: ${weight.medium};
    margin-top: 30px;
`

const Register: FC = () => {
    return (
        <>
            <Form title='Create your Account!'>

                <FormRow>
                    <TextField label='Your Email' autoFocus={true} />
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
                    <Сheckbox label='Send me news and updates via email' id='register' name='register' />
                    {/* <LinkText text='Forgot Password?' to='/forgot' /> */}
                </FormRow>

                <FormRow>
                    <Button text='Login to your Account!' full />
                </FormRow>

                <StyledFormText>
                    You'll receive a confirmation email in your inbox with a link to activate your account.
                    If you have any problems,

                    <LinkText text='contact us!' to='/contacts' static />
                </StyledFormText>

            </Form>
        </>
    )
}

export default Register