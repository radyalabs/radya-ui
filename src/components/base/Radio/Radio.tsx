import type RadioProps from './Radio.types';

import styles from './Radio.module.scss';

const Radio = ({
  children,
  className,
  disabled = false,
  onChange,
}: RadioProps) => {
  const styleRadio = [styles.radio];

  if (className) styleRadio.push(className);

  return (
    <div className="flex items-center gap-1">
      <input
        type="radio"
        id="radioBtn"
        className={styleRadio.join(' ')}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor="radioBtn">
        {children}
      </label>
    </div>
  );
};

export default Radio;
