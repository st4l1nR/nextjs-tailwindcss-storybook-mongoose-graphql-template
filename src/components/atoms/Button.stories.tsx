import React from 'react';
import Button from './Button';
import { type Story, type Meta } from '@storybook/react';
import type { props } from './Button';

const story: Meta = {
  title: 'Atoms/Button',
  component: Button,
};

const Template: Story<props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
  size: 'md',
  rounded: false,
};

export const Small = Template.bind({});
Small.args = {
  variant: 'secondary',
  label: 'Button',
  size: 'sm',
  rounded: false,
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'secondary',
  label: 'Button',
  size: 'md',
  rounded: false,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'secondary',
  label: 'Button',
  size: 'lg',
  rounded: false,
};

export default story;
