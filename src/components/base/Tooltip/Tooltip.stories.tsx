import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/base/Button/Button';
import {
  TooltipDirectionEnum,
  TooltipTriggerEnum,
} from '@/components/base/Tooltip/Tooltip.enum';

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
      <Button color="primary" variant="outline" className="my-20">
        Hover me to Try Tooltip
      </Button>
    ),
    text: 'Prompt Text',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    direction: {
      control: { type: 'select' },
      options: Object.values(TooltipDirectionEnum),
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Playground: Story = {
  args: {
    direction: TooltipDirectionEnum.Top,
    trigger: TooltipTriggerEnum.Hover,
  },
};

export const Open: Story = {
  args: {
    direction: TooltipDirectionEnum.Top,
    open: true,
    trigger: TooltipTriggerEnum.Click,
  },
};
