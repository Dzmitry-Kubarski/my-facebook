// core
import { Story, Meta } from '@storybook/react/types-6-0'
import { MemoryRouter } from 'react-router-dom'

// component current
import { LinkTextProps } from './LinkText'
import LinkText from './LinkText'
import { DemoStorybookWrapper } from '../..'

// container demo

// options
export default {
    title: 'LinkText',
    decorators: [
        getStory => <MemoryRouter>{getStory()}</MemoryRouter>,
    ],
    component: LinkText,
} as Meta

// show components
const Template: Story<LinkTextProps> = (args) =>
    <DemoStorybookWrapper>
        <LinkText {...args} />
    </DemoStorybookWrapper>

export const Default = Template.bind({})
Default.args = {
    text: 'Forgot Password?',
    to: '/test-page',
}

export const Static = Template.bind({})
Static.args = {
    text: 'Это ссылка в тексте поста',
    to: '/test-page',
    static: true,
}
