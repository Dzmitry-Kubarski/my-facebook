import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'

import { СheckboxProps } from './Сheckbox'
import Сheckbox from './Сheckbox'
import DemoStorybookWrapper from '../../DemoStorybookWrapper/DemoStorybookWrapper'

export default {
    title: 'Сheckbox',
    component: Сheckbox,
} as Meta

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
