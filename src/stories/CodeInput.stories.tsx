import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CodeInput, CodeInputProps } from './CodeInput';

export default {
  title: 'Skiff/Code Input',
  component: CodeInput,
} as Meta;

const Template: Story<CodeInputProps> = (args) => <CodeInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  codeLength: 6,
  numeric: true,
  value: '123456'
};
