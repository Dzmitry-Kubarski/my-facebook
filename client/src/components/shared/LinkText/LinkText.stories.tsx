import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'
import { linkTo } from '@storybook/addon-links'
import { withLinks } from '@storybook/addon-links'
import { MemoryRouter } from 'react-router-dom';

import { LinkTextProps } from './LinkText'
import LinkText from './LinkText'
import DemoStorybookWrapper from '../../DemoStorybookWrapper/DemoStorybookWrapper'

export default {
    title: 'LinkText',
    decorators: [
        getStory => <MemoryRouter>{getStory()}</MemoryRouter>,
    ],
    component: LinkText,
} as Meta

const Template: Story<LinkTextProps> = (args) =>
    <DemoStorybookWrapper >
        <LinkText {...args} />
    </DemoStorybookWrapper>

export const Default = Template.bind({})
Default.args = {
    text: 'Forgot Password?',
    to: '/test-page',
}

export const Static = Template.bind({})
Static.args = {
    text: 'Это ссылка в тесте поста',
    to: '/test-page',
    static: true,
}
