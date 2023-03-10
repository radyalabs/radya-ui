import type { ChangeEvent, ReactNode } from 'react';

interface RadioProps {
  /**
   * can be Text or Icon
   */
  prependObject?: ReactNode;
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
   * Optional input success
   */
  success?: boolean;
  /**
   * Optional input error
   */
  error?: boolean;
  /**
   * Optional input maxlength
   */
  maxlength?: number;
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
