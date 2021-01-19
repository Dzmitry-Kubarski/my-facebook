// core
import { Story, Meta } from '@storybook/react/types-6-0'

// component current
import { ButtonProps } from './Button'
import Button from './Button'
import { DemoStorybookWrapper } from '../..'

// container demo

// options
export default {
  title: 'Button',
  component: Button,
} as Meta

// show components
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
