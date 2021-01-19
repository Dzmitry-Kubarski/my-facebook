import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'

import { TextFieldProps } from './TextField'
import TextField from './TextField'
import { DemoStorybookWrapper } from '../..';

export default {
    title: 'TextField',
    component: TextField,
} as Meta

const Template: Story<TextFieldProps> = (args) =>
    <DemoStorybookWrapper>
        <TextField {...args} />
    </DemoStorybookWrapper>

export const Default = Template.bind({});
Default.args = {
    label: 'Username or Email',
}
