import Search from '@/components/icons/Search/Search';

import type TextFieldProps from './TextField.types';

import styles from './TextField.module.scss';

const TextField = ({
  className,
  placeholder = 'Enter Text Here',
  id = 'input',
  search = false,
  value,
  disabled = false,
  onChange,
}: TextFieldProps) => {
  const styleTextField = [styles.textfield];

  if (className) styleTextField.push(className);
  if (search) styleTextField.push(styles.paddingSearch);
  return (
    <div className="w-1/2 relative">
      {search && <div className={styles.searchStyle}><Search /></div>}
      <input
        className={styleTextField.join(' ')}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default TextField;
