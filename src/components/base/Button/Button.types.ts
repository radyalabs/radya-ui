import type { ReactNode } from 'react';

interface ButtonProps {
  /**
   * Custom Classname
   */
  children: ReactNode;
  /**
    /**
     * Custom Classname
     */
  className?: string;
  /**
   * Button colors
   */
  type?: 'primary' | 'danger' | 'outline' | 'dashed';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional button rounded
   */
  rounded?: boolean;
  /**
   * Optional button disabled
   */
  disabled?: boolean;
  /**
   * Optional button loading state
   */
  loading?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export default ButtonProps;
