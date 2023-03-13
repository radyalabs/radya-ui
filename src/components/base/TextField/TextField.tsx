import type TextFieldProps from './TextField.types';

import styles from './TextField.module.scss';

const TextField = ({
  className,
  prependObject,
  appendObject,
  placeholder = 'Enter Text Here',
  id = 'input',
  value,
  rounded,
  maxlength,
  success = false,
  error = false,
  disabled = false,
  onChange,
}: TextFieldProps) => {
  const styleTextField = [styles.textfield];

  if (className) styleTextField.push(className);
  if (prependObject) styleTextField.push(styles.paddingSearch);
  if (success) styleTextField.push(styles.borderSuccess);
  if (error) styleTextField.push(styles.borderError);
  if (rounded) styleTextField.push(styles.rounded);
  if (disabled) styleTextField.push(styles.disabled);
  return (
    <div className="relative">
      {prependObject && <div className={styles.prependObject}>{prependObject}</div>}
      <input
        className={styleTextField.join(' ')}
        id={id}
        placeholder={placeholder}
        value={value}
        maxLength={maxlength}
        onChange={onChange}
        disabled={disabled}
      />
      {appendObject && <div className={styles.appendObject}>{appendObject}</div>}
    </div>
  );
};

export default TextField;
