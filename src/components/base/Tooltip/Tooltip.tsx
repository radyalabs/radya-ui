import TooltipDirectionEnum from '@/components/base/Tooltip/Tooltip.enum';
import setSpacingPosition from '@/components/base/Tooltip/Tooltip.helpers';
import type { TooltipProps } from '@/components/base/Tooltip/Tooltip.types';

import styles from './Tooltip.module.scss';

const Tooltip = ({
  children,
  text,
  direction = TooltipDirectionEnum.Top,
  spacing = '120%',
}: TooltipProps) => (
  <div role="tooltip" className={styles.tooltip}>
    <div className={styles.children}>{children}</div>
    {' '}
    <span
      className={[styles.tooltipText, styles[direction]].join(' ')}
      style={setSpacingPosition(direction, spacing)}
    >
      {text}
    </span>
  </div>
);

export default Tooltip;
