import styles from './Radio.module.scss';

interface RadioProps {
  /**
   * What background color to use
   */
  className?: string;
  /**
   * What background color to use
   */

  label: string;
  isDisabled?: boolean;

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Radio = ({
  label,
  className,
  isDisabled,
  onClick,
}: RadioProps) => {
  const styleRadio = [styles.radio];
  const flex = [styles.row];

  if (className) styleRadio.push(className);

  return (
    <div className={flex.join(' ')}>
      <input
        type="radio"
        id="radioBtn"
        className={styleRadio.join(' ')}
        onClick={onClick}
        disabled={isDisabled}
      />
      <label htmlFor="radioBtn">
        {label}
      </label>
    </div>
  );
};

export default Radio;
