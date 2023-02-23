import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
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
    color: {
      defaultValue: 'default',
      control: { type: 'radio' },
      options: ['default', 'primary', 'danger'],
      description: 'Description belongs here',
    },
    variant: {
      defaultValue: 'default',
      control: { type: 'radio' },
      options: ['default', 'outline', 'dashed'],
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
export const Default: Story = {
  args: {
    color: 'default',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
  },
};

export const DefaultVariant: Story = {
  args: {
    variant: 'default',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Dashed: Story = {
  args: {
    variant: 'dashed',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    color: 'primary',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'primary',
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
