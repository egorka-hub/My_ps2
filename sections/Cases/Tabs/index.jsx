import c from 'classnames';
import CATEGORIES from './consts';

import styles from './index.module.scss';

function Tabs({
  selectedCategories = [],
  setSelectedCategories,
}) {
  const handleSelect = (cat) => {
    if (cat === 'all') {
      setSelectedCategories(['all']);
    } else {
      const withOutAll = selectedCategories.filter((it) => it !== 'all');
      setSelectedCategories([...withOutAll, cat]);
    }
  };

  // eslint-disable-next-line consistent-return
  const handleRemove = (cat) => {
    if (cat === 'all') {
      return null;
    }
    if (selectedCategories.length === 1) {
      setSelectedCategories(['all']);
    } else {
      const filteredArr = selectedCategories.filter((it) => it !== cat);
      setSelectedCategories(filteredArr);
    }
  };

  const handleClick = (isActive, cat) => {
    if (isActive) {
      handleRemove(cat);
    } else {
      handleSelect(cat);
    }
  };

  return (
    <div className={styles.tabs}>
      {CATEGORIES.map(({ title, category }, i) => {
        const isActive = selectedCategories.includes(category);
        return (
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}_tab`}
            type="button"
            onClick={() => handleClick(isActive, category)}
            className={c(styles.tab, { [styles.active]: isActive })}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
