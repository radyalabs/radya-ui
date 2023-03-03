import type { Meta, StoryObj } from '@storybook/react';

import Radio from './Radio';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/Radio',
  component: Radio,
  args: {
    children: 'Button',
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Basic: Story = {
  args: {
    children: 'Radio Button',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Radio Button',
    disabled: true,
  },
};
