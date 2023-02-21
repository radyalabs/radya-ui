import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  args: {
    children: 'Button',
    size: 'medium',
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      defaultValue: 'primary',
      control: { type: 'radio' },
      options: ['primary', 'danger', 'outline', 'dashed'],
      description: 'Description belongs here',
    },
    rounded: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'primary',
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
  },
};

export const Outline: Story = {
  args: {
    type: 'outline',
  },
};

export const Dashed: Story = {
  args: {
    size: 'medium',
    type: 'dashed',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    type: 'primary',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    type: 'primary',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    type: 'primary',
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
