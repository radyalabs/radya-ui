import styles from './Button.module.scss';

interface ButtonProps {
  /**
   * What background color to use
   */
  className?: string;
  /**
   * What background color to use
   */
  color?: 'primary' | 'danger';
  /**
   * Button colors
   */
  type?: 'filled' | 'outline' | 'outline-dashed';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional button rounded
   */
  isRound?: boolean;
  /**
   * Optional click handler
   */
  isDisabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  color = 'primary',
  type = 'filled',
  size = 'medium',
  isDisabled = false,
  isRound = false,
  className,
  label,
  onClick,
}: ButtonProps) => {
  const styleButton = [styles.button];

  if (className) styleButton.push(className);

  if (color === 'primary') styleButton.push(styles.colorPrimary);
  if (color === 'danger') styleButton.push(styles.colorDanger);

  if (type === 'filled') styleButton.push(styles.typeFilled);
  if (type === 'outline') styleButton.push(styles.typeOutline);
  if (type === 'outline-dashed') styleButton.push(styles.typeOutlineDashed);

  if (size === 'small') styleButton.push(styles.sizeSmall);
  if (size === 'medium') styleButton.push(styles.sizeMedium);
  if (size === 'large') styleButton.push(styles.sizeLarge);

  if (isRound) styleButton.push(styles.rounded);

  if (isDisabled) styleButton.push(styles.disabled);

  return (
    <button
      type="button"
      className={styleButton.join(' ')}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default Button;
