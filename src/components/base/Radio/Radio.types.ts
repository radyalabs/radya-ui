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
   * name of radio
   */
  name?: string;
  /**
   * id of radio
   */
  id?: string;
  /**
   * checked for radio
   */
  checked?: boolean;
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
