import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/base/Button/Button';
import TooltipDirectionEnum from '@/components/base/Tooltip/Tooltip.enum';

import Tooltip from './Tooltip';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: (
      <Button color="primary" variant="outline">
        Hover me to Try Tooltip
      </Button>
    ),
    text: 'Prompt Text',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Top: Story = {
  args: {
    direction: TooltipDirectionEnum.Top,
  },
};

export const TopLeft: Story = {
  args: {
    direction: TooltipDirectionEnum.TopLeft,
  },
};

export const TopRight: Story = {
  args: {
    direction: TooltipDirectionEnum.TopRight,
  },
};

export const Bottom: Story = {
  args: {
    direction: TooltipDirectionEnum.Bottom,
  },
};

export const BottomLeft: Story = {
  args: {
    direction: TooltipDirectionEnum.BottomLeft,
  },
};

export const BottomRight: Story = {
  args: {
    direction: TooltipDirectionEnum.BottomRight,
  },
};

export const Right: Story = {
  args: {
    direction: TooltipDirectionEnum.Right,
    spacing: '110%',
  },
};

export const RightTop: Story = {
  args: {
    direction: TooltipDirectionEnum.RightTop,
    spacing: '110%',
  },
};

export const RightBottom: Story = {
  args: {
    direction: TooltipDirectionEnum.RightBottom,
    spacing: '110%',
  },
};

export const Left: Story = {
  args: {
    direction: TooltipDirectionEnum.Left,
    spacing: '110%',
  },
};

export const LeftTop: Story = {
  args: {
    direction: TooltipDirectionEnum.LeftTop,
    spacing: '110%',
  },
};

export const LeftBottom: Story = {
  args: {
    direction: TooltipDirectionEnum.LeftBottom,
    spacing: '110%',
  },
};
