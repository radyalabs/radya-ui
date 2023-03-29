import type { ReactNode } from 'react';

interface TagProps {
  /**
   * Content of tag
   */
  children: ReactNode;
  /**
   * Custom Classname
   */
  className?: string;
  /**
   * Tag Types
   */
  type?: 'default' | 'primary' | 'warning' | 'success' | 'danger';
  /**
   * Custom color for tag in Hex Color format
   */
  color?: string;
  /**
   * Set Closable tag
   */
  closable?: boolean;
  /**
   * Close Click handler
   */
  onClose?: () => void;
}

export default TagProps;
