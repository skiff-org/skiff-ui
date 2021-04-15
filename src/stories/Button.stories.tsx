import React from 'react';
import { Story, Meta } from '@storybook/react';
import Plus from './assets/plus.svg';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Skiff/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;
const plusIcon = <img alt="plus" style={{ width: '14px', height: '14px', margin: '2px 8px 0 6px' }} src={Plus} />;
export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'disabled',
  children: 'Button'
};

export const Toolbar = Template.bind({});
Toolbar.args = {
  type: 'toolbar',
  children: 'Button'
};

export const Icon = Template.bind({});
Icon.args = {
  type: 'primary',
  children: 'Button',
  startIcon: plusIcon
};

export const Default = Template.bind({});
Default.args = {
  children: 'Button'
};
