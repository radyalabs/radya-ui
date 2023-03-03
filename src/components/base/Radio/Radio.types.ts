import type { ReactNode } from 'react';

interface RadioProps {
  /**
   * Label for radio
   */
  children: ReactNode;
  /**
   * Custom Classname
   */
  className?: string;
  /**
   * Optional radio disabled
   */
  disabled?: boolean;
  /**
   * Optional change handler
   */
  onChange?: () => void;
}

export default RadioProps;
