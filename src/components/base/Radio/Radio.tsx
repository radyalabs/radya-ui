import type RadioProps from './Radio.types';

import styles from './Radio.module.scss';

const Radio = ({
  children,
  className,
  name = 'radio',
  id = 'radio',
  value,
  checked,
  disabled = false,
  onChange,
}: RadioProps) => {
  const styleRadio = [styles.radio];

  if (className) styleRadio.push(className);

  return (
    <div className="flex items-center gap-1">
      <input
        type="radio"
        id={id}
        checked={checked}
        name={name}
        value={value}
        className={styleRadio.join(' ')}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export default Radio;
