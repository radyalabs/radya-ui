import type { Meta, StoryObj } from '@storybook/react';

import SearchIcon from '@/components/icons/Search/Search';

import TextField from './TextField';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/TextField',
  component: TextField,
  args: {
    disabled: false,
  },

  argTypes: {
    disabled: {
      control: 'boolean',
    },

    success: {
      control: 'boolean',
    },

    error: {
      control: 'boolean',
    },

    prependObject: {
      control: 'string',
    },

    appendObject: {
      control: 'string',
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Basic: Story = {
  args: {
    disabled: false,
  },
};

export const PrependObject: Story = {
  args: {
    prependObject: <SearchIcon />,
  },
};

export const AppendObject: Story = {
  args: {
    appendObject: <SearchIcon />,
  },
};

export const Success: Story = {
  args: {
    success: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
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
    placeholder: 'disabled',
  },
};
