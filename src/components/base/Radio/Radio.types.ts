import type { ChangeEvent, ReactNode } from 'react';

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
   * value for radio
   */
  value?: string;
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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default RadioProps;
