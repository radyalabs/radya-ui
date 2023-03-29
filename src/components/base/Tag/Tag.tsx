import { Xmark } from '@/components/icons';

import type TagProps from './Tag.types';

import styles from './Tag.module.scss';

const Tag = ({
  children,
  className,
  color,
  closable = false,
  type = 'default',
  onClose,
}: TagProps) => {
  const styleTag = [styles.tag];

  if (className) styleTag.push(className);

  if (type === 'default') styleTag.push(styles.typeDefault);
  if (type === 'primary') styleTag.push(styles.typePrimary);
  if (type === 'warning') styleTag.push(styles.typeWarning);
  if (type === 'success') styleTag.push(styles.typeSuccess);
  if (type === 'danger') styleTag.push(styles.typeDanger);

  return (
    <div
      style={
        color ? { backgroundColor: `${color}`, border: 0, color: 'white' } : {}
      }
      className={`flex items-center gap-2 ${styleTag.join(' ')} `}
    >
      <p>{children}</p>
      {closable && (
        <button type="button" onClick={onClose}>
          <Xmark />
        </button>
      )}
    </div>
  );
};
export default Tag;
