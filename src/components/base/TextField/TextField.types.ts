import type { ChangeEvent } from 'react';

interface RadioProps {
  /**
   * Custom Classname
   */
  className?: string;
  /**
   * placeholder
   */
  placeholder?: string;
  /**
   * id of input
   */
  id?: string;
  /**
   * value of input
   */
  value?: string;
  /**
   * Optional input search
   */
  search?: boolean;
  /**
   * Optional input disabled
   */
  disabled?: boolean;
  /**
   * Optional change handler
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default RadioProps;
