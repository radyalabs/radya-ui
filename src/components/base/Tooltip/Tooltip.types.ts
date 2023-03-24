import type { ReactNode } from 'react';

import type TooltipDirectionEnum from '@/components/base/Tooltip/Tooltip.enum';

interface TooltipProps {
  /**
   * Content of tooltip, can be Text or Icon
   */
  children: ReactNode;
  /**
   * Text inside tooltip
   */
  text: string;
  /**
   * Direction of tooltip
   */
  direction?: `${TooltipDirectionEnum}`;
  /**
   * Tooltip spacing with children (in percent)
   */
  spacing?: string;
  /**
   * Whether the floating tooltip card is open or not.
   */
  open?: boolean;
}

interface SpacingStyleTypes {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export type { SpacingStyleTypes, TooltipProps };
