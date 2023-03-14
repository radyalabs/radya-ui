import type { Meta, StoryObj } from '@storybook/react';

import Tag from './Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  args: {
    children: 'Item Tag',
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
    closable: false,
    children: 'Default',
  },
};

export const Primary: Story = {
  args: {
    type: 'primary',
    closable: false,
    children: 'Primary',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    closable: false,
    children: 'Warning',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    closable: false,
    children: 'Success',
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
    closable: false,
    children: 'Danger',
  },
};

export const Custom: Story = {
  args: {
    type: 'default',
    closable: false,
    color: '#FF0000',
    children: 'Closable',
  },
};

export const Closable: Story = {
  args: {
    type: 'default',
    closable: true,
    children: 'Closable',
  },
};
