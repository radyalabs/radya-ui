import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      defaultValue: 'primary',
      control: { type: 'inline-radio' },
      options: ['primary', 'danger'],
      description: 'Description',
      type: 'string',
    },
    type: {
      defaultValue: 'filled',
      control: { type: 'radio' },
      options: ['filled', 'outline', 'outline-dashed'],
    },
    isRound: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Button',
    size: 'medium',
    type: 'filled',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Outline: Story = {
  args: {
    size: 'small',
    label: 'Button',
    type: 'outline',
  },
};

export const Rounded: Story = {
  args: {
    label: 'Button',
    isRound: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    isDisabled: true,
  },
};
