// core
import { Story, Meta } from '@storybook/react/types-6-0'
import { MemoryRouter } from 'react-router-dom'

// container demo

// component current
import { FormProps } from './Form'
import Form from './Form'

// components
import { DribbbleIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from '../../../icons'
import { FormRow, TextField, LinkText, Сheckbox, Button, LinedText, SocialLinks, SocialLink } from '..'
import { DemoStorybookWrapper } from '../..'

// options
export default {
    title: 'Form',
    decorators: [
        getStory => <MemoryRouter>{getStory()}</MemoryRouter>,
    ],
    component: Form,
} as Meta

// show components
const Template: Story<FormProps> = (args) =>
    <DemoStorybookWrapper>

        <Form title='Register' {...args}>

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

    </DemoStorybookWrapper>

export const Default = Template.bind({});
Default.args = {}
