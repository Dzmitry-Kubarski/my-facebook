// core
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'

// component current
import { СheckboxProps } from './Сheckbox'
import Сheckbox from './Сheckbox'
import { DemoStorybookWrapper } from '../..';

// container demo

// options
export default {
    title: 'Сheckbox',
    component: Сheckbox,
} as Meta

// show components
const Template: Story<СheckboxProps> = (args) =>
    <DemoStorybookWrapper >
        <Сheckbox {...args} />
    </DemoStorybookWrapper>

export const Default = Template.bind({});
Default.args = {
    label: 'Remember Me',
    id: 'Default',
    name: 'Default',
}
