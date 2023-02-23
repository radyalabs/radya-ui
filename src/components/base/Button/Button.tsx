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
  color = 'default',
  variant = 'default',
  onClick,
}: ButtonProps) => {
  const styleButton = [styles.button];

  if (className) styleButton.push(className);

  if (color === 'default') styleButton.push(styles.colorDefault);
  if (color === 'primary') styleButton.push(styles.colorPrimary);
  if (color === 'danger') styleButton.push(styles.colorDanger);

  if (variant === 'default') styleButton.push(styles.variantDefault);
  if (variant === 'outline') styleButton.push(styles.variantOutline);
  if (variant === 'dashed') styleButton.push(styles.variantDashed);

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
