import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Card, CardProps } from './Card';

export default {
  title: 'Skiff/Card',
  component: Card
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: '500px',
  height: '300px'
};
