import TooltipDirectionEnum from '@/components/base/Tooltip/Tooltip.enum';
import type { SpacingStyleTypes } from '@/components/base/Tooltip/Tooltip.types';

const setSpacingPosition = (direction: string, spacing: string) => {
  let spacingStyle: SpacingStyleTypes = { bottom: spacing };

  if (
    direction === TooltipDirectionEnum.Bottom
    || direction === TooltipDirectionEnum.BottomLeft
    || direction === TooltipDirectionEnum.BottomRight
  ) {
    spacingStyle = { top: spacing };
  }

  if (
    direction === TooltipDirectionEnum.Right
    || direction === TooltipDirectionEnum.RightTop
    || direction === TooltipDirectionEnum.RightBottom
  ) {
    spacingStyle = { left: spacing };
  }

  if (
    direction === TooltipDirectionEnum.Left
    || direction === TooltipDirectionEnum.LeftTop
    || direction === TooltipDirectionEnum.LeftBottom
  ) {
    spacingStyle = { right: spacing };
  }

  return spacingStyle;
};

export default setSpacingPosition;
