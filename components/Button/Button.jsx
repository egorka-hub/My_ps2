import { memo } from 'react';
import c from 'classnames';

import styles from '@/components/Button/Button.module.scss';

function Button({
  className,
  title,
  bordered = false,
}) {
  return (
    <div className={styles.wrapper}>
      <button className={c(
        styles.btn,
        className,
        { [styles.bordered]: bordered },
      )}
      >
        {title}
      </button>
    </div>
  );
}

export default memo(Button);
