import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextField, TextFieldProps } from './TextField';

export default {
  title: 'Skiff/Text Field',
  component: TextField
} as Meta;

const Template: Story<TextFieldProps> = args => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  hint: 'This is a tooltip hint.',
  hintDirection: 'right'
};
