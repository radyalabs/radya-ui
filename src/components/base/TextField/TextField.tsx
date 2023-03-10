import type TextFieldProps from './TextField.types';

import styles from './TextField.module.scss';

const TextField = ({
  className,
  prependObject,
  placeholder = 'Enter Text Here',
  id = 'input',
  value,
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
  return (
    <div className="relative">
      {prependObject && <div className={styles.searchStyle}>{prependObject}</div>}
      <input
        className={styleTextField.join(' ')}
        id={id}
        placeholder={placeholder}
        value={value}
        maxLength={maxlength}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default TextField;
