import type { Meta, StoryObj } from '@storybook/react';

import TextField from './TextField';

// import searchIcon from '@/components/icons/Search/Search';

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

    search: {
      control: 'boolean',
    },

    success: {
      control: 'boolean',
    },

    error: {
      control: 'boolean',
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

export const Search: Story = {
  args: {
    prependObject: '',
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

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'disabled',
  },
};
