import { useEffect, useState } from 'react';

import { TooltipTriggerEnum } from '@/components/base/Tooltip/Tooltip.enum';
import setSpacingPosition from '@/components/base/Tooltip/Tooltip.helpers';
import type { TooltipProps } from '@/components/base/Tooltip/Tooltip.types';

import styles from './Tooltip.module.scss';

const Tooltip = ({
  children,
  text,
  direction = 'top',
  spacing = '120%',
  open = false,
  trigger = 'hover',
}: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const triggerHover = trigger === TooltipTriggerEnum.Hover;
  const triggerClick = trigger === TooltipTriggerEnum.Click;

  const handleClickTooltip = () => {
    if (triggerClick) {
      setShowTooltip(!showTooltip);
    }
  };

  const handleMouseEnter = () => {
    if (triggerHover) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    if (triggerHover) {
      setShowTooltip(false);
    }
  };

  useEffect(() => {
    if (open) {
      setShowTooltip(true);
    }
  }, [open]);

  return (
    <div
      role="tooltip"
      className={styles.tooltip}
      onClick={handleClickTooltip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <div className={styles.children}>{children}</div>
      {' '}
      <span
        className={`${[styles.tooltipText, styles[direction]].join(' ')} ${
          showTooltip && styles.open
        }`}
        aria-hidden={open}
        style={setSpacingPosition(direction, spacing || '120%')}
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
