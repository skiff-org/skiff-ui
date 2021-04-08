import React from 'react';
import { Story, Meta } from '@storybook/react';
import Plus from './assets/plus.svg';
import { Dropdown, DropdownProps } from './Dropdown';
import './Dropdown.css';


export default {
  title: 'Skiff/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;
const plusIcon = <img style={{filter: 'brightness(0) saturate(100%)', width: '10px', height: '10px', margin: '0px 6px 0 6px'}} src={Plus}></img>;
export const Default = Template.bind({});
Default.args = {
  names: ["item one", "item two", "item three"],
  icons: [plusIcon, plusIcon, plusIcon],
  classNames: ['item', 'item', 'item']
};
