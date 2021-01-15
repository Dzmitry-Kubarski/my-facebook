import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'

import { ButtonProps } from './Button'
import Button from './Button'
import DemoStorybookWrapper from '../../DemoStorybookWrapper/DemoStorybookWrapper'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) =>
  <DemoStorybookWrapper >
    <Button {...args} />
  </DemoStorybookWrapper>

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary',
}

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary',
  secondary: true,
}

export const Full = Template.bind({});
Full.args = {
  full: true,
  text: 'Button Full',
}

export const NoShadow = Template.bind({});
NoShadow.args = {
  noShadow: true,
  text: 'Button noShadow',
}


