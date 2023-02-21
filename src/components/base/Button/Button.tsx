import { Spinner } from '@/components/icons';

import type ButtonProps from './Button.types';

import styles from './Button.module.scss';

const Button = ({
  children,
  className,
  disabled = false,
  loading = false,
  rounded = false,
  size = 'medium',
  type = 'primary',
  onClick,
}: ButtonProps) => {
  const styleButton = [styles.button];

  if (className) styleButton.push(className);

  if (type === 'primary') styleButton.push(styles.typePrimary);
  if (type === 'danger') styleButton.push(styles.typeDanger);
  if (type === 'outline') styleButton.push(styles.typeOutline);
  if (type === 'dashed') styleButton.push(styles.typeDashed);

  if (size === 'small') styleButton.push(styles.sizeSmall);
  if (size === 'medium') styleButton.push(styles.sizeMedium);
  if (size === 'large') styleButton.push(styles.sizeLarge);

  if (rounded) styleButton.push(styles.rounded);
  if (disabled) styleButton.push(styles.disabled);

  return (
    <button
      type="button"
      className={`rounded-full ${styleButton.join(' ')}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
