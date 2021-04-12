import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Avatar, AvatarProps } from './Avatar';

export default {
  title: 'Skiff/Avatar',
  component: Avatar
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'A'
};

export const Square = Template.bind({});
Square.args = {
  type: 'square',
  children: 'B',
  color: '#027aff',
  size: 'large'
};

export const Badge = Template.bind({});
Badge.args = {
  children: 'C',
  size: 'large',
  color: '#9900d1',
  showBadge: true,
  badgePosition: 'br'
};
